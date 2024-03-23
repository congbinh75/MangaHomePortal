import {
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  titles: Array<{
    name: string;
    author: string;
    description: string;
    url: string;
  }>;
}

const Carousel = (props: Props) => {
  const [wrapperDivWidth, setWrapperDivWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titlesPerSlide, setTitlesPerSlide] = useState(1);
  const [lastSlideLength, setLastSlideLength] = useState(0);
  const [carouselSlideStyle, setCarouselSlideStyle] = useState<{
    [fieldName: string]: string;
  }>({});
  const [carouselLastSlideStyle, setCarouselLastSlideStyle] = useState<{
    [fieldName: string]: string;
  }>({});
  const [slideButtons, setSlideButtons] = useState<JSX.Element[]>([]);

  const wrapperDivRef = useRef<HTMLHeadingElement>(null);

  //TailwindCSS can't process dynamically generated classes so inline style css has to be manually written for sliding animation
  //https://tailwindcss.com/docs/content-configuration#dynamic-class-names

  //Each cover of titles has fixed width so there'll be cover that is partly displayed at the end of the slide
  //Calculate the numbers of covers that's fully displayed and translate the total width of those covers
  //For the last slide, the amount of translation will be what left of the entire carousel after the total numbers of possible full length slide 
  //plus the translation amount of last full length slide
  useEffect(() => {
    if (!wrapperDivRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      let wrapperWidth = wrapperDivRef.current
        ? wrapperDivRef.current.offsetWidth
        : 0;
      let titlesInSlide = Math.floor(wrapperWidth / 240);
      let numberOfFullLengthSlides = Math.floor(props.titles.length / titlesInSlide);  
      setWrapperDivWidth(wrapperWidth);
      setTitlesPerSlide(titlesInSlide);
      setLastSlideLength(
        (numberOfFullLengthSlides - 1) * titlesInSlide * 240  + 
        (props.titles.length * 240 - numberOfFullLengthSlides * titlesInSlide * 240) - (wrapperWidth - titlesInSlide * 240) - 16
      );
    });
    resizeObserver.observe(wrapperDivRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  useEffect(() => {
    if (titlesPerSlide === 0 ) return;
    let buttons : JSX.Element[] = [];
    for (
      let index = 0;
      index <= Math.floor(props.titles.length / titlesPerSlide);
      index++
    ) {
      buttons.push(
        <button
          key={index}
          className={
            "w-5 h-5 mr-2 rounded transform shadow dark:shadow-slate-300 " +
            (index === currentIndex
              ? "bg-teal-600"
              : "bg-slate-50 dark:bg-slate-950")
          }
          onClick={() => setCurrentIndex(index)}
        />
      );
    }
    setSlideButtons(buttons);
  }, [titlesPerSlide, currentIndex]);

  useEffect(() => {
    setCarouselSlideStyle({
      translate: -(currentIndex * Math.floor(wrapperDivWidth / 240) * 240) + "px",
      transition: "0.3s"
    });
    setCarouselLastSlideStyle({
       translate: -lastSlideLength + "px",
       transition: "0.3s"
    });
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(() =>
      currentIndex >= Math.floor(props.titles.length / titlesPerSlide)
        ? 0
        : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(() => (currentIndex <= 0 ? Math.floor(props.titles.length / titlesPerSlide) : currentIndex - 1));
  };

  return (
    <div>
      <div className="overflow-hidden">
        <div
          ref={wrapperDivRef}
          className="flex flex-row flex-nowrap mb-5"
          style={
            currentIndex >= Math.floor(props.titles.length / titlesPerSlide)
              ? carouselLastSlideStyle
              : carouselSlideStyle
          }
        >
          {props.titles.map((title, index) => (
            <div key={index} className="flex-none w-56 mr-4">
              <a href="#">
                <img
                  className="w-56 h-80 mb-2 object-cover object-center overflow-hidden"
                  src={title.url}
                  alt={`Slide ${index + 1}`}
                />
              </a>
              <p className="line-clamp-2 min-h-4">{title.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex flex-row">
        <div className="grow flex flex-row my-auto">{slideButtons}</div>
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

export default Carousel;
