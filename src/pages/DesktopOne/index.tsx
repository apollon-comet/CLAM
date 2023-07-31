import React from "react";

import { Img, Text } from "components";
import DesktopOneImage2 from "components/DesktopOneImage2";

const DesktopOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col font-katibeh justify-start mx-auto p-[119px] md:px-10 sm:px-5 shadow-bs1 w-full">
        <Img
          className="h-[33px] ml-1 md:ml-[0]"
          src="images/img_welcometo.svg"
          alt="welcometo"
        />
        <div className="flex flex-col items-center ml-1 md:ml-[0] mr-[389px] mt-[83px] md:pl-10 sm:pl-5 pl-[428px] w-[68%] md:w-full">
          <DesktopOneImage2 className="flex flex-col gap-[7px] justify-start w-full" />
        </div>
        <div className="flex flex-col font-kavivanar items-end mb-5 ml-1 md:ml-[0] mr-[389px] mt-[29px] md:px-10 sm:px-5 px-[43px]">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
            size="txtKavivanarRegular36WhiteA700"
          >
            by MentalHealth
          </Text>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
