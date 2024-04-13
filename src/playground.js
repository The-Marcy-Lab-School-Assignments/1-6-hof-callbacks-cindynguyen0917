
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