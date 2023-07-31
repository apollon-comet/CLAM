import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const DesktopThreePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[42px] items-start justify-start md:px-5 w-[91%] md:w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[456px] bg-indigo-900_01 flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <div className="h-[221px] md:h-[263px] ml-32 md:ml-[0] mr-[93px] mt-16 relative w-[52%]">
              <Img
                className="absolute h-[199px] left-[0] object-cover top-[0] w-[199px]"
                src="images/img_image7.png"
                alt="imageSeven"
              />
              <Img
                className="absolute bottom-[0] h-[68px] object-cover right-[0] w-[42%]"
                src="images/img_image15.png"
                alt="imageFifteen"
              />
            </div>
            <Text
              className="mt-[25px] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
              size="txtInterRegular36"
            >
              Renata Elisse A.
            </Text>
            <Text
              className="md:ml-[0] ml-[50px] mr-[252px] mt-[103px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtInterRegular32"
            >
              <>Biodata &gt;</>
            </Text>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingBottom: "50px",
                  paddingLeft: "50px",
                  gap: "15px",
                  color: "#ffffff",
                  fontSize: "32px",
                },
              }}
              className="flex flex-col items-center justify-start mt-[75px] md:pr-10 sm:pr-5 pr-[231px] w-1/2"
            >
              <MenuItem
                icon={
                  <Img
                    className="h-[46px] md:h-auto mb-[49px] object-cover w-[47px]"
                    src="images/img_image16.png"
                    alt="imageSixteen"
                  />
                }
              >
                <Text className="mb-12 mt-[7px] md:text-3xl sm:text-[28px]">
                  <>Settings &gt;</>
                </Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[68px] md:h-auto mb-7 object-cover w-[41%]"
                    src="images/img_image17.png"
                    alt="imageSeventeen"
                  />
                }
              >
                <Text className="md:text-3xl sm:text-[28px]">Logout</Text>
              </MenuItem>
            </Menu>
            {!collapsed && (
              <Text
                className="common-pointer mb-[118px] md:ml-[0] ml-[60px] mr-[204px] mt-[90px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtInterRegular32"
                onClick={() => navigate("/")}
              >
                <>&lt;&lt;&lt; Kembali</>
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[39px] items-center justify-start md:mt-0 mt-[93px] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInterBold32"
              >
                Name{" "}
              </Text>
              <div className="flex flex-col gap-[21px] justify-start md:ml-[0] ml-[3px] mt-[34px] w-[99%] md:w-full">
                <Text
                  className="ml-2 md:ml-[0] text-gray-600 text-xl"
                  size="txtInterRegular20"
                >
                  Input your name
                </Text>
                <Line className="bg-black-900 h-px w-full" />
              </div>
              <Text
                className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInterBold32"
              >
                Age
              </Text>
              <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[11px] mt-[29px] w-[99%] md:w-full">
                <Text
                  className="text-gray-600 text-xl"
                  size="txtInterRegular20"
                >
                  Input your age
                </Text>
                <Line className="bg-black-900 h-px w-full" />
              </div>
              <Text
                className="mt-[72px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInterBold32"
              >
                Email
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[11px] mt-[55px] w-[99%] md:w-full">
                <Text
                  className="text-gray-600 text-xl"
                  size="txtInterRegular20"
                >
                  Input your email
                </Text>
                <Line className="bg-black-900 h-px w-full" />
              </div>
              <Text
                className="mt-[77px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInterBold32"
              >
                Address
              </Text>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-start w-full">
              <Text
                className="md:ml-[0] ml-[3px] text-gray-600 text-xl"
                size="txtInterRegular20"
              >
                Input your address
              </Text>
              <Line className="bg-black-900 h-px w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
