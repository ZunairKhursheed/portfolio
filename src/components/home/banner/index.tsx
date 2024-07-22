import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import banner from "@/data/banner.json";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full min-h-screen clear-both relative">
      <div className="container">
        <div className="bg-background z-0 absolute w-[76%] h-[calc(100vh_+_0px)] left-0 top-0 custom-clip-path"></div>
        <div className="grid grid-cols-2 relative z-20 pt-32 bg-transparent">
          <div className="">
            <span className="inline-block text-primary text-3xl font-bold mb-[5px]">
              I&apos;m
            </span>
            <h1 className="text-[120px] font-bold leading-none mb-[22px]">
              {banner?.name}
            </h1>
            <p className="text-2xl mb-[27px] text-secondary leading-normal tracking-[0]">
              {banner?.tag_line}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative max-w-[250px]">
              <Image
                src="https://zunairkhursheed.vercel.app/img/thumbs/47-60.jpg"
                alt=""
                height={500}
                width={500}
                className="relative opacity-0 min-w-full"
              />
              <div className="absolute bg-no-repeat bg-[50%] bg-cover rounded-[15px]  bg-[url(https://zunairkhursheed.vercel.app/img/Profile.jpg)] inset-0 before:absolute  before:bg-[#ffb324] before:z-[-1] before:rotate-[-50deg] before:animate-[rotate_13s_linear_0s_infinite_alternate] before:inset-6"></div>
            </div>
          </div>
        </div>
        <div className="">
          <span className="top-[15%] left-[7%]"></span>
        </div>
        <Tabs defaultValue="account" className="z-30 bg-transparent mt-5 block">
          <TabsList className="flex items-center">
            <TabsTrigger value="account">
              <Image
                src="/assets/images/about.svg"
                alt=""
                width={500}
                height={500}
                className="text-primary w-5 h-5"
              />{" "}
              <span>About Me</span>
            </TabsTrigger>
            <TabsTrigger value="password">Resume</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
