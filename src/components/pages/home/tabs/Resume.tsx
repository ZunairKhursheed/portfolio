import { Tags } from "@/components/ui/tags";

import { QualificationCard } from "@/components/cards/QualificationCard";
import experience from "@/data/experience.json";
import qualification from "@/data/qualification.json";
import skills from "@/data/skills.json";

export const Resume = () => {
  return (
    <div>
      <div>
        <span className="text-primary font-bold text-2xl">Resume</span>
        <h3 className="text-[clamp(30px,4vw,45px)] font-bold ">
          Combination of <br />
          Skill & Experience
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row  gap-4">
        <div className="flex-grow ">
          <div>
            <h3 className="font-bold text-3xl py-4">Experience</h3>

            {experience?.map((data) => (
              <QualificationCard
                key={data?.label + "exp"}
                institute={data?.institute}
                label={data?.label}
                start={data?.start}
                end={data?.end}
                description={data?.description}
              />
            ))}
          </div>
        </div>
        <div className="flex-grow ">
          <div>
            <h3 className="font-bold text-3xl py-4">Education</h3>

            {qualification?.map((data) => (
              <QualificationCard
                key={data?.label + "exp"}
                institute={data?.institute}
                label={data?.label}
                start={data?.start}
                end={data?.end}
                description={data?.description}
              />
            ))}
          </div>
          <div>
            <h3 className="font-bold text-3xl py-4">Skills</h3>
            <div className="flex gap-2 flex-wrap ">
              {" "}
              {skills?.map((data) => (
                <Tags key={data + "skill"} tag={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
