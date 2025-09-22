export const getDatesInRange = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const dateMilliSeconds = new Date(start.getTime());
  const dates: number[] = [];

  while (dateMilliSeconds <= end) {
    dates.push(new Date(dateMilliSeconds).getTime());
    dateMilliSeconds.setDate(dateMilliSeconds.getDate() + 1);

    return dates;
    //5th feb + 1 6th feb
    //6th feb , 7th of feb
    //10 february
  }
};
