interface Props {
    name: string;
    icon: string;
}

function SidebarHeader(props: Props) {
    let iconClassName =  'fa-solid fa-' + props.icon

    return (
        <button className="sidebar-header">
            <i className={iconClassName} />
            {props.name}
        </button>
    )
}

export default SidebarHeader