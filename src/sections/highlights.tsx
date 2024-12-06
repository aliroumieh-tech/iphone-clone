import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    const onEnter = () => {
      gsap.fromTo(
        "#headText1",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, ease: "power1.in", duration: 0.5 }
      );
    };

    const onLeave = () => {
      gsap.fromTo(
        "#headText1",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 20, ease: "power1.in", duration: 0.7 }
      );
    };

    ScrollTrigger.create({
      trigger: "#headText1",
      start: "top 80%",
      end: "top -150%",
      onEnter,
      onLeave,
      onEnterBack: onEnter,
      onLeaveBack: onLeave,
    });
  });

  return (
    <section className="md:mt-24 mt-10 h-full">
      <div className=" bg-gray-300 sm:py-52 py-32 lg:px-16 sm:pl-5 pl-2">
        <h1
          className="text-gray-100 text-center lg:text-start md:text-6xl text-4xl font-roboto font-semibold mb-10 opacity-0"
          id="headText1"
        >
          Get The Highlights.
        </h1>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
