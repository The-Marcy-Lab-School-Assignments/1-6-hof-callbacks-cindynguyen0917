
const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
};;

const myMap = (arr, callback) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2 += callback(arr[i])
    }
};

const myFind = (arr, callback) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
        if (callback(arr2[i])) {
            return arr2[i]
        } else {
            return `undefined`
        }
    }
};

const myFilter = (arr, callback) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            arr2.push(arr[i])
        } return arr2
    }
};
