import NextImage from "@/lib/NextImage";
import Portfolio from "@/types/cards/PortfolioCardProps";
import { useState } from "react";
import { PortfolioModal } from "../modal/PortfolioModal";

export const PortfolioCard: React.FC<Portfolio> = ({
  type,
  title,
  description,
  skills,
  images,
  thumbnail,
}) => {
  const [open, setOpen] = useState<string>("");
  return (
    <>
      <div
        className="bg-transparent  z-50 duration-300 ease-in rounded-md  aspect-square relative group overflow-hidden cursor-pointer shadow-lg"
        onClick={() => setOpen(title)}
      >
        <NextImage
          src={thumbnail}
          alt="immage"
          height={500}
          width={500}
          claz="w-full aspect-auto"
        />
        <div className="absolute top-full left-0 w-full h-full group-hover:top-0 group-hover:bg-primary-foreground ease-in-out duration-300">
          <div className="flex items-center justify-end flex-col h-full px-5 py-10">
            <h2 className="font-bold text-white text-2xl ">{title}</h2>
            <p className="font-bold text-white text-lg capitalize">{type}</p>
          </div>
        </div>
      </div>
      <PortfolioModal
        open={open == title}
        setOpen={() => setOpen("")}
        title={title}
        description={description}
        skills={skills}
        images={images}
      />
    </>
  );
};
