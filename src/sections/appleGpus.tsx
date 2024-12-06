import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AppleGpus = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#chip",
      {
        scale: 1.5,
      },
      {
        scale: 1,
        duration: 0.8,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: "#chip",
          start: "top 80%",
        },
      }
    );

    const onEnter = (element: string) => {
      gsap.fromTo(
        element,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "sine.inOut",
          duration: 0.6,
        }
      );
    };
    const onLeave = (element: string) => {
      gsap.fromTo(
        element,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 20,
          opacity: 0,
          ease: "sine.inOut",
          duration: 0.6,
        }
      );
    };

    ScrollTrigger.create({
      trigger: "#text-1",
      start: "top 80%",
      end: "top -150%",
      onEnter: () => onEnter("#text-1"),
      onEnterBack: () => onEnter("#text-1"),
      onLeave: () => onLeave("#text-1"),
      onLeaveBack: () => onLeave("#text-1"),
    });
    ScrollTrigger.create({
      trigger: "#text-2",
      start: "top 80%",
      end: "top -150%",
      onEnter: () => onEnter("#text-2"),
      onEnterBack: () => onEnter("#text-2"),
      onLeave: () => onLeave("#text-2"),
      onLeaveBack: () => onLeave("#text-2"),
    });
    ScrollTrigger.create({
      trigger: "#text-3",
      start: "top 80%",
      end: "top -150%",
      onEnter: () => onEnter("#text-3"),
      onEnterBack: () => onEnter("#text-3"),
      onLeave: () => onLeave("#text-3"),
      onLeaveBack: () => onLeave("#text-3"),
    });
  });
  return (
    <section className="h-full w-full sm:pt-52 py-32 lg:px-16">
      <div>
        <div className="flex items-center justify-center flex-col">
          <img
            src="/assets/images/chip.jpeg"
            alt="chip"
            className="w-52 mb-20"
            id="chip"
          />
          <h1 className="lg:text-7xl  md:text-4xl  text-3xl font-semibold font-sans ">
            A17 Pro chip.
          </h1>
          <h1 className="lg:text-7xl  md:text-4xl text-3xl font-semibold my-5 font-sans">
            A monster win for gaming.
          </h1>
          <h1 className="text-gray-100 xl:text-4xl lg:text-3xl md:text-2xl  text-xl lg:px-0 px-10 font-semibold mb-20 mt-5">
            It’s here. The biggest redesign in the history of Apple GPUs.
          </h1>
        </div>
        <div className="px-20 w-full relative">
          <div className="w-full h-full">
            <video
              className="md:rounded-[50px] sm:rounded-[45px] rounded-[30px] w-full"
              muted
              autoPlay
            >
              <source src="/assets/videos/frame.mp4" />
            </video>
          </div>
          <img
            src="/assets/images/frame.png"
            alt="frame"
            className="z-10 -top-10 left-0 md:px-16 sm:px-[68px] px-[74px] py-8 sm:py-7 md:py-6 absolute object-cover"
          />
          <h3 className="text-gray-100 text-center font-medium text-xl mt-16">
            Honkai: Star Rail
          </h3>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5 lg:px-32 px-44 py-20 text-gray-100 text-xl xl:text-2xl font-medium">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 items-center w-full justify-between">
            <p className="w-96" id="text-1">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphics performance by far
              </span>{" "}
              .
            </p>
            <p className="w-96 lg:py-0 py-10" id="text-2">
              New
              <span className="block text-white text-5xl">Pro-class GPU</span>
              with 6 cores
            </p>
          </div>
          <div>
            <p className="w-96" id="text-3">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>{" "}
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleGpus;
