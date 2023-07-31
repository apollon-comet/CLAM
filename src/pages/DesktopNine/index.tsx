import React from "react";

import { Img, Text } from "components";

const DesktopNinePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-kameron items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-start justify-start pt-3.5 px-3.5 w-full">
            <div className="h-[102px] md:h-[118px] mb-4 md:ml-[0] ml-[74px] md:px-5 relative w-[9%] md:w-full">
              <Img
                className="absolute h-[102px] inset-y-[0] left-[0] my-auto object-cover w-[90%]"
                src="images/img_image23.png"
                alt="imageTwentyThree"
              />
              <Img
                className="absolute bottom-[17%] h-7 object-cover right-[0] w-[26%]"
                src="images/img_image32.png"
                alt="imageThirtyTwo"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[115px] md:mt-0 mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-justify text-white-A700"
              size="txtKameron32"
            >
              <span className="text-white-A700 font-kameron font-normal">
                <>
                  Dr. XXX, M.Kes, Sp. KJ
                  <br />
                </>
              </span>
              <span className="md:text-[22px] sm:text-xl text-white-A700 font-kameron text-2xl font-normal">
                Typing . . .
              </span>
            </Text>
            <Img
              className="md:flex-1 h-[72px] sm:h-auto md:ml-[0] ml-[322px] md:mt-0 mt-[17px] object-cover w-[5%] md:w-full"
              src="images/img_image28.png"
              alt="imageTwentyEight"
            />
            <Img
              className="md:flex-1 h-[65px] sm:h-auto md:ml-[0] ml-[104px] md:mt-0 mt-6 object-cover w-[8%] md:w-full"
              src="images/img_image29.png"
              alt="imageTwentyNine"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[853px] mt-[51px] md:px-5 w-[33%] md:w-full">
            <div className="h-[166px] md:h-[181px] sm:mt-0 mt-[15px] relative w-[81%] sm:w-full">
              <Img
                className="h-[166px] m-auto object-cover w-full"
                src="images/img_image34.png"
                alt="imageThirtyFour"
              />
              <Text
                className="absolute h-max inset-y-[0] left-[5%] my-auto text-black-900 text-justify text-xl tracking-[0.80px] w-[77%] sm:w-full"
                size="txtKameron20"
              >
                Selamat Siang, Dok. Saya ingin bertanya. Mengapa selama ini saya
                mengalami halusinasi?
              </Text>
            </div>
            <Img
              className="h-[87px] md:h-auto object-cover w-1/5 sm:w-full"
              src="images/img_image33.png"
              alt="imageThirtyThree"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-start md:ml-[0] ml-[88px] mt-4 md:px-5 w-[27%] md:w-full">
            <Img
              className="h-[102px] md:h-auto object-cover w-[29%] sm:w-full"
              src="images/img_image23.png"
              alt="imageTwentyThree_One"
            />
            <div className="h-[166px] relative w-[69%] sm:w-full">
              <Img
                className="h-[166px] m-auto object-cover w-full"
                src="images/img_image35.png"
                alt="imageThirtyFive"
              />
              <Img
                className="absolute h-[65px] inset-y-[0] my-auto object-cover right-[20%] w-[56%]"
                src="images/img_image14.png"
                alt="imageThirtySix"
              />
            </div>
          </div>
          <div className="bg-indigo-900 flex md:flex-col flex-row font-kavivanar md:gap-10 gap-[119px] items-center justify-start mt-[346px] p-7 sm:px-5 w-full">
            <Img
              className="md:flex-1 h-[67px] sm:h-auto md:ml-[0] ml-[31px] object-cover w-[5%] md:w-full"
              src="images/img_image30.png"
              alt="imageThirty"
            />
            <div className="bg-white-A700 flex flex-1 flex-row sm:gap-10 items-center justify-between max-w-[970px] mx-auto p-2 md:px-5 rounded-[38px] w-full">
              <Text
                className="ml-[38px] text-black-900 text-center text-xl"
                size="txtKavivanarRegular20"
              >
                Ketik di sini . . .
              </Text>
              <Img
                className="h-[60px] md:h-auto mr-[33px] object-cover"
                src="images/img_image31.png"
                alt="imageThirtyOne"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNinePage;
