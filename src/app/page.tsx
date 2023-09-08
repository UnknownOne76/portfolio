"use client";
import Introduction from "@/components/intro";
import MainLayout from "@/components/layout/main";
import TimeLine from "@/components/timeline";
import PageContextProvider from "@/contexts/pageContext";
import { HomeDatas } from "@/mock/home";

export default function Home() {
  return (
    <PageContextProvider> 
    <MainLayout style={"bg-[#1c1c1c]"}>
      <Introduction data={HomeDatas?.introduction}/>
      <TimeLine data={HomeDatas?.year2022}/>
      <TimeLine data={HomeDatas?.year2021}/>
      <TimeLine data={HomeDatas?.year2019}/>
    </MainLayout>
    </PageContextProvider>
  );
}
