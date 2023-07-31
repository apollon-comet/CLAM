import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const DesktopFivePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient2  flex flex-col font-inter items-start justify-start mx-auto p-[72px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[165px] md:ml-[0] ml-[37px] w-[77%] md:w-full">
          <div className="flex flex-col gap-[35px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[365px] md:text-5xl text-[64px] text-center text-shadow-ts text-white-A700"
              size="txtInterBold64"
            >
              REGISTER
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtInterBold32WhiteA700"
              >
                EMAIL
              </Text>
              <Text
                className="mt-[30px] text-gray-600 text-xl"
                size="txtInterRegular20"
              >
                Input your email
              </Text>
              <Line className="bg-white-A700 h-px mt-[19px] w-full" />
              <div className="flex flex-row sm:gap-10 items-end justify-between mt-[57px] w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtInterBold32WhiteA700"
                  >
                    PASSWORD
                  </Text>
                  <Text
                    className="text-gray-600 text-xl"
                    size="txtInterRegular20"
                  >
                    Input your password
                  </Text>
                </div>
                <Img
                  className="h-[50px] md:h-auto mt-[31px] object-cover"
                  src="images/img_image20.png"
                  alt="imageTwenty"
                />
              </div>
              <Line className="bg-white-A700 h-px mt-[9px] w-full" />
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[57px] w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtInterBold32WhiteA700"
                  >
                    CONFIM PASSWORD
                  </Text>
                  <Text
                    className="text-gray-600 text-xl"
                    size="txtInterRegular20"
                  >
                    Input your password
                  </Text>
                </div>
                <Img
                  className="h-[50px] md:h-auto sm:mt-0 mt-[23px] object-cover"
                  src="images/img_image20.png"
                  alt="imageTwentyOne"
                />
              </div>
              <Line className="bg-white-A700 h-px mt-[9px] w-full" />
              <Button
                className="common-pointer bg-green-A400 cursor-pointer font-bold leading-[normal] min-w-[270px] md:ml-[0] ml-[499px] mt-[85px] py-[13px] rounded-[23px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                onClick={() => navigate("/")}
              >
                REGISTER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
