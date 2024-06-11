import { Facebook, Instagram, Twitter } from "react-feather";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Slider from "./components/Slider/Slider";
import SliderOne from "./components/Slider/SliderOne";

function App() {
  return (
    <div>
      <div
        className="bg-cover bg-top w-[100vw] h-[100vh] text-white relative"
        style={{ backgroundImage: "url(/photos/bg1.png)" }}
      >
        <div className="absolute bottom-16 w-full text-center p-[20px]">
          <form action="" className="flex justify-center items-bottom">
            <div className="w-[180px] text-start">
              <label htmlFor="CHECK-IN" className="text-[12px] font-[600]">
                CHECK-IN <br />
              </label>
              <input
                type="date"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                }}
                className="w-full h-[60px] border p-1"
              />
            </div>
            <div className="w-[180px] text-start">
              <label htmlFor="CHECK-IN" className="text-[12px] font-[600]">
                CHECK-OUT <br />
              </label>
              <input
                type="date"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                }}
                className="w-full h-[60px]  bg-transparent border p-1"
              />
            </div>
            <div className="w-[180px] text-start">
              <label htmlFor="CHECK-IN" className="text-[12px] font-[600]">
                ADULTS <br />
              </label>
              <input
                type="date"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                }}
                className="w-full h-[60px]  bg-transparent border p-1"
              />
            </div>
            <div className="w-[180px] text-start">
              <label htmlFor="CHECK-IN" className="text-[12px] font-[600]">
                CHILDREN <br />
              </label>
              <input
                type="date"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                }}
                className="w-full h-[60px]  bg-transparent border p-1"
              />
            </div>
            <div className="w-[180px] text-start">
              <label htmlFor="CHECK-IN" className="text-[12px] font-[600]">
                PROMO CODE <br />
              </label>
              <input
                type="date"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                }}
                className="w-full h-[60px]  bg-transparent border p-1"
              />
            </div>
            <button
              type="button"
              style={{
                background: "#3A7289",
                width: "190px",
                height: "60px",
                fontSize: "18px",
              }}
              className="text-white md:ml-1 mt-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book Now
            </button>
          </form>
        </div>

        <div className="flex flex-col absolute top-[50%] translate-y-[-50%]">
          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <img src="/photos/facebook.png" alt="" />
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <img src="/photos/socials.png" alt="" />
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <img src="/photos/twitter.png" alt="" />
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <img src="/photos/telegram.png" alt="" />
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <img src="/photos/viber.png" alt="" />
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <img src="/photos/whatsapp.png" alt="" />
          </button>
        </div>
      </div>

      <div className="my-[72px] max-w-[1135px] mx-auto">
        <h1 className="text-5xl text-center font-[400] leading-[70px]">
          EXPERIENCE HOLLY HOTEL
        </h1>
        <p className="text-[18px] mb-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <h1 className="text-2xl font-[700] leading-[35px]">
            Stay in Comfort
          </h1>
          <p className="text-[18px] mb-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{" "}
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-[700] leading-[35px]">Stay Connected</h1>
          <p className="text-[18px] mb-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-[700] leading-[35px]">
            Award-winning Stays
          </h1>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>

      <div>
        <SliderOne />
      </div>

      <div className="my-[72px] max-w-[1135px]  mx-auto ">
        <h1 className="text-5xl text-center font-[300] leading-[70px] mb-[32px]">
          DISCOVER OUR HOTEL
        </h1>
        <div className=" flex gap-[13px]">
          <div className="col-6  w-full">
            <img
              className="h-[545px] object-cover"
              src="/photos/bg1.png"
              alt=""
            />
          </div>
          <div className="col-6  w-full flex flex-col gap-[14px]">
            <img
              className="max-h-[265px] w-full object-cover"
              src="/photos/bg1.png"
              alt=""
            />
            <img
              className="max-h-[265px] w-full object-cover"
              src="/photos/bg1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <Slider />
      </div>
    </div>
  );
}

export default App;
