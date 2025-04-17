import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export const usePatch = async ({ id, name, picture, likes }: any) => {
  try {
    const response = await axios.patch("", {
      id,
      name,
      picture,
      likes,
    });
  } catch (error) {
    console.log(error);
  }
};
