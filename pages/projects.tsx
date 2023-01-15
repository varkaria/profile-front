import type { NextPage } from "next";
import { useEffect } from "react";
import anime from "animejs";
import Head from "next/head";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  href: string;
};

const Projects: NextPage = () => {
  useEffect(() => {
    anime({
      targets: ".box",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el: any, i: number) => 50 * i,
    });

    anime({
      targets: ".showme",
      opacity: [0, 0.1],
      scale: [0.95, 1],
      easing: "easeOutExpo",
    });
  }, []);

  const projects: Project[] = [
    {
      title: "svg-path-color-changer",
      description: "a simple website for changing path color from my logo 👾",
      href: "https://github.com/Varkaria/svg-path-color-changer",
    },
    {
      title: "color-swatches-generator ",
      description: "a little website for generate color swatches ✒️",
      href: "https://github.com/Varkaria/color-swatches-generator",
    },
    {
      title: "oturne",
      description:
        "A next generation of oturna written with Nuxt 3, Typescript, Express, TailwindCSS",
      href: "https://github.com/gusb3ll/oturne",
    },
    {
      title: "oturna",
      description:
        "A little tournament frontend, management for click the circles tournament. osu!",
      href: "https://github.com/varkaria/oturna",
    },
    {
      title: "vvrs-remas",
      description: "A booth items management from my friends",
      href: "https://github.com/Varkaria/vvrs-remas",
    },
    {
      title: "varkaria-next",
      description: "A personal profile written with Nuxt 2, TailwindCSS",
      href: "https://github.com/Varkaria/varkaria-next",
    },
    {
      title: "guweb",
      description:
        "The frontend appearance for the osu! server protocol, gulag!",
      href: "https://github.com/varkaria/guweb",
    },
    {
      title: "guweb-next",
      description: "A frontend from modern stack, gulag written with Nuxt",
      href: "https://github.com/varkaria/guweb-next",
    },
    {
      title: "kemona",
      description: "Just trying to make kemono website",
      href: "https://github.com/varkaria/kemona",
    },
    {
      title: "sayuka",
      description: "A thai doujin website made with Nuxt",
      href: "https://github.com/varkaria/sayuka",
    },
    {
      title: "kk-discord-rpc",
      description: "A little plugin discord rich presence for Koikatsu",
      href: "https://github.com/varkaria/kk-discord-rpc",
    },
    {
      title: "bulma-hsl",
      description: "A little framework for who want to customise color easier",
      href: "https://github.com/varkaria/bulma-hsl",
    },
  ];

  return (
    <div className="px-4 space-y-12 text-white lg:px-12 py-36">
      <Head>
        <title>Projects - Varkaria</title>
        <meta property="og:title" content="Projects - Varkaria" key="ogtitle" />
      </Head>

      <div className="box">
        <h1 className="text-xl font-light opacity-90">Projects</h1>
        <div className="text-[3rem] leading-tight text-wrapper font-light mt-4 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              className="leading-12 box hover:text-blue-200"
              key={index}
              href={project.href}
            >
              {project.title}
              <span className="block text-xl opacity-70">
                {project.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
