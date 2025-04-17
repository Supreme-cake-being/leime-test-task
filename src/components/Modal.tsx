import {
  Button,
  Modal as ModalComponent,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FC, ReactNode } from "react";
import { EditIcon } from "./Icons";
import { Form } from "./Form";

interface IModal {
  title: string;
  id: string;
  name: string;
  picture: string;
  likes: number;
  handleFetch: () => void;
}

export const Modal = ({
  title,
  id,
  name,
  picture,
  likes,
  handleFetch,
}: IModal) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <EditIcon onPress={onOpen} />
      <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <Form
                  id={id}
                  name={name}
                  picture={picture}
                  likes={likes}
                  onClose={onClose}
                  handleFetch={handleFetch}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </ModalComponent>
    </>
  );
};
