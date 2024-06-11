import React from "react";
import { Facebook, Instagram, Phone, Twitter } from "react-feather";

const Footer = () => {
  return (
    <div className=" bg-[#18303A]">
      <div className="lg:max-w-[1250px] py-[88px] mx-auto  flex">
        <div className=" w-[50%] flex gap-[40px]">
          <div className="">
            <img className="max-w-[250px]" src="/logo.png" alt="" />
          </div>
          <div className=" text-white">
            <p className="mb-[30px] text-[18px] text-white">
              Hello, we are ABC trying to make an effort to put the right people
              for you to get the best results. Just insight
            </p>

            <p className="flex pb-2">
              <span>
                <i class="pr-4 fa-solid fa-phone text-xl"></i>
              </span>
              <span className="text-[16px] text-[#C2C7D6]">
                (+95) 9887288807{" "}
              </span>{" "}
            </p>
            <p className="flex pb-2">
              <span>
                <i class="pr-4 fa-regular fa-envelope text-xl"></i>
              </span>
              <span className="text-[16px] text-[#C2C7D6]">
                support@renemattias.com
              </span>
            </p>
            <p className="flex pb-2">
              <span>
                <i class="fa-solid fa-location-dot text-xl pr-4"></i>
              </span>
              <span className="text-[16px] text-[#C2C7D6]">
                2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
              </span>
            </p>

            <div className="flex pt-[56px] gap-4">
              <Facebook />
              <Twitter />
              <Instagram />
              <Phone />
            </div>
          </div>
        </div>
        <div className=" w-[50%]">
          <div className=" max-w-[415px] gap-[130px] flex ml-auto">
            <div>
              <p className="text-[18px] font-[600] leading-[30px] mb-[15px] text-white">
                Service We Provide
              </p>
              <div className="flex flex-col gap-[10px]">
                <p className="text-[16px] font-[400] leading-[25px] text-[#EBF1F3]">
                  Rooms & Suits
                </p>
                <p className="text-[16px] font-[400] leading-[25px] text-[#EBF1F3]">
                  Dining
                </p>
                <p className="text-[16px] font-[400] leading-[25px] text-[#EBF1F3]">
                  Meeting & Conference
                </p>
                <p className="text-[16px] font-[400] leading-[25px] text-[#EBF1F3]">
                  Weddings
                </p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-[600] leading-[30px] mb-[15px] text-white">
                Explore
              </p>
              <div className="flex flex-col gap-[10px]">
                <p className="text-[16px] font-[400] leading-[25px] text-[#EBF1F3]">
                  Contact Us
                </p>
                <p className="text-[16px] font-[400] leading-[25px] text-[#EBF1F3]">
                  Gallery
                </p>
                <p className="text-[16px] font-[400] leading-[25px] text-[#EBF1F3]">
                  Our Location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
