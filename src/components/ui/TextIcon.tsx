import React from "react";

interface TextIconProps {
  icon: React.ElementType;
  text?: string; // made optional
  bgColor?: string;
  rounded?: boolean;
  size?: string; // e.g. "3rem"
  iconWidth?: number;
  iconHeight?: number;
  textStyle?: React.CSSProperties; // optional override for text
}

const TextIcon: React.FC<TextIconProps> = ({
  icon: Icon,
  text = "",
  bgColor = "#f3f4f6",
  rounded = true,
  size = "3rem",
  iconWidth = 20,
  iconHeight = 20,
  textStyle,
}) => {
  return (
    <div
      className="flex p-4 flex-col items-center justify-center"
      style={{
        backgroundColor: bgColor,
        borderRadius: rounded ? "2rem" : "0",
        width: size,
        height: size,
      }}
    >
      <div className="flex items-center justify-center mb-[2px]">
        <Icon width={iconWidth} height={iconHeight} />
      </div>

      {/* Only render if text is not empty */}
      {text.trim() !== "" && (
        <span
          className="text-center font-medium leading-tight text-white"
          style={{
            fontSize: "0.55rem", // default smaller text
            lineHeight: 1.1,
            ...textStyle,
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default TextIcon;
