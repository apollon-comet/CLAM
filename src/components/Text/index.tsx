import React from "react";

const sizeClasses = {
  txtKarantinaRegular36: "font-karantina font-normal",
  txtKavivanarRegular36WhiteA700: "font-kavivanar font-normal",
  txtKameron32: "font-kameron font-normal",
  txtKarantinaRegular32: "font-karantina font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold32WhiteA700: "font-bold font-inter",
  txtKavivanarRegular20: "font-kavivanar font-normal",
  txtInterBold24: "font-bold font-inter",
  txtInterBold64: "font-bold font-inter",
  txtKavivanarRegular36: "font-kavivanar font-normal",
  txtKarantinaRegular32WhiteA700: "font-karantina font-normal",
  txtKavivanarRegular16: "font-kavivanar font-normal",
  txtKameronBold32WhiteA700: "font-bold font-kameron",
  txtKarantinaRegular48: "font-karantina font-normal",
  txtKameron64: "font-kameron font-normal",
  txtKameronBold32: "font-bold font-kameron",
  txtKameron20: "font-kameron font-normal",
  txtInterBold24WhiteA700: "font-bold font-inter",
  txtKameron24: "font-kameron font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtKatibehRegular96: "font-katibeh font-normal",
  txtInterBold32: "font-bold font-inter",
  txtKameron24Black900: "font-kameron font-normal",
  txtKarantinaRegular36WhiteA700: "font-karantina font-normal",
  txtInterRegular36: "font-inter font-normal",
  txtKleeOneSemiBold24: "font-kleeone font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
