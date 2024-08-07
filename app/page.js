import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import backgroundVideo from "../public/videos/background-video.mp4"; // Import the video
import AboutSection from "./components/AboutSection";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] bg-opacity-60">
      <video
        src={backgroundVideo}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="relative z-10">
        <Navbar />
        <div className="container relative mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
        </div>
      </div>
    </main>
  );
}
