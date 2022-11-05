let list = require("./array");

function search(arr, indexStart, indexEnd, value){
    const quite = Math.floor((indexStart + indexEnd) / 2);
    const current = arr[quite];

    if(indexStart > indexEnd){
        return -1;
    }

    if(value === current.price){
        return quite;
    }

    if(value < current.price){
        return search(arr, indexStart, quite - 1, value);
    }

    if(value > current.price){
        return search(arr, quite + 1, indexEnd, value);
    }
}

console.log(search(list, 0, list.length - 1, 40));