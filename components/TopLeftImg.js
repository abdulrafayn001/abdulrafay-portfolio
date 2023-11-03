import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge hidden xl:block xl:w-[200px]">
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt=""
        loading="eager"
      />
    </div>
  );
};

export default TopLeftImg;
