import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 767
      ? "/assets/videos/hero.mp4"
      : "/assets/videos/smallHero.mp4"
  );

  const handleVideoSrc = () => {
    const newSrc =
      window.innerWidth > 767
        ? "/assets/videos/hero.mp4"
        : "/assets/videos/smallHero.mp4";
    if (newSrc !== videoSrc) {
      setVideoSrc(newSrc);
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      handleVideoSrc();
    };

    window.addEventListener("resize", resizeListener);

    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [videoSrc]);

  useGSAP(() => {
    gsap.fromTo(
      "#headText",
      { opacity: 0, y: 1 },
      { y: 0, opacity: 1, delay: 1, ease: "power3.in" }
    );
    gsap.fromTo("#btn", { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 2 });

    const onEnter = () => {
      gsap.to("#nav", {
        top: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    };

    const onLeave = () => {
      gsap.to("#nav", {
        top: "-16%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    };

    ScrollTrigger.create({
      trigger: "#nav",
      start: "600%",
      end: "600%",
      onEnter,
      onEnterBack: onLeave,
    });
  });

  return (
    <section className="md:mt-14 mt-10 flex flex-col items-center">
      <nav
        id="nav"
        className="border-b-[1px] -ml-4 border-gray-100 z-50 fixed backdrop-blur-2xl bg-gray-300 w-full md:-top-16 -top-20 md:px-28 lg:px-44 px-5 md:py-2 py-2 flex items-center justify-between"
      >
        <div>
          <h1 className="font-semibold text-xl">iPhone 15 Pro</h1>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-gray-100 hover:text-gray-50 text-base">
            Overview
          </button>
          <button className="text-gray-100 hover:text-gray-50 text-base">
            Tech Specs
          </button>
          <button className="bg-sky-600 hover:bg-sky-500 text-sm text-white py-2 px-4 rounded-3xl">
            Buy
          </button>
        </div>
      </nav>
      <div className="md:py-12 flex flex-col items-center max-w-6xl h-full">
        <h1
          className="text-3xl mb-8 md:m-0 font-medium text-gray-200 xl:absolute font-roboto"
          id="headText"
        >
          iPhone 15 Pro
        </h1>

        <video
          width="100%"
          height="auto"
          ref={videoRef}
          autoPlay
          muted
          className="w-full"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <button
          className="bg-sky-600 py-3 px-5 rounded-3xl hover:bg-transparent hover:border-white border-[0.5px] transition-all xl:absolute xl:bottom-20"
          id="btn"
        >
          Buy
        </button>
      </div>
    </section>
  );
};

export default Hero;
