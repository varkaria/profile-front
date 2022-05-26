import type { NextPage } from "next";
import Head from "next/head";
import anime from "animejs";
import { useEffect } from "react";
import Image from "next/image";

const Home: NextPage = () => {
  const xSlideStart: number = 3200;
  useEffect(() => {
    anime
      .timeline({
        duration: 2000,
      })
      .add({
        targets: "#slideOne",
        translateX: [xSlideStart, "-165px"],
        opacity: [0, 1],
        easing: "easeOutExpo",
      })
      .add(
        {
          targets: "#slideTwo",
          translateX: [`-${xSlideStart}px`, "-0px"],
          opacity: [0, 1],
          easing: "easeOutExpo",
        },
        "-=1900"
      )
      .add(
        {
          targets: "#slideThree",
          translateX: [xSlideStart, "265px"],
          opacity: [0, 1],
          easing: "easeOutExpo",
        },
        "-=1900"
      )
      .add(
        {
          targets: ".showme",
          opacity: [0, 0.1],
          scale: [0.95, 1],
          easing: "easeOutExpo",
        },
        "-=1000"
      );
  }, []);

  return (
    <div>
      <Head>
        <title>Home - Varkaria</title>
        <meta property="og:title" content="Home - Varkaria" key="ogtitle" />
      </Head>

      <div className="relative z-10 flex items-center h-screen text-white">
        <div className="space-y-12">
          <div className="justify-center hidden w-screen overflow-hidden lg:flex">
            <div className="space-y-4 font-semibold text-8xl">
              <h1 className="titleSlide" id="slideOne">
                <span className="unfocus">Presence Philosophy Piano</span>{" "}
                <span className="font-medium">Pavaresorn Malai</span>{" "}
                <span className="unfocus">Person Potato Problem</span>
              </h1>
              <h1 className="titleSlide" id="slideTwo">
                <span className="unfocus">Virus Video Volume Version</span>{" "}
                <span className="font-medium">Varkaria</span>{" "}
                <span className="unfocus">
                  Vehicle Village Variation Variety
                </span>
              </h1>
              <h1 className="titleSlide" id="slideThree">
                <span className="unfocus">Fortune Friendship Feedback</span>{" "}
                <span className="font-medium">Fullstack Developer</span>{" "}
                <span className="unfocus">
                  Farmer Food Freedom Flight Funeral
                </span>
              </h1>
            </div>
          </div>
          <div className="px-4 lg:hidden">
            <h1 className="text-5xl">
              PAVARESORN
              <br />
              MALAI
            </h1>
          </div>
          <div className="flex gap-4 px-4 lg:justify-center">
            <a href="https://github.com/varkaria">
              <svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
            </a>
            <a href="https://facebook.com/varkaria">
              <svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                ></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/pavaresorn-malai">
              <svg width="2.5rem" height="2.5rem" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Image
        src="/bg.jpg"
        layout="fill"
        objectFit="cover"
        className="opacity-0 pointer-events-none showme"
        alt="Varkaria"
      ></Image>
    </div>
  );
};

export default Home;
