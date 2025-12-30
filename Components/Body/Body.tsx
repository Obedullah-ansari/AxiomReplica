import MidNav from "./MidNav/MidNav";
import Table from "./Tables/Table";
import ResponsiveTable from "./Tables/Responsive/ResponsiveTable";
function Body() {
  const array = ["New Pairs", "Final Stretch", "Migrated"];
  
  return (
    <>
      <div className="w-full h-[84vh] max-sm:h-[87vh] flex-1 flex flex-col !gap-[16px] !py-[24px] !px-[16px] lg:!px-[24px] max-sm:!px-[8px] max-sm:!py-0 overflow-hidden">
        <div className="max-sm:hidden h-[32px] flex flex-row justify-start items-center">
          <MidNav />
        </div>

        <div className="h-full overflow-y-auto  w-full hidden lg:flex flex-1  border-gray-700/50 rounded-sm">
          {array.map((item, index) => (
            <div
              key={index}
              className="w-full overflow-y-auto  h-[calc((100% - 16px*2)/3)]  "
            >
              <Table heading={item} category={item} />
            </div>
          ))}
        </div>
        <div className="h-full lg:hidden w-full max-sm:flex flex-1 max-sm:border-none  border border-gray-700/50 rounded-sm">
          <ResponsiveTable />
        </div>
      </div>
    </>
  );
}

export default Body;
