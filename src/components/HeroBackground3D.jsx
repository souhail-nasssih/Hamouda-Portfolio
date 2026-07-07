import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Torus, Icosahedron, Ring } from '@react-three/drei';
import * as THREE from 'three';

const COLORS = {
  amber: '#FBBF24',
  teal: '#2DD4BF',
  indigo: '#818CF8',
  orange: '#FB923C',
  blue: '#60A5FA',
};

const ORBIT_RADIUS = 5.2;
const ORBIT_RADIUS_OUTER = 6.2;

function OrbitRing({ radius, speed, tilt = 0, children }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      {children.map((child, i) => {
        const angle = (i / children.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <group key={child.key} position={[x, child.y ?? 0, z]}>
            {child.node}
          </group>
        );
      })}
    </group>
  );
}

function OrbitingTorus({ color, speed = 1, scale = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25 * speed;
  });

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.3} floatIntensity={0.6}>
      <Torus ref={ref} args={[1, 0.35, 32, 64]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.65}
          distort={0.2}
          speed={1.5}
          roughness={0.15}
          metalness={0.6}
        />
      </Torus>
    </Float>
  );
}

function OrbitingIcosahedron({ color, speed = 1, scale = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    ref.current.rotation.z = state.clock.elapsedTime * 0.2 * speed;
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.4} floatIntensity={0.7}>
      <Icosahedron ref={ref} args={[1, 1]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.7}
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitingRing({ color, speed = 1, scale = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <Float speed={1 * speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <Ring ref={ref} args={[0.8, 1.2, 64]} scale={scale}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.5}
          metalness={0.8}
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </Ring>
    </Float>
  );
}

function ParticleOrbit({ count = 60, radius = 5.8 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
      const r = radius + (Math.random() - 0.5) * 1.2;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    return pos;
  }, [count, radius]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={COLORS.indigo}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  const innerOrbit = [
    { key: 'torus-amber', y: 1.2, node: <OrbitingTorus color={COLORS.amber} speed={0.9} scale={0.75} /> },
    { key: 'ico-indigo', y: -0.8, node: <OrbitingIcosahedron color={COLORS.indigo} speed={1.1} scale={0.55} /> },
    { key: 'ring-teal', y: 0.4, node: <OrbitingRing color={COLORS.teal} speed={1} scale={0.9} /> },
    { key: 'ico-orange', y: -1.5, node: <OrbitingIcosahedron color={COLORS.orange} speed={0.8} scale={0.45} /> },
  ];

  const outerOrbit = [
    { key: 'torus-teal', y: -1, node: <OrbitingTorus color={COLORS.teal} speed={1.2} scale={0.6} /> },
    { key: 'ico-blue', y: 1.5, node: <OrbitingIcosahedron color={COLORS.blue} speed={0.7} scale={0.4} /> },
    { key: 'ring-indigo', y: 0, node: <OrbitingRing color={COLORS.indigo} speed={0.85} scale={0.7} /> },
  ];

  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[8, 8, 5]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-6, 4, 3]} intensity={0.6} color={COLORS.amber} />
      <pointLight position={[6, -3, 2]} intensity={0.5} color={COLORS.teal} />
      <pointLight position={[0, 5, -4]} intensity={0.4} color={COLORS.indigo} />

      <OrbitRing radius={ORBIT_RADIUS} speed={0.12} tilt={0.15}>
        {innerOrbit}
      </OrbitRing>

      <OrbitRing radius={ORBIT_RADIUS_OUTER} speed={-0.08} tilt={-0.1}>
        {outerOrbit}
      </OrbitRing>

      <ParticleOrbit count={60} radius={ORBIT_RADIUS} />
    </>
  );
}

function HeroBackground3D() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      {/* Léger voile — centre plus transparent pour laisser le texte lisible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 45% 50% at 50% 50%, transparent 0%, rgba(255,255,255,0.15) 55%, rgba(255,251,235,0.35) 100%)',
        }}
      />
    </div>
  );
}

export default HeroBackground3D;
