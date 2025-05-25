import { memo, useState } from "react";

const Dashboard = ({ data }) => {
  const [timeframe, setTimeframe] = useState("weekly");

  const bgColorsAndIcons = {
    Work: {
      bg: "bg-work-orange-300",
      icon: "/icon-work.svg",
    },
    Play: {
      bg: "bg-play-blue-300",
      icon: "/icon-play.svg",
    },
    Study: {
      bg: "bg-study-pink-400",
      icon: "/icon-study.svg",
    },
    Exercise: {
      bg: "bg-exercise-green-400",
      icon: "/icon-exercise.svg",
    },
    Social: {
      bg: "bg-social-purple-700",
      icon: "/icon-social.svg",
    },
    "Self Care": {
      bg: "bg-selfCare-yellow-300",
      icon: "/icon-self-care.svg",
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
        {/* Profile Card */}
        <div className="bg-myNavy900 overflow-hidden rounded-2xl shadow-lg md:row-span-2">
          <div className="flex items-center justify-center rounded-2xl bg-indigo-500 py-12 lg:items-start lg:justify-start lg:px-8">
            <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start">
              <img
                src="/image-jeremy.png"
                alt="Jeremy Profile"
                className="h-14 w-14 rounded-full border-2 border-white object-cover"
              />
              <div>
                <p className="text-myNavy200 text-xs lg:my-2">Report for</p>
                <h1 className="text-xl/8 font-light text-gray-100 lg:w-min lg:text-3xl/8">
                  Jeremy Robson
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4 p-6 lg:flex-col">
            {["daily", "weekly", "monthly"].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`cursor-pointer text-left ${
                  timeframe === period ? "text-white" : "text-slate-400"
                } transition-colors hover:text-white`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Cards */}
        {data.map((item) => (
          <div key={item.title} className="relative">
            <div
              className={`${bgColorsAndIcons[item.title].bg} relative -z-20 -mb-12 h-20 overflow-hidden rounded-t-2xl`}
            >
              <img
                src={bgColorsAndIcons[item.title].icon}
                alt={`${item.title} icon`}
                className="absolute -top-2 right-4 bottom-12 z-20 h-12 w-12"
              />
            </div>
            <div className="bg-myNavy900 hover:bg-myNavy800 cursor-pointer rounded-2xl p-6 transition-colors shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-cardTitles font-medium text-white">
                  {item.title}
                </h2>
                <button className="cursor-pointer text-slate-400 hover:text-white">
                  <span className="sr-only">ellipsis icon</span>
                  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-row items-center justify-between md:flex-col lg:items-start">
                <h3 className="font-300 text-2xl text-white lg:text-5xl">
                  {item.timeframes[timeframe].current}hrs
                </h3>
                <p className="text-sm text-slate-400 lg:pt-1">
                  Last{" "}
                  {timeframe === "daily"
                    ? "Day"
                    : timeframe === "weekly"
                      ? "Week"
                      : "Month"}{" "}
                  - {item.timeframes[timeframe].previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Dashboard);
