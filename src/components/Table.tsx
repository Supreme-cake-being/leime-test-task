import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { Modal } from "./Modal";

interface ITable {
  data: Record<string, any>[];
  handleFetch: () => void;
}

export const TableComponent = ({ data = [], handleFetch }: ITable) => {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>PICTURE</TableColumn>
        <TableColumn>LIKES</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {data?.map(({ id, name, picture, likes }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{picture}</TableCell>
            <TableCell>{likes}</TableCell>
            <TableCell>
              <Modal
                title={`Edit "${name}" meme`}
                id={id}
                name={name}
                picture={picture}
                likes={likes}
                handleFetch={handleFetch}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
