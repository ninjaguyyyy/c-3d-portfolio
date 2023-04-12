export default function HeroInfo() {
  return (
    <div
      className={`absolute inset-0 top-[50px] sm:top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full violet-bg" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      <div>
        <h1
          className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
          Hi, I am <span className="text-violet">Chi Nguyen</span>
        </h1>
        <p
          className={`text-gray-light font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
          I develop Web and API applications
        </p>
      </div>
    </div>
  );
}
