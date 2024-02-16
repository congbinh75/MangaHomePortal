interface Props {
    name: string;
    icon?: string;
    func: Function;
    currentOption: string;
}

function getParentDivClassName(name: string, currentOption: string) {
    let divClassName = "p-0.5 my-1 rounded"
    if (currentOption === name) {
        divClassName += " bg-teal-600"
    }
    else {
        divClassName += " bg-slate-200 dark:bg-slate-900 hover:bg-teal-500"
    }
    return divClassName
}

function getIconClassName(icon?: string) {
    let iconClassName = "ml-1 mr-2"
    if (icon) {
        iconClassName += " fa-solid w-5 fa-" + icon
    }
    return iconClassName
}

function SidebarOption(props: Props) {
    return (
        <div className={getParentDivClassName(props.name, props.currentOption)}>
            <button onClick={() => props.func(props.name)}>
                <i className={getIconClassName(props.icon)} />
                {props.name}
            </button>
        </div>
    )
}

export default SidebarOption