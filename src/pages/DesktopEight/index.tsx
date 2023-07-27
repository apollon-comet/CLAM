import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const DesktopEightPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-kleeone gap-14 justify-start mx-auto pb-[41px] w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-indigo-900 flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col font-kameron items-end md:px-10 sm:px-5 px-[323px] w-full">
          <div className="flex flex-col gap-[17px] items-start justify-start w-[81%] md:w-full">
            <Text
              className="md:text-5xl text-[64px] text-black-900"
              size="txtKameron64"
            >
              Metode Pembayaran
            </Text>
            <div className="bg-indigo-900_01 flex flex-col items-center justify-center p-[38px] sm:px-5 rounded-[15px] w-full">
              <div className="bg-white-A700_01 flex flex-row sm:gap-10 items-end justify-between mt-14 pr-[11px] py-[11px] w-full">
                <Img
                  className="h-12 md:h-auto object-cover"
                  src="images/img_image24.png"
                  alt="imageTwentyFour"
                />
                <Text
                  className="mr-4 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtKameronBold32"
                >
                  <>&gt;</>
                </Text>
              </div>
              <div className="md:h-[119px] h-[71px] mt-[50px] relative w-full">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[11px] w-full">
                  <Text
                    className="mr-4 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                    size="txtKameronBold32"
                  >
                    <>&gt;</>
                  </Text>
                </div>
                <Img
                  className="absolute h-[62px] left-[0] object-cover top-[0] w-[42%]"
                  src="images/img_image25.png"
                  alt="imageTwentyFive"
                />
              </div>
              <div className="bg-white-A700 flex flex-row sm:gap-10 items-start justify-between mt-[51px] p-[11px] w-full">
                <Img
                  className="h-11 md:h-auto ml-2 mt-1 object-cover"
                  src="images/img_image26.png"
                  alt="imageTwentySix"
                />
                <Text
                  className="mr-[17px] mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtKameronBold32"
                >
                  <>&gt;</>
                </Text>
              </div>
              <div className="h-20 md:h-[126px] mt-[46px] relative w-full">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[11px] w-full">
                  <Text
                    className="mr-4 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                    size="txtKameronBold32"
                  >
                    <>&gt;</>
                  </Text>
                </div>
                <Img
                  className="absolute h-20 inset-y-[0] left-[3%] my-auto object-cover w-[15%]"
                  src="images/img_image27.png"
                  alt="imageTwentySeven"
                />
              </div>
              <Button
                className="common-pointer bg-red-A700_01 cursor-pointer font-bold leading-[normal] mb-[26px] min-w-[160px] mt-[45px] py-3.5 rounded-[20px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                onClick={() => navigate("/desktopthirteen")}
              >
                BAYAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopEightPage;
