import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Order from "./components/Order";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Order />
      <footer className="py-10 text-center text-slate-600 border-t mt-10">
        © {new Date().getFullYear()} Barakah Treats • Made with love
      </footer>
    </div>
  );
}

export default App
