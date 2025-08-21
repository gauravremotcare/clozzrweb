import React from "react";

interface TitleDescBoxProps {
  icon: React.ElementType;
  title: string;
  description: string;
  borderColor?: string;
  bgColor?: string;
  iconSize?: number;
}

const TitleDescBox: React.FC<TitleDescBoxProps> = ({
  icon: Icon,
  title,
  description,
  borderColor = "#4655FF", // default blue for border
  bgColor = "#ffffff", // default white background
  iconSize = 32,
}) => {
  return (
    <div
      className="group rounded p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-start gap-6"
      style={{
        // border: `0.3px solid ${borderColor}`,
        backgroundColor: bgColor,
      }}
    >
      {/* Left: Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${borderColor}15`, // light transparent background
        }}
      >
        <Icon
          width={iconSize}
          height={iconSize}
          style={{ color: borderColor }}
        />
      </div>

      {/* Right: Title + Description */}
      <div className="flex flex-col">
        <p
          className="text-base  font-bold transition-colors duration-300 group-hover:opacity-80"
          style={{ color: borderColor }}
        >
          {title}
        </p>
        <p className="text-black text-base ">{description}</p>
      </div>
    </div>
  );
};

export default TitleDescBox;
