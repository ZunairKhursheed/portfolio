import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import NextImage from "@/lib/NextImage";

export const Contact = () => {
  return (
    <div className="bg-white lg:p-16 sm:p-8 p-3 font-spacegrotesk">
      <h2 className="font-bold text-primary text-2xl">Contact Me</h2>
      <p className="font-bold  md:text-5xl text-3xl leading-none mb-10 lg:max-w-[450px]">
        Contact me to get your work done
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="col-span-1">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="rounded-full lg:p-7 p-5 bg-[#ffb324]">
                <NextImage
                  width={500}
                  height={500}
                  src="/assets/svgs/phone.svg"
                  claz="md:h-10 md:w-10 h-7  w-7"
                />
              </div>
              <div>
                <p className="font-bold md:text-2xl text-lg">Call Me</p>
                <p className="text-[#888] md:text-lg text-md">
                  +92 300 9167129
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-full lg:p-7 p-5 bg-[#ffb324]">
                <NextImage
                  width={500}
                  height={500}
                  src="/assets/svgs/email.svg"
                  claz="md:h-10 md:w-10 h-7 w-7"
                />
              </div>
              <div>
                <p className="font-bold md:text-2xl text-lg">Email</p>
                <a
                  className="text-[#888] md:text-lg text-md"
                  href="mailto:zunairkhursheed97@gmail.com"
                >
                  zunairkhursheed97@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-full lg:p-7 p-5 bg-[#ffb324]">
                <NextImage
                  width={500}
                  height={500}
                  src="/assets/svgs/address.svg"
                  claz="md:h-10 md:w-10 h-7  w-7"
                />
              </div>
              <div>
                <p className="font-bold md:text-2xl text-lg">Address</p>
                <p className="text-[#888] md:text-lg text-md">
                  Khayaban-e-amin lahore
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-4">
            <Input placeholder="Your Name" className="p-5 h-auto" />
            <Input placeholder="Your Email" className="p-5 h-auto" />
            <Input placeholder="Your Phone" className="p-5 h-auto" />
            <Input placeholder="Subject" className="p-5 h-auto" />
            <Textarea
              placeholder="Your message here"
              className="p-5 h-auto md:col-span-2"
              rows={10}
            />
          </div>
          <Button className="px-8 text-xl rounded-lg h-auto tracking-tighter  text-white">
            Submit Now
          </Button>
        </div>
      </div>
    </div>
  );
};
