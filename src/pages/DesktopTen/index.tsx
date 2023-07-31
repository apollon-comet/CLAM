import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const DesktopTenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-kleeone items-center justify-start mx-auto pb-[187px] w-full">
        <div className="flex flex-col md:gap-10 gap-[115px] items-center justify-start w-full">
          <Header className="bg-indigo-900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-kameron md:gap-10 items-center justify-between max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="bg-indigo-900_01 flex md:flex-1 flex-col items-center justify-end mb-[21px] p-[35px] sm:px-5 rounded-[11px] w-[35%] md:w-full">
              <Img
                className="h-[150px] md:h-auto mt-[19px] object-cover w-[150px]"
                src="images/img_image23.png"
                alt="imageTwentyThree"
              />
              <Text
                className="mt-[42px] text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
                size="txtKameron24"
              >
                Dr. XXX, M.Kes, Sp. KJ
              </Text>
              <Text
                className="mb-0.5 mt-[29px] text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
                size="txtKameron24"
              >
                <>
                  Alumnus : Universitas YYY
                  <br />
                  Bekerja di Rumah Sakit ZZZ
                  <br />
                  <br />
                  Harga konsultasi : Rp. 250.000,00
                </>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col font-inter items-center justify-start w-[53%] md:w-full">
              <div
                className="common-pointer sm:h-[1008px] md:h-[570px] h-[590px] relative w-full"
                onClick={() => navigate("/desktopfourteen")}
              >
                <div className="absolute sm:h-[1008px] h-[570px] inset-[0] justify-center m-auto w-full">
                  <Text
                    className="m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterBold24"
                  >
                    <>
                      Hari Tanggal :<br />
                      <br /> <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      Jam :<br />
                    </>
                  </Text>
                  <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[98%]">
                    <List
                      className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-indigo-900_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-1.5 w-full">
                        <Text
                          className="my-[11px] text-center text-sm text-white-A700"
                          size="txtInterBold14"
                        >
                          <>
                            Selasa, <br />
                            02 Mei
                          </>
                        </Text>
                      </div>
                      <div className="bg-indigo-900_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-1.5 w-full">
                        <Text
                          className="my-[11px] text-center text-sm text-white-A700"
                          size="txtInterBold14"
                        >
                          <>
                            Rabu,
                            <br />
                            03 Mei
                          </>
                        </Text>
                      </div>
                      <div className="bg-indigo-900_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-1.5 w-full">
                        <Text
                          className="my-[11px] text-center text-sm text-white-A700"
                          size="txtInterBold14"
                        >
                          <>
                            Kamis, <br />
                            04 Mei
                          </>
                        </Text>
                      </div>
                      <div className="bg-indigo-900_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-1.5 w-full">
                        <Text
                          className="my-[11px] text-center text-sm text-white-A700"
                          size="txtInterBold14"
                        >
                          <>
                            Jumat, <br />
                            05 Mei
                          </>
                        </Text>
                      </div>
                      <div className="bg-indigo-900_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-1.5 w-full">
                        <Text
                          className="my-[11px] text-center text-sm text-white-A700"
                          size="txtInterBold14"
                        >
                          <>
                            Sabtu, <br />
                            06 Mei
                          </>
                        </Text>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-start mt-[106px] w-[59%] md:w-full">
                      <Button className="bg-indigo-900_01 cursor-pointer font-bold leading-[normal] min-w-[111px] py-[27px] text-center text-sm text-white-A700">
                        12 : 00
                      </Button>
                      <Button className="bg-indigo-900_01 cursor-pointer font-bold leading-[normal] min-w-[111px] py-[27px] text-center text-sm text-white-A700">
                        13 : 00
                      </Button>
                      <Text
                        className="bg-indigo-900_01 h-[72px] justify-center pl-[26px] pr-[35px] sm:px-5 py-[27px] text-center text-sm text-white-A700 w-[111px]"
                        size="txtInterBold14"
                      >
                        14 : 00
                      </Text>
                    </div>
                    <div className="bg-blue_gray-100 flex flex-row font-kameron gap-4 items-center justify-start ml-1.5 md:ml-[0] mt-[82px] p-[15px] rounded-[21px] w-[81%] md:w-full">
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
                </div>
                <Button className="absolute bg-red-A700_01 bottom-[0] cursor-pointer font-bold leading-[normal] left-[26%] min-w-[163px] py-[22px] rounded-[9px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                  CONFIRM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTenPage;
