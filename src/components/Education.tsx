import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">May - December</p>
          <h2 className="text-3xl md:text-4xl font-bold">2024</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Prototyping"
            subTitle=""
            result="May"
            des="Present the developed image model to the MSUIIT - ICT 277 pannelists"
          />
          <ResumeCard
            title="Information Drive"
            subTitle=""
            result="August"
            des="Invite users to try and test the image model"
          />
           <ResumeCard
            title="Recognition"
            subTitle=""
            result="December"
            des="Present the developed and tested model in a Philippine Agriculture Convention"
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
};

export default Education;
