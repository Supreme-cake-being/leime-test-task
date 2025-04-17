import { TableComponent } from "@/src/components/Table";
import { useMemes } from "@/src/hooks/useMemes";
import { useEffect } from "react";

const TablePage = () => {
  const { data, handleFetch } = useMemes();

  return (
    <>
      <TableComponent data={data} handleFetch={handleFetch} />
    </>
  );
};

export default TablePage;
