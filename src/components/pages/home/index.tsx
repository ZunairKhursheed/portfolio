"use client";
import NextImage from "@/lib/NextImage";
import { HomeTabs } from "./tabs";
// import { useEffect } from "react";
// import { fetchUser } from "@/feature/api/getUser";

export const Home = () => {
  // useEffect(() => {
  //   fetchUser()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  return (
    <main className="container">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 my-14">
        <div className="order-1 md:order-[0]">
          <h2 className="text-primary text-3xl font-bold">I&apos;m</h2>
          <h1 className="text-[clamp(35px,5vw,120px)] font-bold font-spacegrotesk">
            Muhammad Zunair Khursheed
          </h1>
          <p className="text-secondary text-2xl">
            Architecting Seamless Digital Experiences with 5+ Years of Web
            Development Expertise
          </p>
        </div>
        <div className="flex md:justify-center ">
          <div className="relative ">
            <div className="absolute bg-[#ffb324] animate-rotate max-h-[350px] inset-6 hidden md:block"></div>
            <NextImage
              src="/assets/images/Profile.jpg"
              width={250}
              height={500}
              claz="rounded-lg w-[250px] h-[350px] object-cover object-bottom relative"
              priority
            />
          </div>
        </div>
      </section>
      <HomeTabs />
    </main>
  );
};
