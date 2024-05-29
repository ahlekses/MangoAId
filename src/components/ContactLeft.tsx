import { FaFacebookF, FaInstagram} from "react-icons/fa";
import { contactImg } from "../assets";

const twoFB = (e) => {
  e.preventDefault();
  window.open('https://www.facebook.com/feegy/', '_blank');
  window.open('https://www.facebook.com/queenie/', '_blank'); // Replace 'https://www.example.com' with the second URL you want to open
};

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Go & Lucagbo</h3>
        <p className="text-lg font-normal text-gray-400">
          
        </p>
  
        <p className="text-base text-gray-400 tracking-wide">
        This is an initiative, by a pair of Masters of Science in Information Technology students at the Mindanao State University 
          - Iligan Institute of Technology (MSUIIT), to partake in the Philippine's technological advancement in agricultural innovation.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">For data set and development contributions find them in</h2>
        <div className="flex gap-4">
   
          <a
            href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a onClick={twoFB} target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
