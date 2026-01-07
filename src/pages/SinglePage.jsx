import { motion } from 'framer-motion';
import Button from '../components/Button';
import ArchiveGallery from '../components/ArchiveGallery';
import SkillBar from '../components/SkillBar';

const SinglePage = () => {

  const skills = [
    { name: 'Photoshop', level: 90 },
    { name: 'Illustrator', level: 95 },
    { name: 'InDesign', level: 85 },
    { name: 'Adobe XD', level: 80 },
  ];

  const softSkills = [
    'Travail d\'équipe',
    'Organisation',
    'Communication',
    'Adaptabilité',
  ];

  const languages = [
    { name: 'Arabe', level: 'Natif' },
    { name: 'Anglais', level: 'Courant' },
    { name: 'Français', level: 'Courant' },
  ];

  const experiences = [
    {
      company: 'Action Marketing Plus',
      position: 'Graphic Designer',
      period: '25/01/2024 - 25/07/2025',
      location: 'Maroc',
      description: 'Création de designs graphiques pour des campagnes marketing, développement d\'identités visuelles et production de supports print et digital.',
      achievements: [
        'Création de plus de 50 designs pour campagnes marketing',
        'Développement de 10 identités visuelles complètes',
        'Collaboration avec une équipe multidisciplinaire',
      ],
    },
    {
      company: 'Shem\'s Publicité',
      position: 'Graphic Designer',
      period: '01/06/2023 - 30/11/2023',
      location: 'Maroc',
      description: 'Conception de visuels publicitaires, infographies et supports de communication pour divers clients.',
      achievements: [
        'Production de visuels pour réseaux sociaux',
        'Création d\'infographies pour rapports clients',
        'Gestion de projets de A à Z',
      ],
    },
  ];

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mohamed.fechtali@example.com',
      href: 'mailto:mohamed.fechtali@example.com',
    },
    {
      icon: '📱',
      label: 'Téléphone',
      value: '+212702970861',
      href: 'tel:+212702970861',
    },
    {
      icon: '📍',
      label: 'Localisation',
      value: 'Maroc',
      href: null,
    },
  ];

  // Smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mf-amber-50/80 via-mf-teal-50/80 to-mf-indigo-50/80 -z-10"></div>
        
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-mf-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-25"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-mf-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-25"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-mf-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-25"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-gray-900"
              >
                Mohamed
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-gradient"
              >
                Fechtali
              </motion.span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4"
            >
              Infographic & Graphic Designer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              2 ans d'expérience — Photoshop, Illustrator, InDesign, Adobe XD
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button href="#portfolio" variant="primary" size="lg">
                Voir le Portfolio
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Me Contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              À <span className="text-gradient">Propos</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-rainbow mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <motion.div variants={cardVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Qui suis-je ?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Designer graphique spécialisé en infographie avec 2 ans d'expérience dans la création
                de visualisations de données et d'identités visuelles. Passionné par la transformation
                de données complexes en designs clairs et engageants.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Mon objectif est de créer des designs qui non seulement attirent l'attention mais
                communiquent efficacement le message souhaité. Je combine créativité et méthodologie
                pour livrer des projets qui dépassent les attentes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bilingue en arabe, anglais et français, je peux travailler avec des clients
                internationaux et adapter mes designs à différents contextes culturels.
              </p>
            </motion.div>

            <motion.div variants={cardVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Formation</h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-soft"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Diplôme Graphique Designer
                  </h3>
                  <p className="text-gray-600">
                    Formation complète en design graphique couvrant les principes fondamentaux
                    et les outils professionnels.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-soft"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Certification Adobe
                  </h3>
                  <p className="text-gray-600">
                    Certifications officielles Adobe pour Photoshop, Illustrator, InDesign et XD.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Compétences Techniques
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compétences Transversales</h2>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-gradient-to-r from-mf-indigo-50 to-mf-blue-50 rounded-xl"
                  >
                    <span className="text-mf-indigo-700">✓</span>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Langues</h2>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex justify-between items-center p-4 bg-gradient-to-r from-mf-amber-50 to-mf-orange-50 rounded-xl"
                  >
                    <span className="text-gray-900 font-semibold">{lang.name}</span>
                    <span className="text-mf-orange-700 font-medium">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Mon <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Découvrez une sélection de mes créations graphiques : posters, designs, illustrations et bien plus encore.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-rainbow mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Archive Gallery avec filtrage intégré */}
          <ArchiveGallery />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Mon <span className="text-gradient">Expérience</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              2 ans d'expérience professionnelle en design graphique et infographie.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-rainbow mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mf-indigo-400 via-mf-teal-400 to-mf-blue-400 transform md:-translate-x-1/2 origin-top"
            ></motion.div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-rainbow rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"
                  ></motion.div>

                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-color transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl font-semibold text-mf-indigo-700 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-600 mb-1">
                            {exp.period}
                          </p>
                          <p className="text-sm text-gray-500">{exp.location}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Réalisations :</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                              className="flex items-start text-gray-700"
                            >
                              <span className="text-mf-indigo-700 mr-2 mt-1">▸</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Me <span className="text-gradient">Contacter</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Vous avez un projet en tête ? Discutons-en ! Je suis toujours ouvert à de nouvelles
              collaborations créatives.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-rainbow mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            {/* Informations de contact - Grille moderne */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-color transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-rainbow flex items-center justify-center text-3xl mb-4 shadow-lg">
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-mf-indigo-700 hover:text-mf-indigo-800 transition-colors font-medium break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disponibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-mf-indigo-50 via-mf-blue-50 to-mf-teal-50 p-8 rounded-2xl shadow-soft border border-mf-indigo-100 max-w-2xl mx-auto"
            >
                <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <span className="mr-2">⏰</span>
                  Disponibilité
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <p className="text-gray-700 font-medium">
                      Réponse dans les 24-48 heures
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚡</span>
                    <p className="text-gray-700 font-medium">
                      Projets urgents : contact direct par téléphone
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-mf-indigo-200">
                    <p className="text-sm text-gray-600">
                      Disponible pour des collaborations créatives et des projets stimulants.
                    </p>
                  </div>
                </div>
              </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
