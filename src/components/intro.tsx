import rain from "@/images/rain.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

interface IntroProps {
  data: {
    topic: string;
  };
}

export const Introduction = ({ data }: IntroProps) => {
  return (
    <div
      className={`w-full flex flex-col justify-start p-[4%] text-white select-none portrait:max-w-full`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full flex justify-start items-center p-[4%] gap-2 portrait:relative`}
      >
        <Image
          src={rain}
          alt=""
          className={`w-36 h-36 rounded-full portrait:w-16 portrait:h-16`}
          priority={true}
        />
        <div
          className={`w-[60%] flex text-center pl-[1%] portrait:w-full portrait:text-[9.5px] portrait:text-left`}
        >
          {data?.topic}
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
