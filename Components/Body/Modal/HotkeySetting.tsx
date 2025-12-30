import { useState } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Info, RotateCcw, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const Switch = ({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) => (
  <SwitchPrimitive.Root
    asChild
    checked={checked}
    onCheckedChange={onCheckedChange}
  >
    <div
      role="switch"
      aria-checked={checked}
      className="w-11 h-6 bg-neutral-800 rounded-full relative data-[state=checked]:bg-blue-600 transition-colors cursor-pointer"
    >
      <SwitchPrimitive.Thumb className="block w-5 h-5 bg-white rounded-full shadow transition-transform data-[state=checked]:translate-x-5" />
    </div>
  </SwitchPrimitive.Root>
);

type ModifierKey = "Shift" | "Ctrl" | "Option" | "⌘";

interface ModifierRow {
  label: string;
  selected: ModifierKey;
}

const HotkeySettings = () => {
  const [hotkeysEnabled, setHotkeysEnabled] = useState(true);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [pauseKey] = useState("Space");

  const [modifierRows, setModifierRows] = useState<ModifierRow[]>([
    { label: "New Pairs", selected: "Shift" },
    { label: "Final Stretch", selected: "Ctrl" },
    { label: "Migrated", selected: "Option" },
  ]);

  const modifierKeys: ModifierKey[] = ["Shift", "Ctrl", "Option", "⌘"];

  const handleModifierChange = (rowIndex: number, key: ModifierKey) => {
    setModifierRows((prev) =>
      prev.map((row, i) => (i === rowIndex ? { ...row, selected: key } : row))
    );
  };

  const handleReset = () => {
    setHotkeysEnabled(true);
    setPauseOnHover(true);
    setModifierRows([
      { label: "New Pairs", selected: "Shift" },
      { label: "Final Stretch", selected: "Ctrl" },
      { label: "Migrated", selected: "Option" },
    ]);
  };

  return (
    <div className="bg-transparent h-[85vh]  flex items-center justify-center ">
      <div className="w-full h-full max-w-md bg-neutral-900 rounded-xl border border-neutral-700 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between !p-5 border-b border-neutral-700">
          <h2 className="text-white font-semibold text-[0.95rem]">
            Pulse Hotkeys
          </h2>
          <Dialog.Close asChild>
            <button className="text-neutral-400 hover:text-white transition-colors !p-1.5">
              <X className="w-4 h-4" />
            </button>
          </Dialog.Close>
        </div>

        {/* Toggle Section */}
        <div className="!p-5 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-[0.9rem]">Hotkeys</p>
              <p className="text-neutral-400 text-[0.8rem] !mt-1.5">
                Quick buy tokens with custom hotkeys
              </p>
            </div>
            <Switch
              checked={hotkeysEnabled}
              onCheckedChange={setHotkeysEnabled}
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-white text-[0.9rem]">Pause live feed on Hover</p>
            <Switch checked={pauseOnHover} onCheckedChange={setPauseOnHover} />
          </div>

          {/* Info Banner */}
          <div className="bg-neutral-800 !m-1 rounded-lg !p-3 flex items-start !gap-3.5">
            <Info className="w-4 h-4 text-neutral-400 flex-shrink-0 !mt-0.5" />
            <p className="text-neutral-400 text-[0.85rem]">
              Combine the Pause + Modifier + Row keys to buy tokens
            </p>
          </div>

          {/* Pause Key */}
          <div className="flex items-center  !m-1 justify-between">
            <p className="text-neutral-400 text-[0.9rem]">Pause Key</p>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg !px-5 !py-2.5 text-white text-[0.9rem]">
              {pauseKey}
            </div>
          </div>
        </div>

        {/* Table Modifier Keys */}
        <div className="!mx-5 !mb-5 bg-neutral-700 rounded-xl !p-2 border border-neutral-600">
          <h3 className="text-white font-semibold text-[0.9rem] !mb-5">
            Table Modifier Keys
          </h3>
          <div className="space-y-5">
            {modifierRows.map((row, rowIndex) => (
              <div
                key={row.label}
                className="flex items-center justify-between"
              >
                <p className="text-white text-[0.9rem]">{row.label}</p>
                <div className="flex !gap-2.5">
                  {modifierKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleModifierChange(rowIndex, key)}
                      className={`!px-2 !py-1 rounded-lg border text-[0.85rem] transition-all ${
                        row.selected === key
                          ? "border-blue-500 text-blue-400 bg-blue-500/10"
                          : "border-neutral-600 text-neutral-300 hover:border-neutral-500"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row Keys */}
        <div className="!mx-5 !mb-5 bg-neutral-700 rounded-xl !p-1 border border-neutral-600">
          <h3 className="text-white font-semibold text-[0.9rem] !mb-2">
            Row Keys
          </h3>
          <div className="space-y-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center justify-between">
                <p className="text-white text-[0.9rem]">Row {num}</p>
                <div className="bg-neutral-800 border border-neutral-600 rounded-lg !px-7 !py-2.5 text-white text-[0.9rem] min-w-[70px] text-center">
                  {num}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between !p-2 border-t border-neutral-700">
          <button
            onClick={handleReset}
            className="flex items-center !gap-1 text-neutral-400 hover:text-white transition-colors text-[0.9rem]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
          <button className="bg-blue-600 text-white !px-4 !py-2 rounded-full font-medium text-[0.7rem] hover:bg-blue-700 transition-colors">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotkeySettings;
