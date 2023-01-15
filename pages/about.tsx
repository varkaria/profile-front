import type { NextPage } from "next";
import { useEffect } from "react";
import { toLetter } from "../globals";
import anime from "animejs";
import Head from "next/head";

const About: NextPage = () => {
  useEffect(() => {
    anime({
      targets: ".letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el: any, i: number) => 1 * i,
    });
    anime({
      targets: ".box",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el: any, i: number) => 100 * i,
    });
  }, []);

  return (
    <div className="px-4 py-32 space-y-12 text-white lg:px-12 lg:py-36">
      <Head>
        <title>About me - Varkaria</title>
        <meta property="og:title" content="About me - Varkaria" key="ogtitle" />
      </Head>

      <div className="box">
        <h1 className="text-xl font-light opacity-90">About me</h1>
        <p className="text-4xl sm:text-5xl lg:text-[5rem] leading-tight text-wrapper font-light mt-4">
          {toLetter(
            "I love to code, design, playing games such as VRchat, Quaver and osu!. I'm also Interested in Programing, Designing, Motion Graphic and anything I want to do"
          )}
        </p>
      </div>
      <div className="box">
        <h1 className="text-xl font-light opacity-90">History</h1>
        <div className="grid gap-6 mt-4 lg:gap-12 lg:flex">
          <div className="flex gap-3">
            <svg width="2rem" height="2rem" viewBox="0 0 512 512">
              <circle cx="184" cy="232" r="24" fill="currentColor"></circle>
              <path
                fill="currentColor"
                d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 0 1 7.82-10.17h175.69a8 8 0 0 1 7.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83Z"
              ></path>
              <circle cx="328" cy="232" r="24" fill="currentColor"></circle>
              <circle
                cx="256"
                cy="256"
                r="208"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              ></circle>
            </svg>
            <div>
              <h1 className="text-lg font-bold">2005</h1>
              <p className="max-w-[16rem] text-xl font-light">
                Born in Phanonsarakham, Thailand
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <svg width="2rem" height="2rem" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778v66.562z"
              ></path>
              <path
                fill="currentColor"
                d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
              ></path>
            </svg>
            <div>
              <h1 className="text-lg font-bold">2009 - 2018</h1>
              <p className="max-w-[16rem] text-xl font-light">
                Studied at Banthapho School
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <svg width="2rem" height="2rem" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778v66.562z"
              ></path>
              <path
                fill="currentColor"
                d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
              ></path>
            </svg>
            <div>
              <h1 className="text-lg font-bold">2018 - Now</h1>
              <p className="max-w-[16rem] text-xl font-light">
                Studying at Phanom Adun Witthaya School
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <h1 className="text-xl font-light opacity-90">Capabilities</h1>
        <div className="text-3xl lg:text-[3rem] leading-tight text-wrapper font-light mt-4">
          <p>Website Designer</p>
          <p>User Interface Designer</p>
          <p>Web Frontend Developer</p>
          <p>Web Backend Developer</p>
          <p>Fullstack Developer</p>
        </div>
      </div>
      <div className="box">
        <h1 className="text-xl font-light opacity-90">Socials</h1>
        <div className="text-3xl lg:text-[3rem] leading-tight text-wrapper font-light mt-4 grid">
          <a
            className="transition-all hover:opacity-50"
            href="https://facebook.com/varkaria"
          >
            Facebook
          </a>
          <a
            className="transition-all hover:opacity-50"
            href="https://github.com/varkaria"
          >
            Github
          </a>
          <a
            className="transition-all hover:opacity-50"
            href="https://www.linkedin.com/in/pavaresorn-malai"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
