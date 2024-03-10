let count = 0;

const counter = {
  increase() {
    count++;
  },
  decrease() {
    count--;
  },
};

Object.freeze(counter);
export { counter };

console.log("test");
