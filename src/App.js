import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
 
 return (
<div className="App">
<ul>
        <li>
          <Link to="/recipe-list">Recipe List </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      
    <Switch>
      <Route path="/recipe-list">
        <RecipeList />
      </Route>
      <Route path="/">
         <Welcome />
      </Route>
    </Switch>
</div>
  );
  }

  function Welcome() {
    const message = "Welcome to recipe app 😊👨‍🍳";
    return (
  <div className="App">
      <h1>{message}</h1>
  </div>
    );
    }

    function RecipeList() {
      const message = "Awesome recipe list 🍗🍟";
      // const recipeList = [
      //   {
      //     id: "1000",
      //     picture:
      //       "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11.jpg",
      //     name: "Chicken tandoori"
      //   },
      //   {
      //     id: "1001",
      //     picture:
      //       "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
      //     name: "Panner butter masala"
      //   },
      //   {
      //     id: "1002",
      //     picture:
      //       "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
      //     name: "Briyani"
      //   },
      //   {
      //     id: "1003",
      //     picture:
      //       "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
      //     name: "Parotta shawarma"
      //   }
      // ];

      const [recipeList, setRecipeList] = useState([]);


      useEffect(() => {
fetch("https://6209f23692946600171c55ea.mockapi.io/recipes")
      .then(data => data.json())
      .then(recipes => setRecipeList(recipes));
    }, []);

      return (
        <div> 
            <h1>{message}</h1>
            <div className = "recipe-list-container">
              { recipeList.map((recipe) => (<Recipe recipe={ recipe }/>
              ))
              }
            </div>
        </div>
  );
}

function Recipe( {recipe} ) {
  // const recipe = {name: "Biryani",
  // picture:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",}; 
  return (
    <div className="recipe-container">
      <img src={recipe.picture} alt={recipe.name} className="recipe-picture" />
      <p className="recipe-name">{recipe.name}</p>
    </div>
  );
}

export default App;












































// import React, { createContext, useContext, useState } from 'react';
// import './App.css';
// import Card from './components/Card';
// import Form from './components/Card';
// //import StoreProvider from './store';

// const Store = createContext();
// export const useStore = () => useContext(Store);

// const InputComponent = (
//   {
//   action, value
//   }
//   ) => {
//   return(
//     <form>
//     <input type={'text'} onChange = {action} value={value} />
    
//     </form>
    
//   )
// }

// const initialState = {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: '',
//   email: '',
//   mobileno: ''
// }

// export default function App() {

//       const [firstName, setFirstName] = useState('Krishna');
//       const [lastName, setLastName] =useState('Veni');
//       const [email, setEmail] = useState('krishnaveni44@gmail.com');
//       const [mobileno, setMobileno] =useState('9566209664');
      

//   return(
    
//     <Store.Provider>
//       <div>
//       <img src={initialState.imgUrl} alt="Avatar" style={{width: "20%"}} />
//       </div>
//       <div>
//       <InputComponent value = {firstName} action={(e)=>setFirstName(e.target.value)}/>
//       <InputComponent value = {lastName} action={(e)=>setLastName(e.target.value)}/>
//       <InputComponent value = {email} action={(e)=>setEmail(e.target.value)}/>
//       <InputComponent value = {mobileno} action={(e)=>setMobileno(e.target.value)}/>
//       </div>
//     </Store.Provider>
//   )
// }


// <button onClick={action}>Change</button> 




// const data = [{
//     imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//     name: 'Krishnaveni',
//     email: 'krishnaveni44@gmail.com',
//     number: '9566209664'
//   },
//    {
//     imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//     name: 'Krishnaveni',
//     email: 'krishnaveni44@gmail.com',
//     number: '9566209664'
//   },
//   {
//     imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//     name: 'Krishnaveni',
//     email: 'krishnaveni44@gmail.com',
//     number: '9566209664'
//   }]

//   const InputComponent = ({
//     action,value
//   }) => {
//     return(
//       <input type={'text'} onChange={action} value={value} />
//     )
//   }


//   export default function App() {
//     let [name, setValue] = useState("");
//     let [email, setEmail] = useState("");
//     let [mobileno, setMobileno] = useState("");
  
//     const action = () => {
      
//       setValue(name)
//       setEmail(email)
//       setMobileno(mobileno)
//     }
//   // https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_multiple
//      return (
      
//       <div>
        
//         <div className="container">

//           <div className="image">
//             <Form imgUrl="https://www.w3schools.com/howto/img_avatar.png"
//             name={name} email={email} number={mobileno} action={action} />
//           </div>

//            <div>
//            <InputComponent value={name} action={(e) => { 
//              setValue(e.target.value)
//             }}/>  <br/>
            
//             <InputComponent value={email} action={(e) => { 
//              setEmail(e.target.value)
//             }}/>    <br/>

//             <InputComponent value={mobileno} action={(e) => { 
//              setMobileno(e.target.value)
//             }}/>    <br/>

// <input type="checkbox" name="text"/>Send me my trip updates on Whatsapp<br/>
//   <br/>

//            </div> 
          
//         </div>
        
//       </div>
//     )
//   }


{/* <label type="email" id="email" name ="email">Email</label><br/>
        <input type="text" onChange={(e) => {setEmail(e.target.value)
        }} value={email} placeholder= "Email"/> 
        
<input type="text" onChange={(e) => {setValue(e.target.value)
             }} value={name}  placeholder="Your Name"/> 

<input type="checkbox" name="text"/>Send me my trip updates on Whatsapp<br/>

        <label type="number" name ="">Mobile Number</label><br/>
        <input type="number" onChange={(e) => { setNumber(e.target.value)
        }} value={number} placeholder="Mobile Number" /> <br/><br/> */}




// const data = [{
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }]
// export default function App() {
//   let [name, setValue] = useState("John");
//   let [title, setTitle] = useState("Engineer");

//   const action = () => {
//     setTitle(name)
//   }

//   return (
//     <div>
//       <input type="text" onChange={(e) => {
//         setValue(e.target.value)
//       }} value={name} /> 
//       <br/>
//       <Card imgUrl="https://www.w3schools.com/howto/img_avatar.png"
//        name={name} title={title} action={action} />
//     </div>
//   )
// }

