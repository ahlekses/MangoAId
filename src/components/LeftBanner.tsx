import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["agriculture.", "farming.", "the Philippines."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">HELLO I AM</h4>
        <h1 className="text-6xl font-bold text-white">
         Mango<span className="text-designColor capitalize">AI</span>d
        </h1>
        <h2 className="text-4xl font-bold text-white">
          for <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#AAFF00" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        an open-source mango fruit disease AI dectector developed in the Philippines for anyone to contribute, download, and integrate in the technological advancement of mango harvest.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/ahlekses/MangoAId" target="_blank">
              <span className="bannerIcon">
              <BsGithub />
              </span>
            </a>
    
            <a href="https://teachablemachine.withgoogle.com/models/1i-ED2nSZ/" target="_blank">
              <span className="bannerIcon">
                <FaGoogle />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          
          </h2>
          <div className="flex gap-4">
           
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
