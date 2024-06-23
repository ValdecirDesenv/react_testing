import React, { useState } from "react";
interface ExpProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 110 }: ExpProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <div>{children}</div>;
  }
  return (
    <p>
      {isExpanded ? children : children.substring(0, maxChars)}...{" "}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
