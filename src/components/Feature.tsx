import { AiFillAppstore } from "react-icons/ai";
import { SiProgress } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Identify"
            des="Through a camera input, I can identify Anthracnose, Powdery Mildew, or Scab in mangoes"
            icon={null}
          />
          <Card
            title="Calculate"
            des="The certainty of my identifications are calculated for your reference"
            icon={<AiFillAppstore />}
          />
          <Card
            title="Inform"
            des="I have a descriptive feature incorporated to inform users of what the identified disease means for their harvest"
            icon={<SiProgress />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
