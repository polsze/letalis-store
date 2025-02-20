import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from "./pages/Categories";
import ProductList from "./pages/ProductList";
import SearchResults from "./components/SearchResults";





function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Categories />} />
            <Route path="/productos/:category/:link/:id" element={<ProductDetail />} />
            <Route path="/productos/:category" element={<ProductList />} />
            <Route path="/resultados-de-busqueda" element={<SearchResults />} />
            <Route path="/servicios" element={<Services />} /> {/* Nueva ruta */}
            <Route path="/nosotros" element={<About />} /> {/* Nueva ruta */}
            <Route path="/contacto" element={<Contact />} /> {/* Nueva ruta */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
