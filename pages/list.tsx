import { List } from "@/src/components/List";
import { useMemes } from "@/src/hooks/useMemes";

const ListPage = () => {
  const { data } = useMemes();

  return (
    <>
      <List data={data} />
    </>
  );
};

export default ListPage;
