import socialLink from "@/data/sociallink.json";
import NextImage from "@/lib/NextImage";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full bg-transparent py-5 z-10">
      <div className="container">
        <ul className="flex items-center justify-end gap-2">
          {socialLink?.map((social, index) => (
            <li key={social?.name + index}>
              <Link target="_blank" href={social?.link}>
                {" "}
                <NextImage
                  src={social?.image}
                  alt={`${social?.name}-Zunair `}
                  height={500}
                  width={500}
                  claz="h-8  w-8"
                  priority
                />
              </Link>
            </li>
          ))}
          <li>
            <a
              href={"/assets/docs/ZunairKhursheed.pdf"}
              className=" px-12 font-bold bg-primary block rounded-lg py-2 text-white"
              download
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
