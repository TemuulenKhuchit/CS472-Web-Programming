// Exercise 1.
const Meditation = class {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    console.log("Start meditation");
    let interval = setInterval(() => {
      console.log(this.seconds);
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(interval);
        console.log("Jay Guru Dev");
      }
    }, 1000);
  }
};

// Usage example:
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log("Start meditation");

// Exercise 2.
const isPrime = (n) => {
  return new Promise((resolve, reject) => {
    if (n < 2) {
      reject({ prime: false });
    } else {
      for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) {
          reject({ prime: false });
        }
      }
      resolve({ prime: true });
    }
  });
};

// Test using Promise:
console.log("start");
isPrime(7).then(console.log).catch(console.error);
console.log("end");

// Modified Test Using Async/Await
const checkPrime = async (n) => {
  console.log("start");
  try {
    const result = await isPrime(n);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  console.log("end");
};

// Test using async/await
checkPrime(7);

// Exercise 3.
(async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    const recipeNames = data.recipes.map((recipe) => recipe.name);
    console.log("Recipes:", recipeNames);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
})();
