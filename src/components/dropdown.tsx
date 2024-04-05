import { usePageContext } from "@/contexts/pageContext";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface DropProps {
  data: string[];
  drop: boolean;
  setDrop: Dispatch<SetStateAction<boolean>>;
}

export const DropDown = ({ data, drop, setDrop }: DropProps) => {
  const { id } = usePageContext();

  return (
    <div
      className={`${
        drop && Number(id) === 0 ? "flex -translate-y-3" : "hidden"
      } flex flex-col justify-center items-center absolute sm:mt-[8%] md:mt-[75%] lg:mt-[45%] xl:mt-[35%] w-auto bg-slate-100 text-[#1c1c1c] p-2 cursor-pointer rounded-lg portrait:mt-[15%] ${
        drop
          ? "portrait:grid portrait:grid-flow-row portrait:grid-cols-2 gap-3"
          : ""
      }`}
      onMouseLeave={() => setDrop(false)}
    >
      {data.map((x, i) => {
        return (
          <Link
            key={i}
            href={`${x === "About Me" ? "/" : `/${x.toLowerCase()}`}`}
            className={`flex hover:border-b-2 hover:border-black cursor-pointer hover:transition-transform ease-in-out duration-100 w-auto text-center`}
          >
            {x}
          </Link>
        );
      })}
    </div>
  );
};

export default DropDown;
