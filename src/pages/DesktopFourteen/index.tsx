import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const DesktopFourteenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-kleeone sm:gap-10 md:gap-10 gap-[123px] items-center justify-start mx-auto pb-[68px] w-full">
        <Header className="bg-indigo-900 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-indigo-900_01 flex flex-col font-kameron md:gap-10 gap-[75px] items-center justify-start p-[35px] md:px-5 rounded-[15px] w-[45%] md:w-full">
          <Img
            className="h-[248px] md:h-auto mt-[21px] object-cover w-[42%]"
            src="images/img_image38.png"
            alt="imageThirtyEight"
          />
          <div className="h-[263px] mb-6 relative w-[99%] sm:w-full">
            <Text
              className="absolute inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[0] w-full"
              size="txtKameronBold32WhiteA700"
            >
              JANGAN LUPA DATANG YA! SEMOGA KONSULTASI ANDA BERJALAN LANCAR
            </Text>
            <Button className="absolute bg-red-A700_01 bottom-[0] cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[163px] mx-auto py-[17px] rounded-[9px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700">
              HOME
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourteenPage;
