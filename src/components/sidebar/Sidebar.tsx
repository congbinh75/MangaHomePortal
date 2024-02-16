import { useState } from "react"
import SidebarOption from "./SidebarOption";

const Sidebar = () =>  {
    const [currentOption, setCurrentOption] = useState(""); 

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
        <div className="w-56 p-5 min-h-screen bg-slate-200 dark:bg-slate-900 shadow overflow-y-auto max-h-screen">
            <div className="w-full flex flex-row-reverse">
                <button>
                    <i className="fa-solid fa-x" />
                </button>
            </div>
            <div className="mb-2 p-3 pl-1 w-full">
                <img src="/src/assets/img/logo_darkbg.png"/>
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
    )
}

export default Sidebar