import { useState } from "react"
import SidebarHeader from "./SidebarHeader"
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
                break;
            }
            case 'Your lists': {
                break;
            }
            case 'History': {
                break;
            }
            case 'Advanced search': {
                break;
            }
            case 'Random': {
                break;
            }
            case 'About us': {
                break;
            }
            default: {
                break;
            }
        }

        setCurrentOption(name);
    }

    return (
        <div className="w-64 min-h-screen p-10 bg-gray-200">
            <div className="sidebar-group">
                <SidebarHeader name='Library' icon="bookmark" />
                <SidebarOption name='Updates' func={onOptionChosen} />
                <SidebarOption name='Your lists' func={onOptionChosen} />
                <SidebarOption name='History' func={onOptionChosen} />
            </div>
            <div className="sidebar-group">
                <SidebarHeader name='Titles' icon="book" />
                <SidebarOption name='Advanced search' func={onOptionChosen} />
                <SidebarOption name='Random' func={onOptionChosen} />
            </div>
            <div className="sidebar-group">
                <SidebarHeader name='MangaHome' icon="at" />
                <SidebarOption name='About us' func={onOptionChosen} />
            </div>
        </div>
    )
}

export default Sidebar