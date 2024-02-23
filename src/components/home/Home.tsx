interface Props {
    isSidebarVisible : boolean;
    setIsSidebarVisible : Function;
}

function Home(props: Props) {
    return (
        <div className={`w-full p-5 flex flex-row ease-in-out duration-300 ${
            props.isSidebarVisible ? "translate-x-0 " : "-translate-x-32" }`} >
            <div className='w-full'>
              <button onClick={() => props.setIsSidebarVisible(true)}>
                <i className="fa-solid fa-bars" />
              </button>
            </div>
        </div>
    )
}

export default Home