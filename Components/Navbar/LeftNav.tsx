

function LeftNav() {
  const navNames = [
    "Discover",
    "Pulse",
    "Trackers",
    "Perpetuals",
    "Yield",
    "Vision",
    "Portfoilio",
    "Rewards",
  ];
  return (
    <div className="w-full max-sm:hidden overflow-x-auto overflow-y-hidden h-full flex justify-start items-center gap-[3.75px] ">
      {navNames.map((name) => (
        <div key={name}>
          <a href="#" >
            <button className="flex flex-row h-[32px] text-nowrap !px-2 xl:!px-[14px]  justify-start items-center text-[0.9rem]  hover:bg-[rgb(var(--primary-color)/0.3)] rounded-[0.3rem] hover:text-[rgb(var(--primary-color))] text-textSecondary font-medium cursor-pointer">
              {name}
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default LeftNav;
