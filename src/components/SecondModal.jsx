import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDataStore } from "./Store";
const SecondModal = ({ show, onClose, person }) => {
  if (!show) {
    return null;
  }

  const { addSendMoney, months } = useDataStore((state) => ({
    addSendMoney: state.addSendMoney,
    months: state.months,
  }));

  const [totalAmount, setTotalAmount] = useState(0);
  const [Note, setNote] = useState("");
  const [sendDay, setSendDay] = useState(new Date());
  const month = months[sendDay.getMonth()];
  const year = sendDay.getFullYear();
  const day = sendDay.getDate();

  const handlePayment = () => {
    const amount = totalAmount;
    if (amount > 0) {
      addSendMoney({
        amount,
        month,
        category: `${person.name} sent Money `,
        year,
        day,
        icon: "attach-money",
      });
      setTotalAmount(0);
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-96 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-3">
          <h4 className="font-semibold text-black">Send Money</h4>
          <button onClick={onClose} className="text-black close">
            &times;
          </button>
        </div>
        <div className="text-black text-sm space-y-6">
          <div className="space-y-4">
            <h5 className="mt-5">Transfer</h5>
            <div className="grid grid-cols-6 row-span-1 items-center text-center">
              <div className="col-span-1 flex items-center justify-center">
                <div className="bg-customLineColor rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon
                    className="text-2xl"
                    icon="teenyicons:box-solid"
                    style={{ color: "#FFFFFF" }}
                  />
                </div>
              </div>
              <div className="col-span-4 ml-5 text-left">
                <p className="font-semibold">Main Account</p>
                <p className="text-gray-400">7288 2927</p>
              </div>
              <div className="col-span-1 flex justify-center">
                <Icon icon="fe:arrow-down" />
              </div>
            </div>
            <div className="grid grid-cols-6 row-span-1 items-center text-center">
              <div className="col-span-1 flex items-center justify-center">
                <img className="w-12 rounded-full" src={person.img} alt="" />
              </div>
              <div className="col-span-4 ml-5 text-left">
                <p className="font-semibold">{person.name}</p>
                <p className="text-gray-400">{person.phone}</p>
              </div>
              <div className="col-span-1 flex justify-center items-center text-customLineColor">
                <Icon className="mr-1" icon="iconoir:edit-pencil" /> Edit
              </div>
            </div>
          </div>
          <div className="text-xs space-y-3">
            <h5>Total Amount</h5>
            <input
              type="number"
              className="w-full p-2"
              placeholder="$ Nominal Transfer"
              onChange={(e) => setTotalAmount(e.target.value)}
            />
            <h5>Note (Optional)</h5>
            <input
              type="text"
              className="w-full p-2"
              placeholder="Enter Note"
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handlePayment}
            className="w-full bg-customLineColor rounded-lg text-white px-2 py-2 mt-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondModal;
