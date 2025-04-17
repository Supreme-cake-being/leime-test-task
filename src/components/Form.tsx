import { Button, Input, ModalFooter } from "@heroui/react";
import { useState } from "react";
import { usePatch } from "../hooks/usePatch";

interface IForm {
  id: string;
  name: string;
  picture: string;
  likes: number;
  onClose: () => void;
  handleFetch: () => void;
}

export const Form = ({
  id,
  name,
  picture,
  likes,
  onClose,
  handleFetch,
}: IForm) => {
  const [values, setValues] = useState<Record<string, any>>({
    name,
    picture,
    likes,
  });
  const [errors, setErrors] = useState({
    name: false,
    picture: false,
    likes: false,
  });

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Custom validation checks
    const newErrors: { name: boolean; picture: boolean; likes: boolean } = {
      name: false,
      picture: false,
      likes: false,
    };

    const pictureValue = values.picture as string;

    // Name validation: between 3 and 100 characters
    if (values.name.length < 3 || values.name.length > 100) {
      newErrors.name = true;
    }

    // Picture validation
    const pictureError = isValidUrl(pictureValue);
    if (!pictureError) {
      newErrors.picture = true;
    }

    // Likes validation: number between 1 and 99
    if (isNaN(values.likes) || values.likes <= 0 || values.likes > 99) {
      newErrors.likes = true;
    }

    console.log(
      newErrors,
      Object.values(newErrors).some((error) => error)
    );

    const ifErrors = Object.values(newErrors).some((error) => error);
    if (ifErrors) {
      setErrors(newErrors);

      return;
    }

    // Clear errors and submit
    setErrors({
      name: false,
      picture: false,
      likes: false,
    });
    usePatch({
      id,
      name: values.name,
      picture: values.picture,
      likes: values.likes,
    });
    handleFetch();
    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter meme name"
        value={values.name}
        onChange={handleChange}
        errorMessage={"Name must be between 3 and 100 characters"}
        isInvalid={values.name.length < 3 || values.name.length > 100}
        isRequired
      />

      <Input
        label="Picture"
        labelPlacement="outside"
        name="picture"
        placeholder="Enter picture URL"
        value={values.picture.toString()}
        onChange={handleChange}
        errorMessage={"Please enter a valid URL"}
        isInvalid={isValidUrl(values.picture as string) ? false : true}
        isRequired
      />

      <Input
        label="Likes"
        labelPlacement="outside"
        name="likes"
        placeholder="Enter likes"
        value={values.likes.toString()}
        onChange={handleChange}
        errorMessage={"Likes must be a number between 0 and 99"}
        isInvalid={
          values.likes <= 0 || values.likes > 99 || isNaN(values.likes)
        }
        isRequired
      />

      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" onPress={handleSubmit}>
          Submit
        </Button>
      </ModalFooter>
    </div>
  );
};
