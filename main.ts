let a =1;
console.log(a);

//type asertion

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('g');
let endsWithD = (message as string).endsWith('g');
