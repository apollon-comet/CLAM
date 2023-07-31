import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import Header from "components/Header";

const DesktopTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-kleeone items-center justify-start mx-auto pb-[200px] w-full">
        <div className="flex flex-col md:gap-10 gap-16 justify-start w-full">
          <Header className="bg-indigo-900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[51px] md:px-5 w-3/4 md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-justify"
              size="txtKavivanarRegular36"
            >
              <span className="md:text-[44px] sm:text-[38px] text-black-900 tracking-[5.76px] font-karantina text-5xl font-normal">
                <>
                  Informasi singkat
                  <br />
                  <br />
                </>
              </span>
              <span className="text-black-900 font-kantumruy text-xl font-normal">
                <>
                  Kesehatan mental adalah suatu kondisi yang memungkinkan
                  perkembangan fisik, intelektual dan emosional yang
                  <br />
                  optimal dari seseorang dan perkembangan itu berjalan selaras
                  dengan keadaan individu tersebut.
                  <br />
                  CALM, merupakan sebuah aplikasi untuk menangani masalah
                  kesehatan mental anda.
                  <br />
                  Jika anda mengalami masalah kesehatan mental, anda bisa
                  berkonsultasi dan membuat janji dengan dokter disini.
                  <br />
                  <br />
                </>
              </span>
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-0.5 text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-justify tracking-[7.68px]"
              size="txtKarantinaRegular48"
            >
              Layanan
            </Text>
            <div className="flex md:flex-col flex-row font-karantina md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[54px] w-[87%] md:w-full">
              <div
                className="common-pointer bg-blue_gray-100 flex flex-col gap-[26px] items-center justify-start md:mt-0 mt-[11px] p-[17px] rounded-[35px] w-[21%] md:w-full"
                onClick={() => navigate("/desktopsix")}
              >
                <Img
                  className="h-[85px] md:h-auto object-cover w-[85px]"
                  src="images/img_image11.png"
                  alt="imageEleven"
                />
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-justify tracking-[5.76px]"
                  size="txtKarantinaRegular36"
                >
                  STRESS
                </Text>
              </div>
              <div
                className="common-pointer md:h-[183px] h-[195px] ml-11 md:ml-[0] relative w-[21%] md:w-full"
                onClick={() => navigate("/desktopeleven")}
              >
                <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[35px] w-full">
                  <Text
                    className="mt-[110px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-justify tracking-[5.76px]"
                    size="txtKarantinaRegular36"
                  >
                    DEPRESI
                  </Text>
                </div>
                <Img
                  className="absolute h-[154px] inset-x-[0] mx-auto object-cover rounded-sm top-[0] w-[154px]"
                  src="images/img_image12.png"
                  alt="imageTwelve"
                />
              </div>
              <div
                className="common-pointer bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[65px] md:mt-0 mt-[11px] p-[13px] rounded-[35px] w-[21%] md:w-full"
                onClick={() => navigate("/desktoptwelve")}
              >
                <Img
                  className="h-[108px] md:h-auto object-cover w-[108px]"
                  src="images/img_image13.png"
                  alt="imageThirteen"
                />
                <Text
                  className="mb-1.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-justify tracking-[5.12px]"
                  size="txtKarantinaRegular32"
                >
                  SKIZOFRENIA
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-center justify-center md:ml-[0] ml-[53px] md:mt-0 mt-[11px] p-[34px] sm:px-5 rounded-[35px] w-[21%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto my-[33px] object-cover w-full"
                  src="images/img_image14.png"
                  alt="imageFourteen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
