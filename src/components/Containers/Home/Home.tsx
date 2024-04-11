'use client';
import { FC, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { RiTwitterXFill } from 'react-icons/ri';

import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import Image from 'next/image';
import 'swiper/css';

import StackedCarousel from './components/StackedCarousel';

import Form from './components/Form';

const slideData1 = [
  '/images/0.png',
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
  '/images/7.png',
  '/images/8.png',
  '/images/9.png',
];

const slideData2 = [
  '/images/10.png',
  '/images/11.png',
  '/images/12.png',
  '/images/13.png',
  '/images/14.png',
  '/images/15.png',
  '/images/16.png',
  '/images/17.png',
  '/images/18.png',
  '/images/19.png',
];

const ContainerHome: FC = () => {
  const [scale, setScale] = useState<number>(1);
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.001;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative overflow-x-hidden">
        <div
          className="h-[1080px] w-screen fixed -z-50"
          style={{
            backgroundImage: `url('/images/blue.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <section className="w-full h-screen">
          <div className="relative w-screen h-screen overflow-hidden max-w-screen">
            <Image
              src="/images/meow.jpeg"
              alt="Picture of the author"
              width={10000}
              height={0}
              className="transform transition duration-500 object-cover w-full h-full"
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.15s ease-in-out',
              }}
              loading="lazy"
            />
            
            <div className="absolute top-0 w-[100%] h-[100%] flex flex-col justify-between  ">
              <div className=" flex justify-between items-center w-full  ">
                <div className="flex-1 flex items-center justify-center"></div>
                <div className="flex-1 flex items-center justify-center">
                  
                </div>
                
              </div>
              <div className="">
                <div className="flex flex-col items-center justify-center animate-opacity">
                  <h1 className="text-white text-[96px] font-bold">baseMeow</h1>
                  <MdKeyboardDoubleArrowDown className="text-9xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 mt-4 max-w-screen">
          <div className="w-full">
            <Swiper
              breakpoints={{
                375: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 8 },
              }}
              spaceBetween={30}
              autoplay={{ delay: 0 }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {slideData1.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`w-[200px] rounded-xl transition-transform duration-300 ${
                      (hoveredIndex !== null && hoveredIndex !== index) ||
                      hoveredIndex2 !== null
                        ? 'grayscale'
                        : 'grayscale-0'
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      src={src}
                      width={200}
                      height={200}
                      alt="hero"
                      className="object-cover rounded-xl grayscale-100 hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Second row with reversed direction */}
          <div className="w-full">
            <Swiper
              breakpoints={{
                375: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 8 },
              }}
              spaceBetween={30}
              autoplay={{ delay: 0 }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
              style={{ direction: 'rtl' }}
            >
              {slideData2.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`w-[200px] rounded-xl transition-transform duration-300 ${
                      (hoveredIndex2 !== null && hoveredIndex2 !== index) ||
                      hoveredIndex !== null
                        ? 'grayscale'
                        : 'grayscale-0'
                    }`}
                    onMouseEnter={() => setHoveredIndex2(index)}
                    onMouseLeave={() => setHoveredIndex2(null)}
                  >
                    <Image
                      src={src}
                      width={200}
                      height={200}
                      alt="hero"
                      className="object-cover rounded-xl grayscale-100 hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="mt-24">
          <Form />
        </section>

        <section className="mt-24 w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-16 text-3xl text-white text-center font-extrabold ">
            <div className="text-center">
              
              <h1 className="text-2xl md:text-5xl text-white text-center font-extrabold inline-block">
                WELCOME TO
                <br />
                <span className="text-5xl md:text-9xl">baseMeow</span>
              </h1>
              
            </div>
            <div className="flex flex-col items-center justify-center gap-16 text-lg md:text-3xl text-white text-center font-extrabold ">
              <h1 className="w-2/3 text-white text-center font-extrabold ">
              just a little $meow
              </h1>
              <p></p>
              <div className="flex gap-10">
                <a
                  href="https://twitter.com/baseMeow"
                  target="blank"
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                  className="flex items-center gap-4 text-white font-extrabold text-4xl hover:opacity-70"
                >
                  <RiTwitterXFill
                    className="text-4xl mx-auto hover:opacity-50 "
                    style={{ cursor: 'url(/images/cursor.png), auto' }}
                  />
                  <h1>@baseMeow</h1>
                </a>

                <a
                  href="https://t.me/BasedMeow"
                  target="blank"
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                  className="flex items-center gap-4 text-white font-extrabold text-4xl hover:opacity-70"
                >
                  
                  <h1>Telegram</h1>
                </a>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="mt-44 max-w-7xl mx-auto ">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-2/3 h-[1000px] rounded-xl">
              <Image
                src={`/images/meow.jpeg`}
                alt={`Image `}
                width={800}
                height={0}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="flex flex-col text-center gap-5">
              <h1 className="text-6xl font-bold text-white">
                How to get $meow Airdrop?
              </h1>
              <p className="text-xl text-white">
                Mint and Hold 2 baseMeow NFTs
              </p>
              <a
                className="w-full bg-pink-600 text-white font-medium text-2xl py-3 rounded-lg"
                href="https://zora.co/collect/base:0xa27d6b1e80441d90d426b37f3c36c891853ddc79"
                data-size="large"
                target="blank"
              >
                MINT NOW
              </a>
            </div>
          </div>
        </section>

        <section className="mt-44 max-w-7xl mx-auto">
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="box p-4 flex justify-start items-center mb-4 md:mb-0">
              
            </div>
            <div className="box p-4 text-center">
              <p className="text-white text-2xl md:text-5xl font-extrabold mb-2">
                baseMeow
              </p>
              <p className="text-white text-4xl md:text-8xl font-extrabold">
                
              </p>
            </div>
            <div className="box p-4 flex justify-center items-center mt-4 md:mt-0">
              
            </div>
          </div>

          <StackedCarousel />
        </section>

       
        

        
      </div>
    </>
  );
};

export default ContainerHome;
