import Home from "../home/Home";

interface Props {
  isSidebarVisible: boolean;
  setIsSidebarVisible: Function;
}

const Main = (props: Props) => {
  return (
    <div
      className={`w-full p-5 flex flex-col ease-in-out duration-300 overflow-hidden ${
        props.isSidebarVisible ? "lg:translate-x-0 " : "lg:-translate-x-28"
      }`}
    >
      <div className="w-full flex mb-5">
        <button onClick={() => props.setIsSidebarVisible(true)}>
          <i className="flex fa-solid fa-bars" />
        </button>
      </div>
      <Home/>
    </div>
  );
};

export default Main;
