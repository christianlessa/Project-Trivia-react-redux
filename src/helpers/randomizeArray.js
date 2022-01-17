const randomizeArray = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // Referência: https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default randomizeArray;
