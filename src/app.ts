export{}
const b: number = 30;
const myName: string = "Bui Viet Toai";
const status:boolean = true;

const myob: object = {};
const numberArr:number[]= [1,3,5,6];

const objectArr: user[] = [{id:1, name: 'Toai'}, {id:2, name: 'Hung'}]

// Khai baos bieen

type user = {
    id:number,
    name:string
}

function sum(numA: number, numB: number){
    return numA + numB
}
sum(5,6);

type Product = {
    id: number,
    name: string;
}

const getProduct = <T extends Product>(Product: T[]) => {
    const result = Product.map(item => `<div> ${item.name}</div>`)
}
getProduct([{id: 1, name: 'B'}, {id: 2, name: 'B'}])


type User = {
    id: number,
    name: string
}
const person = <U extends user>(a: U[]) => {

}
person([{id: 2, name:'Bui Viet Toai'}])