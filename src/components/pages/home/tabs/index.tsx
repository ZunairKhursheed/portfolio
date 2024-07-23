"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NextImage from "@/lib/NextImage";
import { useState } from "react";
import { About } from "./About";
import { Resume } from "./Resume";
import { Services } from "./Services";

export const HomeTabs = () => {
  const [currentTab, setCurrentTab] = useState("about");
  const tabs = [
    {
      value: "about",
      label: "About Me",
      icon: "/assets/svgs/about.svg",
      content: <About />,
    },
    {
      value: "resume",
      label: "Resume",
      icon: "/assets/svgs/resume.svg",
      content: <Resume />,
    },
    // {
    //   value: "portfolio",
    //   label: "Portfolio",
    //   icon: "/assets/svgs/portfolio.svg",
    //   content: <div>Portfolio</div>,
    // },
    {
      value: "service",
      label: "Services",
      icon: "/assets/svgs/service.svg",
      content: <Services />,
    },
    // {
    //   value: "testimonial",
    //   label: "Testimonials",
    //   icon: "/assets/svgs/testimonial.svg",
    //   content: <div>Testimonials</div>,
    // },
    // {
    //   value: "contact",
    //   label: "Contact",
    //   icon: "/assets/svgs/email.svg",
    //   content: <div>Contact</div>,
    // },
  ];
  return (
    <section className="pb-32">
      <Tabs defaultValue="about" onValueChange={(e) => setCurrentTab(e)}>
        <TabsList className="flex flex-wrap justify-start gap-2 flex-col md:flex-row">
          {tabs?.map((data, i) => (
            <TabsTrigger value={data?.value} key={data?.value + i}>
              <NextImage
                src={data?.icon}
                width={50}
                height={50}
                claz={`group-hover:filter_white ${
                  currentTab == data?.value ? "filter_white" : ""
                }`}
              />
              <span
                className={` ${
                  currentTab == data?.value
                    ? ""
                    : "md:opacity-0 md:hidden md:w-0"
                } group-hover:block overflow-hidden group-hover:opacity-100 group-hover:w-auto `}
              >
                {data?.label}{" "}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs?.map((data, i) => (
          <TabsContent value={data?.value} key={data?.value + i + "Content"}>
            {data?.content}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
