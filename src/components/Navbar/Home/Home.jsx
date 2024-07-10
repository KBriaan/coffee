import HeroImg from 'C:/Users/HP/Documents/coffee1/my-coffee/src/assets/website/coffee2.png'
function Home() {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div>
            <h1 className="text-5xl sm:*:text-6xl lg:text-7xl font-bold">
              
              We serve the richest <span className="text-primary">
                honey
              </span>
               in the city
            </h1>
            <div>
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">Honey and Sweetness</button>
            </div>
          </div>
          {/* image content section */}
          <div>
            <img src={HeroImg} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
