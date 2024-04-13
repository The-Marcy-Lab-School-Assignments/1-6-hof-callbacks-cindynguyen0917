const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
};

const myMap = (arr, callback) => {
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2.push(callback(arr[i]))
  } return arr2
};

const myFind = (arr, callback) => {
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i])
    if (callback(arr2[i])) {
      return arr2[i]
    }
  }
};

const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
