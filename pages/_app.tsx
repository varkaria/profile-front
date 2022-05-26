import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";

const fadeBack = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.99,
    },
  },
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const [exitBefore, setExitBefore] = useState(false);
  const [isMobileOpen, setisMobileOpen] = useState(false);

  const handleMobileMenu = () => {
    setisMobileOpen(!isMobileOpen);
  };

  return (
    <div className="max-w-10xl">
      <Head>
        <meta
          name="description"
          content="I love to code, design, playing games such as VRchat, Quaver and osu!. I'm also Interested in Programing, Designing, Motion Graphic and anything I want to do"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta property="og:image" content="/ogimage.jpg" key="ogimage" />
        <meta
          property="og:description"
          content="I love to code, design, playing games such as VRchat, Quaver and osu!. I'm also Interested in Programing, Designing, Motion Graphic and anything I want to do"
          key="ogdesc"
        />
      </Head>

      <nav className="fixed w-full px-4 py-6 bg-[#202020] sm:bg-transparent text-white lg:py-10 lg:px-12 z-20">
        <div className="flex items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                className="transition-all transform cursor-pointer hover:scale-95"
                src="/logo.svg"
                alt="Varkaria"
                width={48}
                height={48}
              ></Image>
            </Link>
            <a
              href="https://webring.wonderful.software#varkaria.tech"
              title="วงแหวนเว็บ"
              className="block w-[32px] h-[32px]"
            >
              <Image
                src="https://webring.wonderful.software/webring.white.svg"
                alt="วงแหวนเว็บ"
                width={32}
                height={32}
              ></Image>
            </a>
          </div>

          <div className="hidden my-auto ml-auto space-x-8 font-light sm:block">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT ME</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/works">WORKS</Link>
          </div>

          <div
            className="ml-auto cursor-pointer sm:hidden"
            onClick={handleMobileMenu}
          >
            <svg width="2rem" height="2rem" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="sm:hidden">
          <div
            className="grid px-2 py-2 mt-4 space-y-1 text-base font-medium text-white rounded-md"
            style={{
              display: isMobileOpen ? "block" : "none",
            }}
          >
            <Link href="/">
              <p
                className="block py-2 cursor-pointer"
                onClick={handleMobileMenu}
              >
                Home
              </p>
            </Link>

            <Link href="/about">
              <p
                className="block py-2 cursor-pointer"
                onClick={handleMobileMenu}
              >
                About me
              </p>
            </Link>

            <Link href="/projects">
              <p
                className="block py-2 cursor-pointer"
                onClick={handleMobileMenu}
              >
                Projects
              </p>
            </Link>

            <Link href="/works">
              <p
                className="block py-2 cursor-pointer"
                onClick={handleMobileMenu}
              >
                Works
              </p>
            </Link>
          </div>
        </div>
      </nav>

      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={!exitBefore}>
          <m.div
            key={router.route.concat(fadeBack.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeBack.variants}
            transition={fadeBack.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}

export default MyApp;
