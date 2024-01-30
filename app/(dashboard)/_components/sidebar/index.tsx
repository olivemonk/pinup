import List from "./list";
import NewButton from "./new-button";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-900 h-full w-[60px] p-3 flex flex-col gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
