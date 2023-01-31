import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style.css'



ReactDOM.render(<App />, document.getElementById('root'));





/*import React from 'react'; //because JSX syntax is defined in React
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import './index.css';

function App() {
  return(
    <div className='body'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
};*/

//ReactDOM.render(<App />, document.getElementById('root'));

/*function ReactFacts() {
  return(
    <div>
      {/*<img src={process.env.PUBLIC_URL+"logo192.png"} width="40px" /> For image in public folder
      <img src={logo} width="40px" alt='' />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )  
}


ReactDOM.render(<ReactFacts />, document.getElementById("root"));*/


//Specify what you want to render and where you want to render it.
//ReactDOM.render(<h1>Hello, Sherifah!</h1>, document.getElementById('root'));

/*function MainContent() {
    return (<h1>I'm learning React!</h1>)
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
);*/

//Challenge

/*const navbar = (
    <div>
        <nav>
            <h1>ClassicMe</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
)

ReactDOM.render(navbar, document.getElementById("root"));*/

//JSX return plain javaScript object

/*const content = (
  <div>
    <h2>No Heading is a heading itself</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
)

ReactDOM.render(content, document.getElementById("root"));*/
//document.getElementById("root").append(content);
