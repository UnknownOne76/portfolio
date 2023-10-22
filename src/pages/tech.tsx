import MainLayout from "@/components/layout/main";
import { usePageContext } from "@/contexts/pageContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaSass } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress, SiStyledcomponents, SiPython } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoAws,
  BiLogoTailwindCss
} from "react-icons/bi";
import { SiNextdotjs , SiServerless } from "react-icons/si";

export const TechSkills = () => {
  const router = useRouter();
  const { id } = router?.query;
  const { setId } = usePageContext();

  useEffect(() => {
    if (id) {
      setId(id as string);
    } else {
      return;
    }
  }, [id]);

  return (
    <MainLayout style={"bg-[#1c1c1c]"}>
      <div className={`w-full flex flex-col justify-center items-center`}>
        <div className={`w-full flex flex-col justify-start p-[5%] text-white font-bold`}>
          <div>Programming and Web languages:</div>
          <div
            className={`w-[50%] grid grid-rows-2 grid-flow-col gap-10 pt-[2%] portrait:p-5`}
          >
            <AiFillHtml5 size={65} color={"#FF5733"} />
            <SiPython size={65} color={"white"} />
            <BiLogoCss3 size={65} color={"#2965f1"} />
            <FaSass size={65} color={"lightPink"} />
            <BiLogoJavascript size={65} color={"yellow"} />
            <BiLogoTypescript size={65} color={"#007acc"} />
          </div>
        </div>
        <div className={`w-full flex flex-col justify-start p-[5%] text-white font-bold`}>
          <div>NoSQL Databases:</div>
          <div
            className={`w-[50%] grid grid-rows-1 portrait:grid-rows-2 grid-flow-col gap-10 pt-[2%] portrait:p-5 portrait:w-full`}
          >
            <BiLogoMongodb size={65} color={"#589636"} className={"bg-white rounded-full"}/>
            <BiLogoFirebase size={65} color={"#FFA611"}/>
            <GrGraphQl size={65} color={"#e535ab"}/>
            <BiLogoAws size={65} color={"white"}/>
          </div>
        </div>
        <div className={`w-full flex flex-col justify-start p-[5%] text-white font-bold`}>
          <div>Frameworks:</div>
          <div
            className={`w-[50%] grid grid-rows-2 grid-flow-col gap-10 pt-[2%] portrait:gap-8 portrait:p-5 portrait:grid-rows-2 portrait:w-full`}
          >
            <FaReact size={65} color={"#61dbfb"}/>
            <SiServerless size={65} color={"#fd5750"}/>
            <SiNextdotjs size={65} color={"white"}/>
            <SiStyledcomponents size={65} color={"white"}/>
            <SiExpress size={65} color={"white"}/>
            <BiLogoTailwindCss size={65} color={"#01b7d6"}/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechSkills;
