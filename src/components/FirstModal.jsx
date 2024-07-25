import React from "react";
const FirstModal = ({ show, onClose, onContinue }) => {
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
                onClick={() => onContinue(person)}
                className="cursor-pointer space-y-2"
              >
                <div
                  className="text-center space-y-1 flex flex-col justify-center items-center"
                  key={index}
                >
                  <img src={person.img} alt="" className="w-12 rounded-full" />
                  <p>{person.name}</p>
                  <p>{person.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstModal;
