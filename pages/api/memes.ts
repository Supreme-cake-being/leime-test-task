import { NextApiRequest, NextApiResponse } from "next";

const memes = [
  {
    name: "I found",
    picture:
      "https://i.pinimg.com/736x/01/ff/96/01ff96a3bc2e47438be78fcc5b187a73.jpg",
    likes: 98,
    id: "1",
  },
  {
    name: "Hot wheels",
    picture:
      "https://i.pinimg.com/736x/41/21/34/412134413a185a72672cdab9a35e1466.jpg",
    likes: 68,
    id: "2",
  },
  {
    name: "Assault vehicle",
    picture:
      "https://i.pinimg.com/736x/ba/5e/83/ba5e836d777fe7fbd78633beb5c1b0c5.jpg",
    likes: 73,
    id: "3",
  },
  {
    name: "Batmidget",
    picture:
      "https://i.pinimg.com/736x/c7/a0/d9/c7a0d9dbd60d27d62056cfbf1671ab7c.jpg",
    likes: 39,
    id: "4",
  },
  {
    name: "Deminer",
    picture:
      "https://i.pinimg.com/736x/fe/df/14/fedf14d57753339bbc65fe06c358182e.jpg",
    likes: 26,
    id: "5",
  },
  {
    name: "Gas leak",
    picture:
      "https://i.pinimg.com/736x/94/5a/de/945ade05c03ab94e5cc32e66a80eb6d9.jpg",
    likes: 15,
    id: "6",
  },
  {
    name: "Coke dealer",
    picture:
      "https://i.pinimg.com/736x/ff/1a/42/ff1a42cb347597ec349726160446ab22.jpg",
    likes: 91,
    id: "7",
  },
  {
    name: "Nervous",
    picture:
      "https://i.pinimg.com/736x/91/68/52/91685241086812e0846f75172488b271.jpg",
    likes: 1,
    id: "8",
  },
  {
    name: "Penny",
    picture:
      "https://i.pinimg.com/736x/c6/18/59/c618598a4c33daa6795d12fb9d42dc41.jpg",
    likes: 19,
    id: "9",
  },
  {
    name: "I wanna play DnD",
    picture:
      "https://i.pinimg.com/736x/31/e6/55/31e655ba954f366dc6b02dba67de300b.jpg",
    likes: 58,
    id: "10",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(memes);
  }

  if (req.method === "PATCH") {
    const { id, ...updates } = req.body;
    const index = memes.findIndex((meme) => meme.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Meme not found" });
    }

    memes[index] = { ...memes[index], ...updates };
    return res.status(200).json(memes[index]);
  }

  res.setHeader("Allow", ["GET", "PATCH"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
