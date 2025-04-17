import axios from "axios";

export const usePatch = async ({
  id,
  name,
  picture,
  likes,
}: Record<string, string | number>) => {
  try {
    await axios.patch("", {
      id,
      name,
      picture,
      likes,
    });
  } catch (error) {
    console.log(error);
  }
};
