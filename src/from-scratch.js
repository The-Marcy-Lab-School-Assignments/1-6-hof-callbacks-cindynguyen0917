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

const myFilter = (arr, callback) => {
  let filteredArray = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      filteredArray.push(arr[i])
    }
  } return filteredArray
};

const sortWords = (arr) => {
  let sortedNames = [...arr]
  return sortedNames.sort()
};

const sortNumbers = (arr) => {
  let sortedNums = [...arr]
  return sortedNums.sort((a, b) => a - b) //thank you to the alum to taught us this
};

const sortNumbersBetter = (arr, isDescending) => {
  if (isDescending) {
    let bigToSmall = [...arr].sort((a, b) => b - a)
    return bigToSmall
  } else {
    let smallToBig = [...arr].sort((a, b) => a - b)
    return smallToBig
  }
};

const sortUsersByOrder = (arr) => {
  let sortedUsers = [...arr]
  return sortedUsers.sort((a, b) => a.order - b.order)
};

const sortUsersByName = (arr) => {
  let sortedUsers = [...arr]
  return sortedUsers.sort((a, b) => {
    let nameA = a.name
    let nameB = b.name
    if (nameA < nameB) {
      return -1; //will put nameA before nameB
    } else if (nameA > nameB) {
      return 1; //will put NameB before nameA
    } else {
      return 0; //the names are the same and no changes are made to the sort
    }
  }
  )
};
/* https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/#:~:text=We%20can%20do%20this%20in,of%20objects%20with%20name%20users. */
//I used this resource because I was lost lol
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
