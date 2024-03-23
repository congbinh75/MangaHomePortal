import { useEffect, useState } from "react"
import SidebarOption from "./SidebarOption";
import SidebarSubMenu from "./SidebarSubMenu";

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: Function;
    isSidebarVisible : boolean;
    setIsSidebarVisible : Function;
}

const Sidebar = (props: Props) =>  {
    const [currentOption, setCurrentOption] = useState("");
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    useEffect(() => {
        if (!props.isSidebarVisible) {
            setIsSubMenuVisible(false)
        }
      }, [props.isSidebarVisible]);

    const onOptionChosen = (name: string) => {
        if (currentOption === name)
        {
            return
        }

        switch(name){
            case 'Updates': {
                setCurrentOption('Updates');
                break;
            }
            case 'Your Lists': {
                setCurrentOption('Your Lists');
                break;
            }
            case 'History': {
                setCurrentOption('History');
                break;
            }
            case 'Advanced Search': {
                setCurrentOption('Advanced Search');
                break;
            }
            case 'Random': {
                setCurrentOption('Random');
                break;
            }
            case 'About Us': {
                setCurrentOption('About Us');
                break;
            }
            default: {
                break;
            }
        }

        setCurrentOption(name);
    }

    return (
        <div className={`lg:sticky fixed top-0 h-screen flex flex-col ease-in-out duration-300 z-10  ${
            props.isSidebarVisible ? "translate-x-0 " : "-translate-x-full" }`} >
            <div className="flex-1 w-56 p-5 bg-slate-200 dark:bg-slate-900 shadow-lg overflow-y-auto max-h-screen">
                <div className="w-full h-fit flex flex-row-reverse">
                    <button onClick={() => props.setIsSidebarVisible(false)}>
                        <i className="fa-solid fa-x" />
                    </button>
                </div>
                <div className="h-32 mb-2 p-3 pl-1 w-full">
                    <img className="nav_logo" />
                </div>
                <div className="mb-3 pb-2 w-full">
                    <div className="font-bold">
                        Library
                    </div>
                    <div className="shadow-y w-full">
                        <SidebarOption name='Updates' func={onOptionChosen} icon="bookmark" currentOption={currentOption} />
                        <SidebarOption name='Your Lists' func={onOptionChosen} icon="book" currentOption={currentOption} />
                        <SidebarOption name='History' func={onOptionChosen} icon="clock-rotate-left" currentOption={currentOption} />
                    </div>
                </div>
                <div className="mb-3 pb-2">
                    <div className="font-bold">
                        Titles
                    </div>  
                    <div className="shadow-y w-full">
                        <SidebarOption name='Advanced Search' func={onOptionChosen} icon="magnifying-glass" currentOption={currentOption} />
                        <SidebarOption name='Random' func={onOptionChosen} icon="dice" currentOption={currentOption} />
                    </div>
                </div>
                <div className="mb-3 pb-2 w-full">
                    <div className="font-bold">
                        Community
                    </div>
                    <div className="shadow-y w-full">
                        <SidebarOption name='Users' func={onOptionChosen} icon="user" currentOption={currentOption} />
                        <SidebarOption name='Groups' func={onOptionChosen} icon="user-group" currentOption={currentOption} />
                    </div>
                </div>
                <div className="mb-3 pb-2">
                    <div className="font-bold">
                        MangaHome
                    </div>
                    <div className="shadow-y w-full">
                        <SidebarOption name='About Us' func={onOptionChosen} icon="at" currentOption={currentOption} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-none h-16 max-w-56 px-5 py-1 bg-slate-200 dark:bg-slate-900 shadow-lg">
                <button className="flex flex-row flex-1 my-1 p-1 rounded hover:bg-slate-300 dark:hover:bg-slate-800">
                    <div className="flex-none m-auto">
                        <img className="object-scale-down rounded h-8 w-8" src="https://thicc-af.mywaifulist.moe/waifus/marin-kitagawa-my-dress-up-darling/ujbAwjy1SV1N2wKuuoMRgalpXqfI935tFqT1KwUK.jpg?class=thumbnail" />
                    </div>
                    <div className="flex-1 pl-1 py-2 mx-1 my-auto truncate max-w-32">
                        <h5 className="text-left truncate">congbinh</h5>
                    </div>
                </button>
                {!isSubMenuVisible ?
                <button className="flex-none p-2 mx-1 my-1 rounded hover:bg-slate-300 dark:hover:bg-slate-800" onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}>
                    <i className="fa-solid fa-ellipsis-vertical" />
                </button> :
                <button className="flex-none p-2 mx-1 my-1 rounded bg-slate-300 dark:bg-slate-800" onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}>
                <i className="fa-solid fa-ellipsis-vertical" />
                </button>}
            </div>
            {isSubMenuVisible && <SidebarSubMenu isDarkMode={props.isDarkMode} setDarkMode={props.setIsDarkMode} />}
        </div>
    )
}

export default Sidebar