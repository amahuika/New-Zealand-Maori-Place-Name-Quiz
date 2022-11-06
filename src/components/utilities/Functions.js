// shuffle an array function
export const shuffleArray = (array) => {
  let newArr = [];
  let selectedNum = [];

  while (selectedNum.length < array.length) {
    let j = Math.floor(Math.random() * array.length);
    if (!selectedNum.includes(j)) {
      selectedNum.push(j);
      newArr.push(array[j]);
    }
  }
  return newArr;
};

export const randomNum = (length) => {
  let randNum = Math.floor(Math.random() * length);
  return randNum;
};
