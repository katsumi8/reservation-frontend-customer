import { useRouter } from "next/router";
import { useSelector } from "@/contexts/store";
import { useFetchTableData } from "@/utils/query/fetchTableData";

export const useRouting = () => {
  const router = useRouter();
  const tableIds = useSelector((state) => state.tableSelector.table);
  const customerNumber = useSelector((state) => state.customers.customers);
  const { seatmap: tableData } = useFetchTableData();

  const routingHandler = (path: string) => {
    if (path === "/your-information") {
      if (tableIds.length === 0 && customerNumber !== "more") {
        alert("Please select a table");
        return;
      } else if (Number(customerNumber) === 3 || Number(customerNumber) === 4) {
        if (tableIds.length === 1) {
          const selectedCapability = tableData.find(
            (table) => Number(table.id) === tableIds[0]
          )!.capability;
          if (Number(selectedCapability) < 4) {
            alert("Please select another table for 2");
            return;
          }
        }
      }
    }
    if (path === "/seat-select") {
      if (customerNumber === "more") {
        router.push({ pathname: "/" });
      } else {
        router.push({ pathname: path });
      }
    }
    router.push({ pathname: path });
  };

  return [{ routingHandler }];
};
