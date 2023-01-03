export const useReservationInfoTable = () => {
  const dateCreator = (date: Date): string => {
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();

    if (month.length === 1 && day.length === 1) {
      return `${year}/0${month}/0${day}`;
    } else if (month.length === 1 && day.length !== 1) {
      return `${year}/0${month}/${day}`;
    } else if (day.length === 1) {
      return `${year}/${month}/0${day}`;
    } else return `${year}/${month}/${day}`;
  };

  const enteredGuestFix = (
    customers: string,
    moreCustomers: string
  ): number => {
    if (customers !== "more") return Number(customers);
    return Number(moreCustomers);
  };

  return { dateCreator, enteredGuestFix };
};
