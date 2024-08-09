import Image from "next/image";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export const PortfolioModal = ({
  open,
  setOpen,
  title,
  description,
  skills,
  images,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  description: string;
  skills: string[];
  images: string[];
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[90%] w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 max-h-[calc(100vh-200px)] h-full overflow-y-auto">
          <div className="col-span-1 md:order-1 order-2">
            <p className="text-stone-500">{description}</p>
            <h2 className="font-bold mt-4 ">Skills</h2>
            <div className="flex items-center flex-wrap gap-2 mt-2">
              {skills?.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1 sticky top-0 overflow-y-auto h-full md:order-2 order-1  ">
            <div className="flex flex-col items-center">
              {images?.map((image, index) => (
                <Image
                  src={image}
                  key={index + image}
                  height={500}
                  width={500}
                  alt="image"
                  className="w-full aspect-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
