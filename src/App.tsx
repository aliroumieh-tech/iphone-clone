import "./App.css";
import AppleGpus from "./sections/appleGpus";
import CloserLook from "./sections/closerLook";
import Explore from "./sections/explore";
import Hero from "./sections/hero";
import Highlights from "./sections/highlights";
import Navbar from "./sections/navbar";
// import useSearchStore from "./store/searchStore";
import * as Sentry from "@sentry/react";

const App = () => {
  // const { isSearchOpen } = useSearchStore();
  return (
    <div>
      <Navbar />
      <Hero />
      <Highlights />
      <CloserLook />
      <Explore />
      <AppleGpus />
    </div>
  );
};

export default Sentry.withProfiler(App);
