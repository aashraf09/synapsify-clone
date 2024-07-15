import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import nvidiaCard from './assets/nvidia-card.webp'
import Navbar from './components/Navbar'
import NotificationBar from './components/NotificationBar'
import Card from './components/Card'
import cardsData from './data/cardsData'
import h100Clusters from './assets/h100-clusters.webp'
import Footer from './components/Footer'
import Features from './data/Features'
import Partners from './components/Partners'
import PriceCalculator from './components/PriceCalculator'


const App = () => {
  return (
    <>
      <NotificationBar />
      <Navbar />
      <main className='w-[90%] m-auto flex flex-col items-center text-center md:items-center justify-between gap-10 py-10'>
        <section className="flex flex-row items-center justify-between gap-5 w-full">
          <div className='flex flex-col text-center md:text-left lg:basis-1/2 items-center md:items-start justify-between gap-6'>
            <div className="hidden md:flex flex-row items-center justify-between gap-4 border px-5 py-1 rounded-lg">
              <svg width="24px" height="24px" viewBox="0 0 24 24" className="gfxUHP gfxUHo" data-icon="green">
                <mask id="mask0_1121_278" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                  <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
                </mask>
                <g fill="none" mask="url(#mask0_1121_278)">
                  <path fill="#006C85" d="M11 21v-7.975a7.942 7.942 0 0 1-3.075-.613A7.956 7.956 0 0 1 3.6 8.075C3.2 7.092 3 6.067 3 5V3h2a7.88 7.88 0 0 1 3.05.612c.983.409 1.85.988 2.6 1.738a7.62 7.62 0 0 1 1.287 1.7 8.48 8.48 0 0 1 .788 1.975c.083-.117.175-.23.275-.338.1-.108.208-.22.325-.337a7.957 7.957 0 0 1 2.6-1.737A7.941 7.941 0 0 1 19 6h2v2a7.942 7.942 0 0 1-.613 3.075 7.956 7.956 0 0 1-1.737 2.6 7.827 7.827 0 0 1-2.587 1.725c-.975.4-1.996.6-3.063.6v5h-2Zm0-10c0-.8-.154-1.563-.463-2.287a6.087 6.087 0 0 0-1.312-1.938 6.088 6.088 0 0 0-1.938-1.313A5.785 5.785 0 0 0 5 5c0 .8.15 1.567.45 2.3.3.733.733 1.383 1.3 1.95.567.567 1.217 1 1.95 1.3.733.3 1.5.45 2.3.45Zm2 3a5.924 5.924 0 0 0 4.225-1.75 6.05 6.05 0 0 0 1.313-1.95A5.88 5.88 0 0 0 19 8c-.8 0-1.567.154-2.3.463a6.05 6.05 0 0 0-1.95 1.312A5.918 5.918 0 0 0 13 14Z"></path>
                </g>
              </svg>
              <p className="n1-note flex flex-row items-center justify-between gap-3">
                <span>
                  Utilizing 100% renewable energy
                </span>
                <a href="/" className='n1-note underline underline-offset-2 secondary-text'>View more</a>
              </p>
            </div>
            <h1 className=''>THE ML CLOUD</h1>
            <p className='p1-paragraph secondary-text'>
              Premium dedicated GPU servers and clusters
              <br />
              Model inference services
            </p>
            <button className='btn text-white px-5 py-2 outline-none flex flex-row items-center justify-between gap-5' style={{ backgroundColor: 'var(--primary-btn-bg-color)' }}>
              <p className="p1-paragraph font-extrabold">
                Get Started
              </p>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
            <p className="p2-paragraph secondary-text">Easy sign up · Pay as you go</p>
          </div>
          <div className="hidden lg:block lg:basis-1/2">
            <img src={nvidiaCard} alt="" />
          </div>
        </section>

        {/* 
            This component shows the list of images of the key partners. It is flexed row in the laptop view, works like a reel in the tablet view and it is hidden in the mobile view       
        */}
        <Partners />

        {/*
            Section for showing the 3 cards.
        */}
        <section className='flex flex-col w-full lg:flex-row items-center justify-between gap-5'>
          {
            cardsData.map((data, index) => {
              return (
                <Card key={index} image={data.image} heading={data.heading} description={data.description} buttonText={data.buttonText} buttonHref={data.buttonHref} />
              )
            })
          }
        </section>

        {/* 
            This section is a full width card, showing the H100 Clusters specifications.
        */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full rounded-lg dark-gradient px-5 py-10 md:p-10">
          <div className='basis-1/2 px-5' >
            <img src={h100Clusters} alt="" />
          </div>
          <div className=" basis-1/2 px-6 flex flex-col items-center lg:items-start justify-between gap-6 text-white text-center lg:text-left">
            <h4>
              H100 clusters
              <br />
              At the forefront of digital intelligence
            </h4>
            <div className="flex flex-col items-center lg:items-start justify-between gap-2">
              <p className='p2-paragraph text-[#c6ced0]'>
                Our clusters exclusively use the NVIDIA H100 SXM5 80GB NVLINK modules.
              </p>
              <p className='p2-paragraph text-[#c6ced0]'>
                Via NVLINK, the H100 achieves a chip-to-chip interconnect bandwidth of 900GB/s and leverages a 3200gbit/s InfiniBand™ interconnect.
              </p>
              <p className='p2-paragraph text-[#c6ced0]'>
                Contact us for more information.
              </p>
            </div>
            <a href='/' className='btn text-white bg-[#4a5557]'>Order Now</a>
          </div>
        </section>

        {/* 
            This section shows the features of the products. 
            It takes only 1 row and 4 columns in the laptop view.
            It takes 2 columns and 2 rows in the tablet view
            It takes 1 column and 4 rows in the mobile view
            The borders between the Feature Cards are being applied according to the index of the card and length of the array.
        */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5 lg:gap-0 p-5 lg:p-10 lg:py-10">
          {Features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between gap-2 px-5 lg:px-8 md:border-r md:border-r-slate-300 lg:border-r-1 ${(index + 1) % 2 === 0 && 'md:border-r-0'
                } ${index !== Features.length - 1 && 'lg:border-r'
                }`}
            >
              {feature.icon}
              <p className="p1-paragraph font-bold">{feature.heading}</p>
              <p className="p2-paragraph secondary-text">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* 
            This section is the price calculator section. It is a flex-row display, showing the specification and the prices component alongside. It is flexed column in the mobile view! 
        */}
        <section className="mb-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-10 w-full">
          <div className='basis-1/2 w-full'>
            <PriceCalculator />
          </div>
          <div className="basis-1/2 w-full flex flex-col items-start justify-between gap-3 md:gap-5 text-start">
            <h4 className=" text-[#245866]">
              All infrastructure powered by renewable energy
            </h4>
            <h2>
              High-end GPU instances
            </h2>
            <div className="flex flex-col items-start justify-between gap-2 secondary-text">
              <p className="p2-paragraph">Order and access your GPU in just minutes via our intuitive dashboard or API.
              </p>
              <p className="p2-paragraph">
                Your machine is automatically setup according to your preferences and you receive access in a few minutes.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <a href={'/'} className='btn text-white px-5 py-2 outline-none' style={{ backgroundColor: 'var(--primary-btn-bg-color)' }}>
                Sign up
              </a>
              <a href={'/'} className='btn text-white px-5 py-2 outline-none border' style={{ color: 'var(--primary-btn-bg-color)', borderColor: 'var(--primary-btn-bg-color)' }}>
                View all products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App