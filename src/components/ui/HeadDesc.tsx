import React from "react";
import TextIcon from "./TextIcon";

interface HeadDescProps {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBgColor?: string;
  iconSize?: string;
  iconWidth?: number;
  iconHeight?: number;
  titleStyle?: React.CSSProperties;
  descStyle?: React.CSSProperties;
  rounded?: boolean;
}

const HeadDesc: React.FC<HeadDescProps> = ({
  title,
  description,
  icon,
  iconBgColor = "#f3f4f6",
  iconSize = "3rem",
  iconWidth = 20,
  iconHeight = 20,
  titleStyle,
  descStyle,
  rounded = true,
}) => {
  return (
    <div className="flex items-start gap-3 ">
      {/* Icon box */}
      <TextIcon
        icon={icon}
        text="" // no text below the icon
        bgColor={iconBgColor}
        size={iconSize}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        rounded={rounded}
      />

      {/* Title + Description */}
      <div className="flex flex-col">
        <h3
          className="text-gray-900 font-medium  leading-snug"
          style={{ fontSize: "1.2rem", ...titleStyle }}
        >
          {title}
        </h3>
        <p
          className="text-gray-600"
          style={{ fontSize: "0.85rem", lineHeight: 1.4, ...descStyle }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeadDesc;
