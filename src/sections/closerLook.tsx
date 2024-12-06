import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Iphone15Pro from "../components/iphone15Pro";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const CloserLook = () => {
  const [colorClickedIndex, setColorClickedIndex] = useState(0);
  const [sizeClickedIndex, setsizeClickedIndex] = useState(0);
  const [sizeValue, setSizeValue] = useState("small");

  useGSAP(() => {
    const onEnter = () => {
      gsap.fromTo(
        "#headText2",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, ease: "power1.in", duration: 0.5 }
      );
    };

    const onLeave = () => {
      gsap.fromTo(
        "#headText2",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 20, ease: "power1.in", duration: 0.7 }
      );
    };

    ScrollTrigger.create({
      trigger: "#headText2",
      start: "top 80%",
      end: "top -150%",
      onEnter,
      onLeave,
      onEnterBack: onEnter,
      onLeaveBack: onLeave,
    });
  });

  useGSAP(() => {
    gsap.fromTo(
      "#iphone",
      { x: window.innerWidth },
      {
        x: 0,
        ease: "power1.inOut",
        duration: 1,
      }
    );
  }, [sizeValue]);

  return (
    <section className="h-full w-full">
      <div className="h-full w-full sm:pt-52 py-32 lg:px-16">
        <h1
          className="text-gray-100 text-center lg:text-start md:text-6xl text-4xl font-roboto font-semibold opacity-0 -mb-5"
          id="headText2"
        >
          Take a closer look.
        </h1>
        <div className="flex h-screen flex-center justify-center">
          <Canvas shadows id="iphone">
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
            <Iphone15Pro
              screenTexture={models[colorClickedIndex].img}
              backColor={models[colorClickedIndex].color[2]}
              cameraBackColor={models[colorClickedIndex].color[1]}
              scale={sizeValue === "small" ? 80 : 90}
              rotation={[0, -3.12, 0]}
            />
            <ambientLight intensity={4} />
            <directionalLight position={[0, 0, 1]} />
            <pointLight position={[5, 5, 4]} intensity={1} />
            <OrbitControls
              autoRotate
              rotateSpeed={0.6}
              autoRotateSpeed={2}
              enableZoom={false}
            />
            <View.Port />
          </Canvas>
        </div>
        <div className="flex flex-col items-center gap-3 -mt-5 mb-20">
          <p className="font-roboto text-xl">
            {models[colorClickedIndex].title}
          </p>
          <div className="flex gap-3">
            <ul className="bg-gray-300 px-3 py-3 w-48 rounded-full flex items-center justify-between">
              {models.map((model, i) => (
                <li
                  key={i}
                  style={{ backgroundColor: `${model.color[0]}` }}
                  className={`w-9 h-9 rounded-full cursor-pointer ${
                    colorClickedIndex === i
                      ? "border-[3px] border-sky-500"
                      : "border-none"
                  }`}
                  onClick={() => setColorClickedIndex(i)}
                ></li>
              ))}
            </ul>
            <ul className="bg-gray-300 w-24 rounded-full flex items-center justify-between">
              {sizes.map((size, i) => (
                <li
                  key={i}
                  className={`rounded-full ${
                    sizeClickedIndex === i
                      ? "bg-white text-black"
                      : "bg-none text-white"
                  }`}
                  onClick={() => {
                    setSizeValue(size.value);
                    setsizeClickedIndex(i);
                  }}
                >
                  <p className="py-4 px-3">{size.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloserLook;
