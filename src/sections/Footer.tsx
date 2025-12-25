import logo from "@/assets/Lenient_Tree_Red.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center font-oswald">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-gradient-to-r before:from-primary before:to-secondary before:absolute">
          <Image src={logo} alt="Lenient Tree Logo" height={40} className="relative h-12 w-auto" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#panel" className="hover:text-white transition-colors">Panel</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#venue" className="hover:text-white transition-colors">Venue</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-white transition-colors"><SocialX /></a>
          <a href="#" className="hover:text-white transition-colors"><SocialInsta /></a>
          <a href="#" className="hover:text-white transition-colors"><SocialLinkedin /></a>
          <a href="#" className="hover:text-white transition-colors"><SocialPin /></a>
          <a href="#" className="hover:text-white transition-colors"><SocialYoutube /></a>
        </div>
        <p className="mt-6">&copy; 2025 ThinkerRoot. All rights reserved.</p>
      </div>
    </footer>
  );
};
