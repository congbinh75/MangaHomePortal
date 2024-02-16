interface Props {
    name: string;
    icon?: string;
    func: Function;
    currentOption: string;
}

const getParentDivClassName = (name: string, currentOption: string) => {
    let divClassName = "w-full p-0.5 my-1 rounded text-left"
    if (currentOption === name) {
        divClassName += " bg-teal-600"
    }
    else {
        divClassName += " bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800"
    }
    return divClassName
}

const getIconClassName = (icon?: string) => {
    let iconClassName = "ml-1 mr-2"
    if (icon) {
        iconClassName += " fa-solid w-5 fa-" + icon
    }
    return iconClassName
}

const SidebarOption = (props: Props) => {
    return (
        <button className={getParentDivClassName(props.name, props.currentOption)} onClick={() => props.func(props.name)}>
            <i className={getIconClassName(props.icon)} />
            {props.name}
        </button>
    )
}

export default SidebarOption