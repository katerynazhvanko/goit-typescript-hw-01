function showMessage(message: string): void {
  console.log(message);
}
showMessage("Hello TypeScript!");

function calc(num1: number, num2: number) {
  return num1 + num2;
}
calc(2, 3);

function customError(): never {
  throw new Error("Error");
}
customError();

export {};
