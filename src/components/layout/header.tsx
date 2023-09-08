import { FaFacebook , FaInstagram } from 'react-icons/fa';
import { AiFillWechat } from 'react-icons/ai';
import { SiHackaday } from 'react-icons/si';
import Link from 'next/link';
import { useState } from 'react';
import DropDown from '../dropdown';
import { CiMenuBurger } from 'react-icons/ci';
import { usePageContext } from '@/contexts/pageContext';

interface HeaderProps {
    data: {
    topics: {name: string , slug: string}[];
    fb: {url: string };
    instag: {url: string };
    wechat: {slug: string };
  }
}

export const Header = ({data}: HeaderProps) => {

  const [drop , setDrop] = useState(false);
  const [drop1 , setDrop1] = useState(false);
  const { id } = usePageContext();

  return (
    <div className={`w-full flex justify-center items-center bg-[#1c1c1c] sticky top-0 z-10`}>
      <div className={`w-full flex m-5 justify-start items-center gap-5 text-white relative portrait:hidden`}>
        {data?.topics?.map((x , i) => {
           return <Link href={`${x?.slug}?id=${i}`} key={i} className={`hover:border-b-2 hover:border-white hover:transition-transform ease-in-out duration-75 ${i === Number(id) ? 'border-b-2 border-yellow-500' : ''}`} onMouseEnter={() => i === 0 ? setDrop(true) : setDrop(false)}>{x?.name}</Link>
        })}
        <DropDown data={['2022', '2021', '2019']} drop={drop} setDrop={setDrop}/>
      </div>
      <div className='w-full flex justify-start text-white portrait:flex landscape:hidden ml-5'>
        <CiMenuBurger color="white" size={30} className={'hover:animate-pulse cursor-pointer'} onClick={() => setDrop1((prev) => !prev)}/>
        <DropDown data={['About Me' ,'Tech', 'Projects', '2022', '2021', '2019']} drop={drop1} setDrop={setDrop1}/>
      </div>
      <div className='w-full flex justify-center items-center text-white portrait:flex landscape:flex portrait:w-[35px] portrait:h-[35px]'>
        <SiHackaday color="white" size={45} className={'hover:animate-pulse cursor-pointer'}/>
      </div>
      <div className="w-full flex justify-end gap-5 m-5">
        <a className={`bg-black rounded-full hover:animate-pulse`} href={data?.fb?.url} target='_blank'><FaFacebook color="white" size={26}/></a>
        <a className='bg-black rounded-full hover:animate-pulse' href={data?.instag?.url} target='_blank'><FaInstagram color="white" size={26}/></a>
        <Link className='rounded-full hover:animate-pulse' href={data?.wechat?.slug}><AiFillWechat color="white" size={26}/></Link>
      </div>
    </div>
  );
};

export default Header;
