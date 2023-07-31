import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const DesktopSevenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[68px] w-full">
        <Header className="bg-indigo-900 flex flex-col font-kleeone items-center justify-center md:px-5 w-full" />
        <Text
          className="mt-[29px] md:text-5xl text-[64px] text-black-900"
          size="txtKameron64"
        >
          Online
        </Text>
        <div className="bg-indigo-900_01 flex flex-col font-kameron gap-10 items-center justify-center mt-[17px] p-[35px] md:px-5 rounded-[15px] w-[45%] md:w-full">
          <Img
            className="h-[194px] md:h-auto mt-3.5 object-cover w-[34%] sm:w-full"
            src="images/img_image23.png"
            alt="imageTwentyThree"
          />
          <Text
            className="text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
            size="txtKameron24"
          >
            Dr. XXX, M.Kes, Sp. KJ
          </Text>
          <div className="flex flex-col mb-8 relative w-[99%] sm:w-full">
            <div className="h-[239px] mx-auto w-full">
              <Text
                className="m-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtKameron24"
              >
                <span className="text-white-A700 font-kameron text-left font-normal">
                  <>
                    Harga : Rp. 50,000,00
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-red-A700 font-kameron text-left text-xl font-normal">
                  *
                </span>
                <span className="text-white-A700 font-kameron text-left text-xl font-normal">
                  Bayar terlebih dahulu
                </span>
              </Text>
              <div
                className="common-pointer absolute bg-blue_gray-100 flex flex-row gap-4 inset-x-[0] items-center justify-start mx-auto p-[15px] rounded-[21px] top-[24%] w-[98%]"
                onClick={() => navigate("/desktopeight")}
              >
                <div className="bg-black-900 h-[22px] ml-0.5 my-1 rounded-[50%] w-[22px]"></div>
                <Text
                  className="mb-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtKameron24Black900"
                >
                  <span className="text-black-900 font-kameron text-left font-normal">
                    Metode Pembayaran{" "}
                  </span>
                  <span className="text-red-A700 font-kameron text-left font-normal">
                    *
                  </span>
                </Text>
              </div>
            </div>
            <Button
              className="common-pointer bg-red-A700_01 cursor-pointer font-bold leading-[normal] min-w-[160px] ml-[181px] mt-[-16px] py-3.5 rounded-[20px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl z-[1]"
              onClick={() => navigate("/desktopnine")}
            >
              CHAT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSevenPage;
