const chatData = [
  {
    name: "apple",
    detail:
      "A crisp and juicy fruit with a sweet or tart flavor, often red, green, or yellow in color.",
  },
  {
    name: "banana",
    detail:
      "A soft, elongated fruit with a yellow peel and sweet, creamy flesh, rich in potassium.",
  },
  {
    name: "cherry",
    detail:
      "A small, round fruit with a deep red or black color and a sweet, tart taste.",
  },
  {
    name: "date",
    detail:
      "A sweet, chewy fruit with a dark brown skin and a rich, caramel-like flavor, often eaten dried.",
  },
  {
    name: "elderberry",
    detail:
      "A small, dark purple berry known for its tart flavor and use in syrups and jams.",
  },
  {
    name: "fig",
    detail:
      "A soft, sweet fruit with a chewy skin and numerous small seeds inside, often eaten dried or fresh.",
  },
  {
    name: "grape",
    detail:
      "A small, round fruit that can be green, red, or purple, known for its sweet flavor and juiciness.",
  },
  {
    name: "kiwi",
    detail:
      "A small, brown, fuzzy fruit with bright green flesh and tiny black seeds, offering a tangy taste.",
  },
  {
    name: "lemon",
    detail:
      "A yellow citrus fruit with a tart flavor, commonly used for its juice and zest in cooking and drinks.",
  },
  {
    name: "mango",
    detail:
      "A tropical fruit with a sweet, juicy flesh and a large pit, often enjoyed fresh or in smoothies.",
  },
  {
    name: "nectarine",
    detail:
      "A smooth-skinned fruit similar to a peach, with a sweet and tangy flavor and a juicy texture.",
  },
  {
    name: "orange",
    detail:
      "A round, orange citrus fruit known for its sweet and tangy juice, often eaten fresh or juiced.",
  },
  {
    name: "pear",
    detail:
      "A sweet, juicy fruit with a smooth skin and a grainy texture, available in several varieties and colors.",
  },
  {
    name: "pineapple",
    detail:
      "A tropical fruit with a spiky skin and sweet, tangy flesh, commonly used in both savory and sweet dishes.",
  },
  {
    name: "raspberry",
    detail:
      "A small, red or black fruit with a delicate, sweet flavor and tiny seeds, often used in desserts.",
  },
  {
    name: "strawberry",
    detail:
      "A bright red fruit with a juicy, sweet flavor and tiny seeds on its surface, commonly used in desserts.",
  },
  {
    name: "tangerine",
    detail:
      "A small citrus fruit with a bright orange skin, easy to peel, and sweet, juicy segments inside.",
  },
  {
    name: "watermelon",
    detail:
      "A large, green fruit with a sweet, juicy, red or pink flesh and black seeds, perfect for summer.",
  },
];

export const getreply = (text) => {
  const data = chatData.find((ele) => ele.name === text);
  if (!data) {
    return "Try searching other fruit";
  } else {
    return data.detail;
  }
};
