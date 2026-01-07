import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SinglePage />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
