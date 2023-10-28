import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/abdulrafayn001"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/abdulrafayn001/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://twitter.com/abdulrafayn001"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>
      <Link
        href={"https://www.instagram.com/im_abdulrafay"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.youtube.com/channel/UCl9zBPMQ1X4KeecQlf-0omA"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
