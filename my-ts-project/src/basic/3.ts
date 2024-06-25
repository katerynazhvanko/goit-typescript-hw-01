//Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let mixedtype: number | string;
mixedtype = 3;

type literalType = "enable" | "disable";
let answer: literalType;
answer = "disable";

export {};
