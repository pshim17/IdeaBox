import { useState } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

function App() {
 // Logic and other needed functions will go here
 const [ideas, setIdeas] = useState([]);

 return (
  //Your JSX code goes here
  <main className='App'>
    <h1>IdeaBox</h1>
    {/* Conditional render to show message if no ideas */}
    {!ideas.length && <h2>No ideas yet -- add some!</h2> }
    <Form/>
    {/* Pass ideas to Ideas component */}
    <Ideas ideas={ ideas }/>
  </main>
 )
}

export default App;