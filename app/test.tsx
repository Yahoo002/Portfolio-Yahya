"use client";
import Image from 'next/image';
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';
import TypingComponent from './typewriter';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark": ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <div className='relative'>
          <div className='sticky top-0'>
            <section className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl font-inconsolata mr-5 dark:text-white">DevelopedBy<a className="underline text-teal-500 hover:text-teal-700" href="https://github.com/Yahoo002" target="_blank">Yahoo002</a></h1>
                <ul className="flex items-center dark:text-white">
                  <li><BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
                  <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8" href="#">Resume</a></li>
                </ul>
              </nav>
              <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Yahya Aseerullah</h2>
                <h3 className=" text-2xl py-10 md:text-3xl dark:text-white"> <TypingComponent/></h3>
                <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-white ">&& Insert 2 liner info about me Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nesciunt &&</p>
              </div>
              <div className="text-5xl flex justify-center gap-16 py-2 pb-10 text-gray-600">
                <AiFillLinkedin/>
                <AiFillGithub/>
                <AiFillMediumCircle/>
              </div>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
                <Image src={deved} layout="fill" objectFit="cover" alt='deved'/>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}