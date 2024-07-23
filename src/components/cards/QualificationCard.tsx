import QualificationCardProps from "@/types/cards/QualificationCardProps";
import React from "react";
import { Tags } from "../ui/tags";

export const QualificationCard: React.FC<QualificationCardProps> = ({
  label,
  institute,
  start,
  end,
  description,
}) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between gap-2">
        <div>
          <h4 className="font-bold text-xl">{label}</h4>
          <p className="text-secondary ">{institute}</p>
        </div>
        <div className="flex-shrink-0">
          <Tags tag={`${start} - ${end}`} />
        </div>
      </div>
      {description && (
        <ul>
          {description?.map((data, i) => (
            <li
              key={data + i + label}
              className="text-sm text-secondary text-wrap list-disc ml-5"
            >
              {data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
