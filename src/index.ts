export function getGreeting(): string {
  return "Hello, World!";
}

if (typeof require !== "undefined" && require.main === module) {
  console.log(getGreeting());
}
