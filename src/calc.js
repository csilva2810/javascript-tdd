module.exports = {
  sum: function sum(a, b) {
    return a + b;
  },
  sub: function sub(a, b) {
    return a - b;
  },
  mult: function mult(a, b) {
    return a * b;
  },
  div: function div(a, b) {
    return (b === 0) ? 'Não é possível divisão por 0' : a / b;
  },
};
