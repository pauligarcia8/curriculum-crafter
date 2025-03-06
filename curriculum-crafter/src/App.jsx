import CvForm from "./components/CvForm";
import CvPreview from "./components/CvPreview";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FormContextProvider from "./store/user-form-context.jsx";

function App() {

  return (
    <FormContextProvider>
      <div className="flex flex-col">
        <NavBar />
        <div className="flex justify-between p-6 grow overflow-visible">
          <CvForm />
          <CvPreview />
        </div>
        <Footer />
      </div>
    </FormContextProvider>
  )
}

export default App;
