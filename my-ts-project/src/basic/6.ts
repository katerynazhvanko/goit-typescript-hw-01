//Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};
console.log(mango);

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log(poly);

export {};
