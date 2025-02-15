import VignetteScreen from "./images/VignetteScreen";
import BgImage from "./images/BgImage";
import JourneyImage from "./images/JourneyImage";
import SearchBar from "./tools/SearchBar";

const LandingPage = (): JSX.Element => {
  return (
    <section className="relative h-screen w-full">
      <BgImage src="/images/leaves-bg.jpg" />
      <VignetteScreen />
      <div className="containerSpacing relative flex h-full w-full text-header sm:flex-wrap lg:flex-nowrap">
        <div className="flex flex-col justify-evenly pt-16 pl-16 lg:w-7/12 lg:justify-center 2xl:w-1/2">
          <h1 className="flex flex-col self-center text-center text-4xl font-bold uppercase tracking-wider sm:self-start sm:text-start sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-white">Live your</span>
            <span className="text-secondary">adventure</span>
          </h1>
          <JourneyImage isMobile={true} />
          <p className="flex w-full text-base leading-relaxed content-center items-center sm:w-1/2 sm:text-sm md:flex-nowrap md:text-base lg:py-4 xl:text-lg">
            Unleash your European adventure today and immerse yourself in the
            beauty of its diverse destinations.
          </p>
          <SearchBar />
        </div>
        <JourneyImage isMobile={false} />
      </div>
    </section>
  );
};

export default LandingPage;
