"use client";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { AiOutlineClose } from "react-icons/ai";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface BookModalProps {
  handleHideModal: () => void;
}

const BookModal = ({ handleHideModal }: BookModalProps) => {
  const currencyFormatter = require("currency-formatter");
  const [dateRange, setDateRange] = useState([
    new Date(),
    new Date().setDate(new Date().getDate() + 7),
  ]);
  const selectionRange = {
    startDate: dateRange[0],
    endDate: dateRange[1],
    key: "selection",
  };

  const calDaysDiff = () => {
    const startDate = dateRange[0];
    const endDate = dateRange[1];

    if (startDate && endDate) {
      const result = Math.ceil(
        new Date().getTime() -
          new Date(startDate).getTime() / (1000 * 60 * 60 * 24)
      );
      return result;
    }
  };

  return (
    <div className="fixed z-30 backdrop-blur top-0 left-0 right-0 min-h-full shadow-lg">
      <div className="bg-slate-50 shadow-xl lg:p-4 lg:w-1/4 w-10/12 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 b-8">
        <div className="p-4 border-b border-slate-500 flex items-center justify-between">
          <h3 className="capitalize font-semibold lg:text-2xl text-xl">
            Book your hotel
          </h3>
          <button onClick={handleHideModal} className="text-red-600">
            <AiOutlineClose className="cursor-pointer" size={20} />
          </button>
        </div>
        <div className="p-4 flex items-center justify-between text-slate-700 ">
          <h2 className="font-semibold lg:text-xl text-lg">Arabian Paradise</h2>
          <span>
            {currencyFormatter.format(325.5, { locale: "en-US" })}/night
          </span>
        </div>
        <div>
          {/* <DateRangePicker
            // ranges={[selectionRange]}
            minDate={new Date()}
            // disabledDates={}
            onChange={({ selectionRange }: any) => {
              setDateRange([selectionRange.startDate, selectionRange.endDate]);
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BookModal;
