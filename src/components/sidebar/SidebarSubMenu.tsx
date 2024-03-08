import { Switch } from "@headlessui/react";
interface Props {
  isDarkMode: boolean;
  setDarkMode: Function;
}

const SidebarSubMenu = (props: Props) => {
  const setDarkMode = (isDarkMode: boolean) => {
    props.setDarkMode(isDarkMode);
  };

  return (
    <div className="absolute -right-16 bottom-16 p-2 w-48 rounded bg-slate-300 dark:bg-slate-800">
      <div className="flex flex-row">
        <div className="flex flex-1">
          <span className="inline-block align-middle my-auto">Dark mode</span>
        </div>
        <Switch
          checked={props.isDarkMode}
          onChange={setDarkMode}
          className={`${
            props.isDarkMode ? "bg-teal-600" : "bg-slate-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              props.isDarkMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default SidebarSubMenu;
