import BannerImg from "C:/Users/HP/Documents/coffee1/my-coffee/src/assets/website/coffee-white.png";
import BgTexture from "C:/Users/HP/Documents/coffee1/my-coffee/src/assets/website/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundPosition: "center",
  backgroundColor: "#270c03",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="about"></span>

      <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* image section */}
            <div>
              {" "}
              <img
                src={BannerImg}
                className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_-12px_rgba(0,0,0,1)"
              />
            </div>
            {/* text content */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive">
                Premium Blen Coffee
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                minus tempora delectus, fugiat repellat adipisci quis quisquam
                sunt eveniet ipsam!
              </p>
              <div className="grid grid-cols-2 gap-6 ">
                <div className="space-y-5">
                  <div className='flex items-center gap-3'>
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Premium Coffee</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                    <span>Premium Coffee</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Premium Coffee</span>
                  </div>
                </div>
                <div>
                    <div className="border-l-4 border-primary space-y-3 px-7">
                        <h1 className="text-2xl text-gray-500 font-semibold" >Tea Lovers</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente explicabo dolorem quisquam labore et suscipit perferendis, iure dicta culpa quibusdam?</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
