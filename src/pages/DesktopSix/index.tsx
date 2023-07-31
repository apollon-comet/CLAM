import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const DesktopSixPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-kleeone mx-auto pb-[127px] relative w-full">
        <div className="bg-indigo-900 flex flex-col items-center justify-end mx-auto p-[11px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1316px] mt-3 mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <Img
                className="h-[61px] md:h-auto mb-1.5 object-cover w-[61px]"
                src="images/img_image7.png"
                alt="imageSeven"
              />
              <div className="bg-gray-50 flex md:flex-1 md:flex-col flex-row font-kavivanar gap-4 items-center justify-center mb-1.5 md:ml-[0] ml-[169px] md:mt-0 mt-[15px] p-[7px] rounded-[23px] w-[57%] md:w-full">
                <Img
                  className="h-[26px] sm:h-auto md:ml-[0] ml-[3px] object-cover w-[5%] md:w-full"
                  src="images/img_image8.png"
                  alt="imageEight"
                />
                <Text
                  className="mr-[589px] text-black-900 text-center text-xl"
                  size="txtKavivanarRegular20"
                >
                  Search . . .
                </Text>
              </div>
              <a
                href="javascript:"
                className="mb-[11px] md:ml-[0] ml-[58px] md:mt-0 mt-5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
              >
                <Text size="txtKleeOneSemiBold24">LOGIN</Text>
              </a>
              <Img
                className="md:flex-1 h-14 sm:h-auto md:ml-[0] ml-[63px] md:mt-0 mt-[11px] object-cover w-[5%] md:w-full"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <Img
                className="md:flex-1 h-[46px] sm:h-auto mb-1.5 ml-14 md:ml-[0] md:mt-0 mt-[15px] object-cover w-[4%] md:w-full"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
            <div className="flex flex-row font-kavivanar md:gap-10 items-start justify-between w-full">
              <Text
                className="mt-[5px] text-base text-center text-white-A700"
                size="txtKavivanarRegular16"
              >
                PROFILE
              </Text>
              <Text
                className="mb-[5px] text-base text-center text-white-A700"
                size="txtKavivanarRegular16"
              >
                Help
              </Text>
            </div>
          </div>
        </div>
        <div className="md:h-[693px] h-[773px] mb-auto ml-[39px] mt-[-8px] md:px-5 w-[43%] md:w-full z-[1]">
          <div className="absolute bg-indigo-900_01 bottom-[0] flex flex-col items-center justify-center p-[35px] sm:px-5 right-[0] rounded-[35px] w-[91%]">
            <Img
              className="h-[123px] md:h-auto mt-5 object-cover w-[123px]"
              src="images/img_image11.png"
              alt="imageEleven"
            />
            <Text
              className="mt-[29px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700 tracking-[5.76px]"
              size="txtKarantinaRegular36WhiteA700"
            >
              STRESS
            </Text>
            <Text
              className="mb-[7px] mt-11 text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl w-full"
              size="txtKameron24"
            >
              Stress adalah perubahan reaksi tubuh ketika menghadapi ancaman,
              tekanan, atau situasi yang baru. Ketika menghadapi stress, tubuh
              akan melepaskan hormon adrenalindan kortisol. Kondisi ini membuat
              detak jantung dan tekanan darah akan meningkat, pernapasan menjadi
              lebih cepat serta otot menjadi tegang.{" "}
            </Text>
          </div>
          <Img
            className="absolute h-[168px] left-[0] object-cover top-[0] w-[168px]"
            src="images/img_image22.png"
            alt="imageTwentyTwo"
          />
        </div>
        <List
          className="flex flex-col font-kameron gap-[52px] mb-auto ml-auto mr-[86px] mt-[-NaNpx] md:px-5 w-[44%] z-[1]"
          orientation="vertical"
        >
          <div className="bg-indigo-900_01 flex sm:flex-col flex-row sm:gap-12 items-center justify-between p-[27px] sm:px-5 rounded-[11px] w-full">
            <Img
              className="h-[104px] md:h-auto mb-1 object-cover w-[104px]"
              src="images/img_image23.png"
              alt="imageTwentyThree"
            />
            <div className="h-[101px] mr-2.5 relative w-[72%] sm:w-full">
              <Text
                className="m-auto text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
                size="txtKameron24"
              >
                <span className="text-white-A700 font-kameron font-normal">
                  <>
                    Dr. XXX, M.Kes, Sp. KJ
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-kameron text-xl font-normal">
                  <>
                    Counseling :<br />
                    <br />
                  </>
                </span>
              </Text>
              <div className="absolute bottom-[5%] flex flex-row items-center justify-between left-[2%] w-[66%]">
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer leading-[normal] min-w-[104px] py-1 rounded-[9px] text-black-900 text-center text-xl"
                  onClick={() => navigate("/desktopseven")}
                >
                  Online
                </Button>
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer leading-[normal] min-w-[104px] py-1 rounded-[9px] text-black-900 text-center text-xl"
                  onClick={() => navigate("/desktopten")}
                >
                  Offline
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900_01 flex sm:flex-col flex-row sm:gap-12 items-center justify-between p-[27px] sm:px-5 rounded-[11px] w-full">
            <Img
              className="h-[104px] md:h-auto mb-1 object-cover w-[104px]"
              src="images/img_image23.png"
              alt="imageTwentyThree"
            />
            <div className="h-[101px] mr-2.5 relative w-[72%] sm:w-full">
              <Text
                className="m-auto text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
                size="txtKameron24"
              >
                <span className="text-white-A700 font-kameron font-normal">
                  <>
                    Dr. XXX, M.Kes, Sp. KJ
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-kameron text-xl font-normal">
                  <>
                    Counseling :<br />
                    <br />
                  </>
                </span>
              </Text>
              <div className="absolute bottom-[5%] flex flex-row items-center justify-between left-[2%] w-[66%]">
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer leading-[normal] min-w-[104px] py-1 rounded-[9px] text-black-900 text-center text-xl"
                  onClick={() => navigate("/desktopseven")}
                >
                  Online
                </Button>
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer leading-[normal] min-w-[104px] py-1 rounded-[9px] text-black-900 text-center text-xl"
                  onClick={() => navigate("/desktopten")}
                >
                  Offline
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900_01 flex sm:flex-col flex-row sm:gap-12 items-center justify-between p-[27px] sm:px-5 rounded-[11px] w-full">
            <Img
              className="h-[104px] md:h-auto mb-1 object-cover w-[104px]"
              src="images/img_image23.png"
              alt="imageTwentyThree"
            />
            <div className="h-[101px] mr-2.5 relative w-[72%] sm:w-full">
              <Text
                className="m-auto text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
                size="txtKameron24"
              >
                <span className="text-white-A700 font-kameron font-normal">
                  <>
                    Dr. XXX, M.Kes, Sp. KJ
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-kameron text-xl font-normal">
                  <>
                    Counseling :<br />
                    <br />
                  </>
                </span>
              </Text>
              <div className="absolute bottom-[5%] flex flex-row items-center justify-between left-[2%] w-[66%]">
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer leading-[normal] min-w-[104px] py-1 rounded-[9px] text-black-900 text-center text-xl"
                  onClick={() => navigate("/desktopseven")}
                >
                  Online
                </Button>
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer leading-[normal] min-w-[104px] py-1 rounded-[9px] text-black-900 text-center text-xl"
                  onClick={() => navigate("/desktopten")}
                >
                  Offline
                </Button>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default DesktopSixPage;
