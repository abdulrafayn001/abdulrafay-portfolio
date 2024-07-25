import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/circles.avif"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="Modern design elements showcasing Abdul Rafay's design skills and creativity on his portfolio website."
        loading="eager"
      />
    </div>
  );
};

export default Circles;
