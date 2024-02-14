interface Props {
    name: string;
    func: Function;
}

function SidebarOption(props: Props) {
    return (
        <button className="sidebar-option" onClick={() => props.func(props.name)}>
            {props.name}
        </button>
    )
}

export default SidebarOption