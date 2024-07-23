import React from "react";

export const Tags = ({ tag }: { tag: string }) => {
  return (
    <div className="border-2 border-border border-solid rounded-full px-4 py-1 text-primary text-sm">
      {tag}
    </div>
  );
};
