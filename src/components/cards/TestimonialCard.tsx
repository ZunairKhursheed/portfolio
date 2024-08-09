import NextImage from "@/lib/NextImage";

export const TestimonialCard = ({
  review,
  client,
  company,
}: {
  review: string;
  client: string;
  company: string;
}) => {
  return (
    <div className="lg:p-16 sm:p-8 p-4 shadow-[7px_7px_98px_rgba(9,47,104,.07)] rounded-md bg-white m-5 ">
      <p className="text-[#888] text-xl leading-relaxed tracking-wide">
        {review}
      </p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl">{client}</h2>
          <p className="fonnt-light text-[#888] m-0">{company}</p>
        </div>
        <NextImage
          src="/assets/svgs/quote.svg"
          width={500}
          height={500}
          claz="h-12 w-12 !text-yellow-600"
        />{" "}
      </div>
    </div>
  );
};
