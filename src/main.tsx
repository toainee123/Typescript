import ReactDOM from 'react-dom'
import App from './App';

ReactDOM.render(<App/>, document.querySelector('#root'));
// const myName:string = 'Bui Viet Toai';
// const myAge:number  = 20;
// const status: boolean = false;
// const product: {id:number ,name:string} = {id: 1, name:"Bui Viet Toai"};

// ReactDOM.render(
//   <div>
//     <h1>Hell {myName}</h1>
//     <h2>{myAge}</h2>
//     <h1>{status ? "Bui Toai": "Toai"}</h1>
//     <h1>{product.name}</h1>
//   </div>, 
//   document.querySelector('#root')
// )

// type ShowProps = {
//     name: string;
// }

// function Show(props: ShowProps){
//     console.log(props.name)
// }