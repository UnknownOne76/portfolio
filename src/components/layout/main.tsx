import "../../styles/globals.css";
import React from "react";
import Footer from "./footer";
import { HomeDatas } from "@/mock/home";
import Header from "./header";
import { Roboto } from "next/font/google";
const roboto = Roboto({subsets: ['latin'], weight: '300'});

interface Props {
  children: React.ReactNode;
  style?: string;
}

export const MainLayout = ({ children, style }: Props) => {
  return (
    <>
      <Header data={HomeDatas?.header} />
      <main className={`w-full flex flex-col justify-center items-center ${style} ${roboto.className}`}>
        {children}
      </main>
      <Footer data={HomeDatas?.footer} />
    </>
  );
};

export default MainLayout;
