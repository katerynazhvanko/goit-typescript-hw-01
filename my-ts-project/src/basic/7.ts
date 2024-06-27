//Створіть новий тип даних, який підходить для цих двох об'єктів.

interface postInfo {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: object;
    updateAt: object;
  };
}

const page1: postInfo = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};
console.log(page1);

const page2: postInfo = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log(page2);

export {};
