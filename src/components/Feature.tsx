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
        <Title title="Lorem" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Lorem"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={null}
          />
          <Card
            title="Lorem"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Lorem"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiProgress />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
