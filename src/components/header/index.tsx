import socialLink from "@/data/sociallink.json";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-transparent py-5 z-10">
      <div className="container">
        <ul className="flex items-center justify-end gap-2">
          {socialLink?.map((social, index) => (
            <li key={social?.name + index}>
              <Link href={social?.link}>
                {" "}
                <Image
                  src={social?.image}
                  alt=""
                  height={500}
                  width={500}
                  className="h-8  w-8"
                />
              </Link>
            </li>
          ))}
          <li>
            <Button size="lg" className=" px-12 font-bold">
              Download CV
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
