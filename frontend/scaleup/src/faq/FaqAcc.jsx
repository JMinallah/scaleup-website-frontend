import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    id: "item-1",
    question: "Is this a paid opportunity?",
    answer:
      "No, it’s not paid. But there’s a possibility of paid employment within three months of volunteering with us.",
  },
  {
    id: "item-2",
    question: "Is it a remote job?",
    answer: "Yes, it’s a remote-friendly role. You can work from anywhere.",
  },
  {
    id: "item-3",
    question: "How long do we respond to applications?",
    answer: "We review all requests within 24 hours of receiving them.",
  },
  {
    id: "item-4",
    question: "Can I volunteer short-term?",
    answer: "The maximum is 3 months intensive program on real work.",
  },
  {
    id: "item-5",
    question: "Do I get a certificate?",
    answer: "Yes, we award you with a certificate based on your performance.",
  },
];

export default function SimpleAccordion() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-lg md:max-w-2xl mx-auto space-y-2 md:space-y-4 md:px-3">
      {items.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div
            key={item.id}
            className="border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium text-xl md:text-2xl flex justify-between items-center"
            >
              {item.question}
              <ChevronDown
                className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                size={20}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-4 py-3 bg-primary text-base md:text-xl text-gray-700">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
