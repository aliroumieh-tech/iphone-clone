import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const coarsalDotsRef = useRef([]);
  const dotsDurationRef = useRef([]);

  const isTaplet = useMediaQuery({ query: "(min-width: 1024px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1280px)" });

  const [video, setVideo] = useState({
    videoId: 0,
    isPlaying: false,
    isLastVideo: false,
    startPlay: false,
    isEnd: false,
  });

  const { videoId, isPlaying, startPlay, isLastVideo, isEnd } = video;

  useGSAP(() => {
    if (isPlaying) {
      gsap.to("#slider", {
        transform: `translateX(-${
          isTaplet ? (isLaptop ? 100 * videoId : 75 * videoId) : 80 * videoId
        }vw)`,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }

    gsap.to(videoRef.current[videoId], {
      duration: 5,
      scrollTrigger: {
        trigger: videoRef.current[videoId],
        onEnter: () => {
          if (videoId === 0) {
            setVideo((prev) => ({ ...prev, isPlaying: true, startPlay: true }));
          }
        },
        once: true,
      },
    });
  }, [isEnd, videoId]);

  useGSAP(() => {
    let currentProgress = 0;

    if (isPlaying) {
      const anim = gsap.to(dotsDurationRef.current[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (currentProgress !== progress) {
            currentProgress = progress;

            gsap.to(coarsalDotsRef.current[videoId], {
              width:
                videoRef.current[videoId].currentTime === 0
                  ? "5px"
                  : `${isTaplet ? "4vw" : "8vw"}`,
            });

            gsap.to(dotsDurationRef.current[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
              opacity: videoRef.current[videoId].currentTime === 0 ? 0 : 1,
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(coarsalDotsRef.current[videoId], {
              width: "10px",
            });
            gsap.to(dotsDurationRef.current[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      const updateAnim = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(updateAnim);
      } else {
        gsap.ticker.remove(updateAnim);
      }
    }
  }, [isEnd, isPlaying, videoId]);

  useEffect(() => {
    if (isPlaying) {
      startPlay && videoRef.current[videoId].play();
    } else {
      videoRef.current[videoId].pause();
    }
  }, [isEnd, isPlaying, videoId]);

  const handleProcces = (type: string, index: number) => {
    switch (type) {
      case "play":
      case "pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !isPlaying,
          startPlay: !startPlay,
        }));
        break;
      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          videoId: 0,
          isPlaying: true,
          isLastVideo: false,
        }));
        break;
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: index + 1,
          isLastVideo: false,
        }));
        break;
      case "lastVideo":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: !isLastVideo,
          isPlaying: false,
        }));
        break;
      case "coarsalDot":
        videoRef.current.forEach((video, i) => {
          if (i !== index) {
            video.pause();
            video.currentTime = 0; // Reset previous video
          }
        });
        setVideo((prev) => ({
          ...prev,
          videoId: index,
          isPlaying: true,
          startPlay: true,
          isLastVideo: false,
        }));
        break;

      case "lastCoarsalDot":
        videoRef.current.forEach((video, i) => {
          if (i !== 3) {
            video.pause();
            video.currentTime = 0;
          }
        });
        setVideo((prev) => ({
          ...prev,
          videoId: 3,
          isLastVideo: true,
          isPlaying: true,
        }));
        break;

      default:
        return video;
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex sm:gap-28 gap-[52px]">
        {hightlightsSlides.map((slide, i) => (
          <div className="relative" key={i} id="slider">
            <div className="w-[72vw] lg:[85vw] xl:w-[92vw] sm:h-screen h-[80vh]">
              <video
                className="w-full h-full object-cover rounded-3xl"
                ref={(el) => (videoRef.current[i] = el)}
                onEnded={() =>
                  i !== 3
                    ? handleProcces("video-end", i)
                    : handleProcces("lastVideo", i)
                }
                onPlay={() => setVideo((pre) => ({ ...pre, isPlaying: true }))}
                muted
              >
                <source src={slide.video} />
              </video>
            </div>
            <div className="absolute md:top-10 top-3 left-[3%]">
              {slide.textLists.map((text, index) => (
                <p key={index} className="md:text-3xl text-xl">
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute mt-20 left-1/2 -translate-x-1/2 flex gap-5 items-center">
        <div className="bg-gray-300 lg:w-44 w-52 px-7 py-6 rounded-full text-center">
          <div className="flex items-center justify-between">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="w-[10px] h-[10px] rounded-full bg-gray-100 cursor-pointer relative"
                ref={(el) => (coarsalDotsRef.current[i] = el)}
                onClick={() =>
                  i !== 3
                    ? handleProcces("coarsalDot", i)
                    : handleProcces("lastCoarsalDot", i)
                }
              >
                <span
                  className="w-[10px] h-[10px] bg-gray-200 rounded-full absolute left-0"
                  ref={(el) => (dotsDurationRef.current[i] = el)}
                />
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gray-300 p-[18px] rounded-full cursor-pointer">
          <img
            src={
              isLastVideo && isEnd ? replayImg : !isPlaying ? playImg : pauseImg
            }
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcces("video-reset")
                : !isPlaying
                ? () => handleProcces("play")
                : () => handleProcces("pause")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
