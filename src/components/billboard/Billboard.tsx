import { useState } from "react";
import { Listbox } from "@headlessui/react";

interface Props {
  titles: Array<{
    name: string;
    author: string;
    description: string;
    url: string;
  }>;
}

const popularDurations = [
  { id: 0, name: "Week" },
  { id: 1, name: "Month" },
  { id: 2, name: "Year" },
  { id: 3, name: "All time" },
]

const Billboard = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popularDuration, setPopularDuration] = useState(popularDurations[0]);

  const nextSlide = () => {
    setCurrentIndex(() =>
      currentIndex === props.titles.length - 1 ? 0 : currentIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(() =>
      currentIndex === 0 ? props.titles.length - 1 : currentIndex - 1
    )
  }

  setInterval(nextSlide, 5000)

  return (
    <div className="relative h-144 flex flex-col flex-wrap overflow-hidden">
      {props.titles.map((title, index) => (
        <div
          key={index}
          className={`absolute h-full max-w-full flex-1 basis-full transform transition-transform duration-300 ${
            index === currentIndex ? "-translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            className="absolute h-full w-full blur object-cover object-center -z-10"
            src={title.url}
            alt={`Slide ${index + 1}`}
          />
          <div className="flex flex-row h-full p-10 pb-16 backdrop-blur-lg bg-white/40 dark:bg-black/40">
            <img
              className="flex-none object-cover h-96"
              src={title.url}
              alt={`Image ${index + 1}`}
            />
            <div className="flex flex-col flex-1 ml-5">
              <p className="text-5xl mb-3">{title.name}</p>
              <p className="text-lg italic mb-20">{title.author}</p>
              <p>{title.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 w-full px-10 flex flex-row">
        <div className="flex flex-row my-auto">
          {props.titles.map((_title, index) => (
            <button
              className={
                "w-5 h-5 mr-2 rounded transform shadow dark:shadow-slate-300 " +
                (index === currentIndex
                  ? "bg-teal-600"
                  : "bg-slate-50 dark:bg-slate-950")
              }
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <div className="flex flex-row ml-auto">
          <div className="w-24">
            <Listbox value={popularDuration} onChange={setPopularDuration}>
              <div className="relative">
                <Listbox.Button className="relative w-full flex flex-row rounded p-2 text-left shadow text-black bg-slate-50 dark:bg-slate-950 dark:text-white dark:shadow-slate-300">
                  <span className="flex flex-1">{popularDuration.name}</span>
                  <div className="my-auto">
                    <i className="fa-solid fa-caret-up" />
                  </div>
                </Listbox.Button>
                <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-md py-2 shadow text-black bg-slate-50 dark:bg-slate-950 dark:text-white dark:shadow-slate-300 -translate-y-[calc(100%+50px)]">
                  {popularDurations.map((duration) => (
                    <div className="px-2 py-1 cursor-pointer">
                      <Listbox.Option key={duration.id} value={duration}>
                        <span>{duration.name}</span>
                      </Listbox.Option>
                    </div>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
        </div>
        <div className="flex flex-row ml-10">
          <button
            className="px-4 py-2 mr-2 rounded transform shadow bg-slate-50 text-black dark:bg-slate-950 dark:text-white dark:shadow-slate-300"
            onClick={prevSlide}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button
            className="px-4 py-2 rounded transform shadow bg-slate-50 text-black dark:bg-slate-950 dark:text-white dark:shadow-slate-300"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
