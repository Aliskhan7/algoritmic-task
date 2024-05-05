const arr = [1,2,3,4,5,6,7,8,9]

//O(n)
function searchElement(arr, n){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i
        }
    }
    return -1
}

searchElement(arr, 5)

//O(log N)
function binarySearch(arr, n){
    let left = -1
    let right = arr.length

    while(right - left > 1){
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] === n){
            return mid
        }
        if(arr[mid] > n){
            right = mid
        }else{
            left = mid
        }
    }
    return -1
}





const arrSort = [1, 2, 3, 4, 2, 3, 5, 6, 4, 3, 6, 12, 7, 8, 9]
arrSort.sort((a, b) => a - b)

function binSearch(arr, n){
    const posEl = binarySearch(arr, n)

    if(posEl === -1){
        return 0
    }

    let i = posEl;
    while (arr[i] === n){
        i--
    }

    let j = posEl
    while(arr[j] === n){
        j++
    }
    return j - i -1
}
binSearch(arrSort, 4)
