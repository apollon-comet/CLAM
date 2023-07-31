import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const DesktopThirteenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-kleeone sm:gap-10 md:gap-10 gap-[123px] items-center justify-start mx-auto pb-[68px] w-full">
        <Header className="bg-indigo-900 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-indigo-900_01 flex flex-col md:gap-10 gap-[70px] items-center justify-start p-[35px] md:px-5 rounded-[15px] w-[45%] md:w-full">
          <Img
            className="h-[260px] md:h-auto mt-3.5 object-cover w-[260px]"
            src="images/img_image37.png"
            alt="imageThirtySeven"
          />
          <div className="h-[239px] md:h-[287px] mb-12 relative w-[99%] sm:w-full">
            <Text
              className="m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-full"
              size="txtKameronBold32WhiteA700"
            >
              SELAMAT! PEMBAYARAN ANDA BERHASIL!
            </Text>
            <Button className="absolute bg-red-A700_01 bottom-[0] cursor-pointer font-bold font-inter inset-x-[0] leading-[normal] min-w-[163px] mx-auto py-[22px] rounded-[9px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
              KEMBALI
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThirteenPage;
