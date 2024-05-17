class HashTable {

    store = new Array(10)

    hash(key){
        let sum = 0;
        for (let i = 0; i< key.length; i++){
            sum += key.charCodeAt(i)
        }
        return sum;
    }

    //O(1)
    add(key, value){
        this.store[this.hash(key)] = this.store[this.hash(key)] || []
        this.store[this.hash(key)].push({key, value})
    }
    get(key){
        return this.store[this.hash(key)].find((item) => item.key === key).value
    }
}

const dict = new HashTable()
//const dict = new Map()

dict.add('lorem', '1')
dict.add('ipsun', '2')

console.log(dict.get('lorem'), dict.get('ipsun'))