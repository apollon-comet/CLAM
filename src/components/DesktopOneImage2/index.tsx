import React from "react";

import { Img, Text } from "components";

type DesktopOneImage2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "usertext"
> &
  Partial<{ usertext: string }>;

const DesktopOneImage2: React.FC<DesktopOneImage2Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[409px] h-[443px] relative w-full">
          <div className="absolute bottom-[0] h-[409px] right-[0] w-[81%]">
            <Img
              className="h-[409px] m-auto object-cover w-full"
              src="images/img_image2.png"
              alt="imageTwo"
            />
            <div className="absolute h-[180px] left-[6%] top-[10%] w-[81%]">
              <Img
                className="h-[180px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_image3.png"
                alt="imageThree"
              />
              <Img
                className="absolute bottom-[13%] h-[57px] object-cover right-[12%] w-1/4"
                src="images/img_image6.png"
                alt="imageSix"
              />
            </div>
          </div>
          <Img
            className="absolute h-[107px] left-[0] object-cover top-[34%] w-[28%]"
            src="images/img_image6.png"
            alt="imageFour"
          />
          <Img
            className="absolute h-[76px] object-cover right-[23%] top-[0] w-[24%]"
            src="images/img_image6.png"
            alt="imageFive"
          />
        </div>
        <Text
          className="md:ml-[0] ml-[87px] shadow-bs md:text-5xl text-8xl text-center text-white-A700"
          size="txtKatibehRegular96"
        >
          {props?.usertext}
        </Text>
      </div>
    </>
  );
};

DesktopOneImage2.defaultProps = { usertext: "C A L M" };

export default DesktopOneImage2;
