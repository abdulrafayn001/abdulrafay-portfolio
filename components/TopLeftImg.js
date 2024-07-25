import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge hidden xl:block xl:w-[200px]">
      <Image
        src="/top-left-img.avif"
        width={400}
        height={400}
        alt="Top corner design element showcasing Abdul Rafay's creativity and attention to detail on his portfolio website"
        loading="eager"
      />
    </div>
  );
};

export default TopLeftImg;
