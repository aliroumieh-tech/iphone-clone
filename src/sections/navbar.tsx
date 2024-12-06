import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./../App.css";
import useSearchStore from "../store/searchStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const navLinks = ["Store", "Mac", "iPhone", "Support"];

  const { isSearchOpen, setIsSearchOpen, setIsSearchOpenFalse } =
    useSearchStore();

  const menuRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        top: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        navLinksRef.current,
        { top: -100, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          stagger: 0.13,
        }
      );

      document.body.classList.add("no-scroll");
    } else {
      gsap.to(menuRef.current, {
        top: "-100vh",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useGSAP(() => {
    if (isSearchOpen) {
      gsap.to("#search", {
        top: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      document.body.classList.add("no-scroll");
    } else {
      gsap.to("#search", {
        top: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      document.body.classList.remove("no-scroll");
    }
  }, [isSearchOpen]);

  const handleMenu = () => {
    if (window.innerWidth > 767) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleMenu);
    return () => window.removeEventListener("resize", handleMenu);
  }, []);

  return (
    <>
      {!isMenuOpen && (
        <nav className="p-5 relative z-50 max-w-5xl m-auto md:pr-5 pr-8 flex items-center justify-between">
          <a href="#home">
            <img src="/public/assets/images/apple.svg" alt="apple logo" />
          </a>
          {!isMobile && (
            <div className="flex items-center justify-between w-full max-w-md ">
              {navLinks.map((link) => (
                <a className="text-gray-200 hover:text-white" href={`#${link}`}>
                  {link}
                </a>
              ))}
            </div>
          )}

          <div>
            <div className="flex items-center gap-8">
              <img
                src="/assets/images/search.svg"
                alt="search"
                width={16}
                height={16}
                className="cursor-pointer"
                onClick={setIsSearchOpen}
              />
              {isMobile && (
                <img
                  src="/assets/images/menu.png"
                  alt="menu"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(true)}
                />
              )}
            </div>
          </div>
        </nav>
      )}

      <div
        className="bg-gray-300 opacity-0 backdrop-blur-lg w-full h-screen z-50 top-[-100vh] fixed p-4"
        ref={menuRef}
      >
        <img
          src="/assets/images/exit.png"
          alt="exit"
          className="float-end w-5 h-5 cursor-pointer object-cover"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="mt-12 flex flex-col">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between cursor-pointer p-2 pl-5"
              onPointerEnter={() => setHoveredIndex(index)}
              onPointerLeave={() => setHoveredIndex(null)}
              ref={(el) => (navLinksRef.current[index] = el)}
            >
              <p
                className={`${
                  hoveredIndex === index
                    ? "text-neutral-50"
                    : "text-neutral-300"
                } font-semibold text-3xl`}
              >
                {link}
              </p>
              <img
                src="/assets/images/arrow.png"
                alt="arrow"
                className={`w-5 h-5 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                } `}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full md:z-0 z-50 h-screen md:h-[30%] md:py-20 py-16 md:absolute fixed backdrop-blur-lg opacity-10 top-[-100vh] bg-gray-300 md:px-0 px-10"
        id="search"
        onPointerLeave={setIsSearchOpenFalse}
      >
        <div className="flex items-center justify-between gap-5 md:max-w-5xl md:px-5 lg:px-7 px-0 lg:m-auto">
          <div className="flex items-center gap-5">
            <img
              src="/assets/images/search.svg"
              alt="search"
              width={18}
              height={18}
              className="cursor-pointer"
            />
            <input
              type="text"
              className="bg-transparent text-gray-100 placeholder:text-gray-100 text-2xl focus:outline-none"
              placeholder="Search"
            />
          </div>
          <img
            src="/assets/images/exit.png"
            alt="exit"
            className="w-5 md:hidden h-5 cursor-pointer object-cover"
            onClick={() => setIsSearchOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
