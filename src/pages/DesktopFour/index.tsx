import React from "react";

import { Img, Line, Text } from "components";

const DesktopFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient1  flex font-inter h-[1024px] justify-end mx-auto p-[77px] md:px-10 sm:px-5 relative w-full">
        <div className="absolute flex flex-col items-center justify-start left-[6%] top-[20%] w-[70%]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtInterBold32WhiteA700"
            >
              EMAIL
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[31px] text-gray-600 text-xl"
              size="txtInterRegular20"
            >
              Input your email
            </Text>
            <Line className="bg-white-A700 h-px ml-1 md:ml-[0] mt-[9px] w-full" />
            <Text
              className="mt-[51px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtInterBold32WhiteA700"
            >
              PASSWORD
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[18px] text-gray-600 text-xl"
              size="txtInterRegular20"
            >
              Input your password
            </Text>
            <Line className="bg-white-A700 h-px ml-1 md:ml-[0] mt-[7px] w-full" />
          </div>
        </div>
        <div className="bg-green-A400 h-[75px] mb-[330px] ml-[507px] mt-auto md:px-5 rounded-[23px] w-[12%]"></div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-3/4">
          <div className="flex flex-col items-end justify-start w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[62%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[383px] items-center justify-start">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="md:text-5xl text-[64px] text-center text-shadow-ts text-white-A700"
                    size="txtInterBold64"
                  >
                    LOGIN
                  </Text>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtInterBold32WhiteA700"
                >
                  LOGIN
                </Text>
              </div>
              <Img
                className="h-[50px] md:h-auto sm:mt-0 mt-[322px] object-cover"
                src="images/img_image20.png"
                alt="imageTwenty"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[93px] mt-28 w-[92%] md:w-full">
              <Line className="bg-white-A700 h-px mb-[9px] md:mt-0 mt-7 w-[49%]" />
              <Text
                className="ml-7 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtInterBold32WhiteA700"
              >
                OR
              </Text>
              <Line className="bg-white-A700 h-px mb-[9px] ml-8 md:ml-[0] md:mt-0 mt-7 w-[41%]" />
            </div>
            <div className="md:h-[119px] h-[91px] mt-7 relative w-[76%] md:w-full">
              <div className="absolute h-[67px] inset-y-[0] left-[0] my-auto md:pr-10 sm:pr-5 pr-[248px] w-[58%] sm:w-full">
                <div className="bg-white-A700 h-[67px] my-auto rounded-[24px] w-[48%]"></div>
                <div className="absolute flex flex-row gap-[38px] h-max inset-y-[0] items-center justify-between left-[3%] my-auto w-[36%]">
                  <Img
                    className="h-[50px] md:h-auto object-cover"
                    src="images/img_image18.png"
                    alt="imageEighteen"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Google
                  </Text>
                </div>
              </div>
              <div className="absolute h-[91px] inset-y-[0] my-auto md:pr-10 sm:pr-5 pr-[242px] right-[0] w-[58%] sm:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-end justify-end left-[0] my-auto p-[15px] rounded-[24px]">
                  <Text
                    className="mr-[27px] mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Apple ID
                  </Text>
                </div>
                <Img
                  className="absolute h-[91px] inset-y-[0] left-[0] my-auto object-cover w-[19%]"
                  src="images/img_image19.png"
                  alt="imageNineteen"
                />
              </div>
            </div>
            <Text
              className="mt-[46px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
              size="txtInterBold24WhiteA700"
            >
              Do you have an account? Register Here
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
