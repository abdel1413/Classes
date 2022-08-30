/**
 * some of methds are hidden and to get them
 * we use get and then the method name
 * Math.random() gives arbitrary nums btw 0 and 1
 *  to get the 1 digit we mutliply by random()* 10 (1.0... to 9.0...)
 * to get the 2 digit we mutliply by random()* 100
 * to get the whole int, we convert using  Math.floor
 */

let getSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(getSize.size);
//console.log(getSize.size)  =>79
//console.log(getSize.size)  =>9
//console.log(getSize.size)  =>32
