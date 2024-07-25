import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.avif"}
        width={737}
        height={678}
        alt="Abdul Rafay, a skilled full-stack software engineer specializing in JavaScript, TypeScript, React, Node.js, and cloud technologies, based in Pakistan."
        className="translate-z-0 w-full h-full"
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
