import CarouselSlide from "@/components/carousel";
import MainLayout from "@/components/layout/main";
import { usePageContext } from "@/contexts/pageContext";
import { HomeDatas } from "@/mock/home";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Projects = () => {
  const router = useRouter();
  const { id } = router?.query;
  const { setId } = usePageContext();
  const datas = HomeDatas?.projects;

  useEffect(() => {
    if (id) {
      setId(id as string);
    } else {
      return;
    }
  }, [id]);

  return (
    <MainLayout style={"bg-[#1c1c1c]"}>
      <div className="w-full grid grid-rows-3 grid-flow-col gap-4 sm:grid sm:grid-cols-1 sm:grid-flow-row xl:grid xl:grid-cols-2 xl:grid-flow-col xl:gap-4 justify-center items-center pt-5 mx-auto portrait:grid portrait:grid-cols-1 portrait:grid-flow-row select-none">
        {datas?.map((x, i) => (
          <div
            key={i}
            className="w-full flex flex-col justify-start text-white p-10"
          >
            <div className="w-full pl-9 cursor-pointer portrait:text-base portrait:pl-4">
              <div>Project Name: {x?.title}</div>
              <div className={`hover:animate-pulse`}>
                Link:{" "}
                <a href={x?.link} target="_blank">
                  {x?.link}
                </a>
              </div>
            </div>
            <CarouselSlide images={x?.images} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Projects;
