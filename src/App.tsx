import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import WebcamClassifier from './components/WebcamClassifier';
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Feature />
          <WebcamClassifier 
  modelURL="https://teachablemachine.withgoogle.com/models/1i-ED2nSZ/model.json"
  metadataURL="https://teachablemachine.withgoogle.com/models/1i-ED2nSZ/metadata.json"
/>
          <Vision />``
          <Contact />
          <FooterBottom />
    

        </div>
      </div>
    </main>
  );
}

export default App;
