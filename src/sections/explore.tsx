import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const onEnter = () => {
      gsap.fromTo(
        "#headText3",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, ease: "power1.in", duration: 0.5 }
      );
    };

    const onLeave = () => {
      gsap.fromTo(
        "#headText3",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 20, ease: "power1.in", duration: 0.7 }
      );
    };

    ScrollTrigger.create({
      trigger: "#headText3",
      start: "top 80%",
      end: "top -150%",
      onEnter,
      onLeave,
      onEnterBack: onEnter,
      onLeaveBack: onLeave,
    });

    const exploreOnEnter = (element: string) => {
      gsap.fromTo(
        element,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "sine.inOut" }
      );
    };
    const exploreOnLeave = (element: string) => {
      gsap.fromTo(
        element,
        { y: 0, opacity: 1 },
        { y: 30, opacity: 0, duration: 0.7, ease: "sine.inOut" }
      );
    };

    ScrollTrigger.create({
      trigger: "#exploreText1",
      start: "top 80%",
      end: "top -150%",
      onEnter: () => exploreOnEnter("#exploreText1"),
      onEnterBack: () => exploreOnEnter("#exploreText1"),
      onLeave: () => exploreOnLeave("#exploreText1"),
      onLeaveBack: () => exploreOnLeave("#exploreText1"),
    });
    ScrollTrigger.create({
      trigger: "#exploreText2",
      start: "top 80%",
      end: "top -150%",
      onEnter: () => exploreOnEnter("#exploreText2"),
      onEnterBack: () => exploreOnEnter("#exploreText2"),
      onLeave: () => exploreOnLeave("#exploreText2"),
      onLeaveBack: () => exploreOnLeave("#exploreText2"),
    });

    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "top bottom",
        end: "top -50%",
        onEnter: () => {
          videoRef.current?.play();
        },
      },
    });

    const exploreImgAnimaion = (element: string) => {
      gsap.fromTo(
        element,
        { scale: 1.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "top -40%",
            scrub: true,
          },
        }
      );
    };

    exploreImgAnimaion("#exploreImg1");
    exploreImgAnimaion("#exploreImg2");
  });

  return (
    <section className="bg-gray-300 h-full w-full">
      <div className="h-full w-full sm:pt-52 pt-32 lg:px-16">
        <h1
          className="text-gray-100 text-center lg:text-start md:text-6xl sm:text-5xl text-4xl font-roboto font-semibold opacity-0 -mb-5"
          id="headText3"
        >
          Explore the full story.
        </h1>
        <div className="xl:px-28 lg:px-20 px-10 lg:py-52 py-40 w-full h-full">
          <p className="flex flex-col lg:text-7xl md:text-6xl text-5xl font-roboto font-semibold mb-20">
            <span>iPhone.</span>
            <span>Forged in titanium.</span>
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="col-span-2 row-span-2">
              <video
                className="w-full md:block hidden"
                id="exploreVideo"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src="/assets/videos/explore.mp4" />
              </video>
              <img
                src="/assets/images/explore3.png"
                className="md:hidden block h-[500px] object-cover w-full"
              />
            </div>
            <div className="md:grid grid-cols-2 col-span-2 row-span-1 flex flex-col gap-5  h-full">
              <div className="col-span-1 w-full">
                <div className="bg-black overflow-hidden relative">
                  <img
                    src="/assets/images/explore1.jpg"
                    className="h-[500px] w-full object-cover"
                    alt="explore1"
                    id="exploreImg1"
                  />
                </div>
                <div className="md:px-20 md:block hidden">
                  <p
                    className="text-gray-100 text-xl font-semibold mt-20 opacity-0"
                    id="exploreText1"
                  >
                    iPhone 15 Pro is
                    <span className="text-white">
                      {" "}
                      the first iPhone to feature an aerospace‑grade titanium
                      design
                    </span>
                    , using the same alloy that spacecraft use for missions to
                    Mars.
                  </p>
                </div>
              </div>
              <div className="col-span-1 w-full">
                <div className="bg-black overflow-hidden relative">
                  <img
                    src="/assets/images/explore2.jpg"
                    className="h-[500px] object-cover"
                    alt="explore2"
                    id="exploreImg2"
                  />
                </div>
                <div className="md:px-20 md:block hidden">
                  <p
                    className="text-gray-100 text-xl font-semibold mt-20 opacity-0"
                    id="exploreText2"
                  >
                    Titanium has one of the best strength‑to‑weight ratios of
                    any metal, making these our
                    <span className="text-white">
                      {" "}
                      lightest Pro models ever
                    </span>
                    . You’ll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>

              <div className="w-96 m-auto md:hidden block">
                <p className="text-gray-100 text-xl font-semibold mt-20 opacity-1">
                  iPhone 15 Pro is
                  <span className="text-white">
                    {" "}
                    the first iPhone to feature an aerospace‑grade titanium
                    design
                  </span>
                  , using the same alloy that spacecraft use for missions to
                  Mars.
                </p>

                <p className="text-gray-100 text-xl font-semibold mt-20 opacity-1">
                  Titanium has one of the best strength‑to‑weight ratios of any
                  metal, making these our
                  <span className="text-white"> lightest Pro models ever</span>.
                  You’ll notice the difference the moment you pick one up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
