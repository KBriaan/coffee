import Img2 from "C:/Users/HP/Documents/coffee1/my-coffee/src/assets/website/coffee2.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Expresso",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa impedit praesentium modi commodi molestiae accusantium? In suscipit quos non?",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa impedit praesentium modi commodi molestiae accusantium? In suscipit quos non?",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img2,
    name: "Cuppuciano",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa impedit praesentium modi commodi molestiae accusantium? In suscipit quos non?",
    aosDelay: "100",
  },
];

function Services() {
  return (
    <>
    <span id="services"></span>
    <div className="py-10">
      <div className="container">
        {/* header title */}

        <div className="text-center mb-20">
          <h1 className="text-4xl font-cursive font-bold text-gray-800">
            Best coffee offers for you
          </h1>
        </div>
        {/* Service card section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((data, index) => {
            return (
              <div
                data-aos="fadeup"
                data-aos-delay={data.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
              >
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[200px] rounded-2xl block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                  />
                </div>

                {/* text content */}
                <div className="p-4">
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div className=""></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Services;
