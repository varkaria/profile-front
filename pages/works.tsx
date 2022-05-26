import type { NextPage } from "next";
import { useEffect } from "react";
import anime from "animejs";
import Head from "next/head";
import Image from "next/image";

type Work = {
  title: string;
  position: string;
  href: string;
  image: string;
};

const Works: NextPage = () => {
  useEffect(() => {
    anime({
      targets: ".box",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el: any, i: number) => 100 * i,
    });
  }, []);

  const works: Work[] = [
    {
      title: "osu!thailand Pro League 2020",
      position: "Co-Host, Fullstack Developer",
      href: "https://osu.ppy.sh/community/forums/topics/1047402?n=1",
      image: "/projects/omthpl2020.jpg",
    },
    {
      title: "osu!thailand Pro League 2021",
      position: "Co-Host, Fullstack Developer",
      href: "https://osu.ppy.sh/community/forums/topics/1293390?n=1",
      image: "/projects/omthpl2021.jpg",
    },
    {
      title: "osu!thailand Pro League 2022",
      position: "Co-Host, Fullstack Developer",
      href: "https://osu.ppy.sh/community/forums/topics/883339?n=1",
      image: "/projects/omthpl2022.jpg",
    },
    {
      title: "osu!akatsuki",
      position: "Frontend Developer",
      href: "https://akatsuki.pw/",
      image: "/projects/akatsuki.jpg",
    },
    {
      title: "Caffeine Rush Thailand Tournament ",
      position: "Designer",
      href: "https://www.twitch.tv/crttosu",
      image: "/projects/crtt.jpg",
    },
    {
      title: "ChocoCopper",
      position: "(osu!skin) Designer",
      href: "",
      image: "/projects/chococopper.jpg",
    },
    {
      title: "Syphette",
      position: "(osu!skin) Designer",
      href: "",
      image: "/projects/sylphiette.jpg",
    },
    {
      title: "Syphette Next",
      position: "(osu!skin) Designer",
      href: "",
      image: "/projects/sylphiettenext.jpg",
    },
  ];

  return (
    <div className="px-4 space-y-12 text-white lg:px-12 py-36">
      <Head>
        <title>Works - Varkaria</title>
        <meta property="og:title" content="Works - Varkaria" key="ogtitle" />
      </Head>

      <div className="mx-auto box max-w-[2000px]">
        <h1 className="text-xl font-light opacity-90">Works</h1>
        <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <a key={i} className="space-y-2 box hover:text-gray-200" href={work.href}>
              <Image
                src={work.image}
                width={610}
                height={338}
                alt={work.title}
                className="rounded-lg"
              ></Image>
              <div>
                <h1 className="text-xl">{work.title}</h1>
                <p className="text-sm font-light opacity-50">{work.position}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
