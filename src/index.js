function getGreeting() {
  return 'Hello, World!';
}

if (require.main === module) {
  console.log(getGreeting());
}

module.exports = { getGreeting };
