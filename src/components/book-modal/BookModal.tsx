"use client";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { AiOutlineClose } from "react-icons/ai";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "currency-formatter";

interface BookModalProps {
  handleHideModal: () => void;
}

const BookModal = ({ handleHideModal }: BookModalProps) => {
  const [dateRange, setDateRange] = useState([
    new Date(), //date of today
    new Date(new Date().setDate(new Date().getDate() + 7)), // date of after 7 days
  ]);
  //new Date().getDate(): number of day from month +7
  //new Date().getDate() + 7):add 7 days to  first number of day from month
  //new Date().setDate selecting  a new day on date and return with millisecond
  // new Date change all process again to new date

  const selectionRange = {
    startDate: dateRange[0],
    endDate: dateRange[1],
    key: "selection",
  };

  const calDaysDiff = (): number => {
    const startDate = dateRange[0];
    const endDate = dateRange[1];

    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return dayDiff;
    }
    return 0;
  };
  return (
    <div className="fixed z-40 backdrop-blur top-0 left-0 right-0 min-h-full shadow-lg">
      <div className="bg-slate-50 shadow-xl lg:p-4 lg:w-1/2 w-10/12 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 b-8">
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
          <span>{format(325.5, { locale: "en-US" })}/night</span>
        </div>
        <form className="p-4 flex flex-col gap-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            // disabledDates={}
            onChange={(ranges: any) => {
              const { selection } = ranges;
              setDateRange([selection.startDate, selection.endDate]);
            }}
          />
        </form>
        <div className="p-4 mt-4 border-t border-slate-500 flex items-end justify-between">
          <div className="text-slate-700 flex items-center gap-2">
            <span>{format(300, { locale: "en-US" })}/night</span> <span>X</span>
            <span>{calDaysDiff()}</span>
          </div>
          <div>
            <p>
              total Price : {format(300 * calDaysDiff(), { locale: "en-US" })}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-3">
          <button className="w-6/12 mx-auto cursor-pointer rounded-lg bg-red-600 text-white px-4 py-3 transition-all duration-300 hover:bg-red-500">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
