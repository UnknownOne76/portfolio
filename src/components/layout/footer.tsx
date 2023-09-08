interface FooterProps {
   data: {
      context: string;
      year: string;
   }
}

export const Footer = ({data}: FooterProps) => {
  return (
    <div className={`w-full flex justify-center items-center bg-[#1c1c1c] text-white border-t-2 border-white`}>
      <div className={`w-full flex justify-start m-5 cursor-pointer`}>{data?.context}</div>
      <div className={`w-full flex justify-end m-5 cursor-pointer portrait:w-2/4`}>{data?.year}</div>
    </div>
  );
};

export default Footer;
