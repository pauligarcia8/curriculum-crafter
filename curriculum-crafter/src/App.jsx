import CvForm from "./components/CvForm";
import CvPreview from "./components/CvPreview";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <CvForm />
        <CvPreview />
      </div>
      <Footer />
    </div>
  )
}

export default App;
