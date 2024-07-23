import React from "react";

import services from "@/data/services.json";
import { ServiceCard } from "@/components/cards/ServiceCard";

export const Services = () => {
  return (
    <div>
      <div>
        <span className="text-primary font-bold text-2xl">Service</span>
        <h3 className="text-[clamp(32px,4vw,45px)] font-bold ">
          Never compromise <br />
          with quality
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  py-4 gap-4">
        {services?.map((data) => (
          <ServiceCard
            key={data?.title + "services"}
            title={data?.title}
            shortDescription={data?.shortDescription}
            icon={data?.icon}
          />
        ))}
      </div>
    </div>
  );
};
