import NextImage from "@/lib/NextImage";
import ServicesCardProps from "@/types/cards/ServiceCardProps";
import React from "react";

export const ServiceCard: React.FC<ServicesCardProps> = ({
  title,
  shortDescription,
  icon,
}) => {
  return (
    <div className="bg-white flex flex-col gap-2 items-center p-4 text-center rounded-lg hover:shadow-default">
      <div className="bg-[#ffb324] aspect-square w-[107px] flex items-center rounded-full justify-center">
        <NextImage src={icon} width={50} height={50} claz="filter_white" />
      </div>
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-secondary">{shortDescription}</p>
    </div>
  );
};
