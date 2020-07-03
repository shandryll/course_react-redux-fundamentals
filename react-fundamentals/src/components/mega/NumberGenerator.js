function generateNumberOff(min, max, array) {
  const number = []
  const randomNumber = parseInt(Math.random() * ((max + 1) - min) + min)
  return array.includes(randomNumber) ? generateNumberOff(min, max, array) : randomNumber
};

function generateNumbers(quantity) {
  const numbers = Array(quantity)
    .fill(0)
    .reduce((nums) => {
      const newNumber = generateNumberOff(1, 60, nums)
      return [...nums, newNumber];
    }, [])
    .sort((num1, num2) => num1 - num2)
  return numbers
};

console.log(generateNumbers(7));
