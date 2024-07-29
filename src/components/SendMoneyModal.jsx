import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDataStore } from "./Store";

const SendMoneyModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  const persons = [
    {
      id: 1,
      name: "Ayd",
      phone: "2459 2367",
      img: "/src/assets/photo.jpg",
    },
    {
      id: 2,
      name: "Mrv",
      phone: "2494 1477",
      img: "/src/assets/photo.jpg",
    },
    {
      id: 3,
      name: "Ert",
      phone: "7248 2537",
      img: "/src/assets/photo.jpg",
    },
    {
      id: 4,
      name: "Srt",
      phone: "6420 2140",
      img: "/src/assets/photo.jpg",
    },
  ];
  const handleContinue = (person) => {
    setSelectedPerson(person);
    setshowFirstModal(false);
  };
  const [selectedPerson, setSelectedPerson] = useState("");
  const [showFirstModal, setshowFirstModal] = useState(true);

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
  const hour = sendDay.getHours();
  const minute = sendDay.getMinutes();
  const time = `${hour}:${minute}`;

  const handlePayment = () => {
    const amount = totalAmount;
    if (amount > 0) {
      addSendMoney({
        amount,
        month,
        category: `${selectedPerson.name} sent Money `,
        year,
        day,
        icon: "material-symbols:attach-money",
        time,
      });
      setTotalAmount(0);
      onClose();
    }
  };
  return (
    <>
      {showFirstModal ? (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-96 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3">
              <h4 className="text-lg font-semibold text-black">Send Money</h4>
              <button onClick={onClose} className="text-black close">
                &times;
              </button>
            </div>
            <div className="text-black text-xs space-y-4">
              <div>
                <p className="font-semibold">Recent Transactions</p>
              </div>
              <div className="flex space-x-5 justify-between">
                {persons.map((person, index) => (
                  <div
                    key={index}
                    onClick={() => handleContinue(person)}
                    className="cursor-pointer space-y-2"
                  >
                    <div className="text-center space-y-1 flex flex-col justify-center items-center">
                      <img
                        src={person.img}
                        alt=""
                        className="w-12 rounded-full"
                      />
                      <p>{person.name}</p>
                      <p>{person.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                    <img
                      className="w-12 rounded-full"
                      src={selectedPerson.img}
                      alt=""
                    />
                  </div>
                  <div className="col-span-4 ml-5 text-left">
                    <p className="font-semibold">{selectedPerson.name}</p>
                    <p className="text-gray-400">{selectedPerson.phone}</p>
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
      )}
    </>
  );
};

export default SendMoneyModal;
