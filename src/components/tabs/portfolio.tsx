import PortfolioCategory from "@/data/portfolio-category.json";
import Projects from "@/data/project.json";
import { useMemo, useState } from "react";
import { PortfolioCard } from "../cards/PortfolioCard";

export const PortfolioTabs = () => {
  const [tab, setTab] = useState<string>("all");

  const filterProject = useMemo(() => {
    return tab == "all"
      ? Projects
      : Projects?.filter((project) => project?.type == tab);
  }, [tab]);
  return (
    <>
      <ul className="w-full flex  items-center justify-center gap-1 bg-transparent mb-5 lg:overflow-hidden overflow-x-auto">
        {PortfolioCategory?.map((cat, i) => (
          <li
            key={cat + i}
            className={`capitalize  hover:bg-transparent hover:text-primary md:text-xl sm:text-lg text-sm text-nowrap ${
              tab == cat ? "text-primary" : "text-black"
            } p-3 cursor-pointer font-medium`}
            onClick={() => setTab(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
      <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {filterProject?.map((project, index) => (
            <PortfolioCard
              key={index + project?.title}
              type={project?.type}
              title={project?.title}
              description={project?.description}
              skills={project?.skills}
              images={project?.images}
              thumbnail={project?.thumbnail}
            />
          ))}
        </div>
      </div>
    </>
  );
};
