import { PortfolioTabs } from "@/components/tabs/portfolio";

export const Portfolio = () => {
  return (
    <div className="slider-container">
      <div className="lg:p-16 sm:p-8 p-3 shadow-[7px_7px_98px_rgba(9,47,104,.07)] rounded-md font-spacegrotesk bg-white">
        <h2 className="font-bold text-primary text-2xl">Resume</h2>
        <p className="font-bold md:max-w-[470px] md:text-5xl text-3xl leading-tight mb-10">
          My works that I did for clients
        </p>
        <PortfolioTabs />
      </div>
    </div>
  );
};
