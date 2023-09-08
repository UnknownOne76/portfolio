import { StaticImageData } from "next/image";
import CarouselSlide from "./carousel";

interface TimeProps {
  data: {
    id: string;
    context: string;
    images: StaticImageData[];
  };
}

export const TimeLine = ({ data }: TimeProps) => {
  return (
    <div
      className={`w-full flex flex-col justify-start p-[4%] text-white select-none portrait:mb-10`}
      id={data?.id}
    >
      <div className={`w-full flex flex-col justify-start gap-4 max-w-[90%]`}>
        <div className="text-yellow-500">AT {data?.id}</div>
        <div className="text-lg leading-7 portrait:text-sm portrait:leading-5">{data?.context}</div>
      </div>
      <CarouselSlide images={[...data?.images]} />
    </div>
  );
};

export default TimeLine;
