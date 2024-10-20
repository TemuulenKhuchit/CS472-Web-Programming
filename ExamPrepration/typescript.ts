function fnc(p: string | number): number {
  if (typeof p === "string") return p.length;
  if (typeof p === "number") return p * p;
  return 0;
}

console.log(fnc("Hello"));
console.log(fnc(25));
