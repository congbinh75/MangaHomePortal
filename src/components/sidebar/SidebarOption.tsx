interface Props {
    name: string;
    icon?: string;
    func: Function;
    currentOption: string;
}

const SidebarOption = (props: Props) => {
    return (
        <button 
            className={"w-full p-0.5 my-1 rounded text-left " + (props.currentOption === props.name ? "bg-teal-600" 
                : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800")} 
            onClick={() => props.func(props.name)}
        >
            <i className={"ml-1 mr-2" + (props.icon ? " fa-solid w-5 fa-" + props.icon : "")} />
            {props.name}
        </button>
    )
}

export default SidebarOption