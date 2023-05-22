import { useState, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { DarkLightContext } from "../MarketP";

function SureNot(props) {
  let [isOpen, setIsOpen] = useState(true);
  const darkLight = useContext(DarkLightContext);

  return (
    <Dialog
      className={`z-[10000] fixed top-10 ${
        darkLight.darkMode
          ? "bg-[#342c5c] text-white"
          : "bg-slate-200 text-black"
      } rounded-xl inset-x-0 ml-10 mr-10  mx-auto `}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Panel className="p-16">
        <Dialog.Title className="text-xl font-medium font-headerFont">Are you sure you want to Sign out?</Dialog.Title>

        <button className="bg-slate-400 rounded-lg px-5 py-3 mt-5 mr-5" onClick={() => props.logg2()}>Yes</button>
        <button className="bg-blue-700 rounded-lg px-5 py-3 mt-5" onClick={() => props.falseAgain(() => !props.theState)}>
          No
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export default SureNot;
