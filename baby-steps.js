var sum = 0;

var x = process.argv;

x = x.slice(2,x.length);

x.map(el =>{sum+= Number(el)} )

console.log(sum)