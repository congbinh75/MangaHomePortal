interface Props {
    isDarkMode: boolean;
    setDarkMode: Function;
}

const SidebarSubMenu = (props: Props) => {
    const setDarkMode = (isDarkMode: boolean) => {
        props.setDarkMode(isDarkMode)
    }

    return (
        <div className="absolute -right-16 bottom-16 p-2 w-48 rounded bg-slate-300 dark:bg-slate-800">
            <div className="flex flex-row">
                <div className="flex flex-1">
                    <span className="inline-block align-middle my-auto">Dark mode</span>
                </div>
                <div className="flex flex-none items-center justify-center">
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" className="sr-only" checked={props.isDarkMode} onChange={e => setDarkMode(e.target.checked)}/>
                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SidebarSubMenu