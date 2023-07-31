import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[11px] md:ml-[0] ml-[38px] mr-[86px] mt-6 w-[92%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
            <Img
              className="h-[61px] md:h-auto mb-1.5 object-cover w-[61px]"
              src="images/img_image7.png"
              alt="imageSeven"
            />
            <div className="bg-gray-50 flex md:flex-1 md:flex-col flex-row gap-4 items-center justify-center mb-1.5 md:ml-[0] ml-[169px] md:mt-0 mt-[15px] p-[7px] rounded-[23px] w-[57%] md:w-full">
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
            <Text
              className="mb-[11px] md:ml-[0] ml-[58px] md:mt-0 mt-5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
              size="txtKleeOneSemiBold24"
            >
              LOGIN
            </Text>
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
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
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
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
