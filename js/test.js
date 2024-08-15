
let arr = ['jawad' , 'ahmed' , 'tareen' , 'sohail' , 'qahir' , 'shazaib' , 'salar' , 'waleed' , 'rizwan']
let j = undefined
const getRandomElemets = (arr, count) => {
    for (let i = arr.length - 1 ; i >= 0 ; i-- ){
        j = Math.floor(Math.random() * (i + 1))
        
        [arr[i] , arr[j]] = [arr[j] , arr[i]]
    }

    return arr.slice(0 , count)
}

getRandomElemets(arr)