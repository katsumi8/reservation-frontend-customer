import { useRouter } from "next/router";
import { tableData } from "@/components/Seatmap/const";
import { useSelector } from "@/contexts/store";

export const useRouting = () => {
  const router = useRouter();
  const tableIds = useSelector((state) => state.tableSelector.table);
  const customerNumber = useSelector((state) => state.customers.customers);

  const routingHandler = (path: string) => {
    if (path === "/ProfileInput") {
      if (tableIds.length === 0 && customerNumber !== "more") {
        alert("Please select a table");
        return;
      } else if (Number(customerNumber) === 3 || Number(customerNumber) === 4) {
        if (tableIds.length === 1) {
          const selectedCapability = tableData.find(
            (table) => table.id === tableIds[0]
          )!.capability;
          if (selectedCapability < 4) {
            alert("Please select another table for 2");
            return;
          }
        }
      }
    }
    if (path === "/Seatmap") {
      if (customerNumber === "more") {
        router.push({ pathname: "/Reservation" });
      } else {
        router.push({ pathname: path });
      }
    }
    router.push({ pathname: path });
  };

  return [{ routingHandler }];
};
