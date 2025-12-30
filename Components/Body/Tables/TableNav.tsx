type TableNavType = {
  heading: string;
};

import TableNavZap from "./TableNavZap";
function TableNav({ heading }: TableNavType) {
  return (
    <>
      <div className="w-full min-h-[48px] flex text-neutral-300 whitespace-nowrap border-r border-b border-gray-700/40 bg-neutral-800/40 flex-row w-full gap-[12px] min-h-[48px] justify-end items-center !pr-[12px] !pl-[4px] lg:!pl-[12px] xl:!pl-[12px] ">
        <span className="text-[1.05rem] font-medium text-white">{heading}</span>

        <TableNavZap />
      </div>
    </>
  );
}

export default TableNav;
