import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import cardsData from "./data"
//import Contact from "./Components/Contact";



function App() {
  
    const cards = cardsData.map((item) => {
      //const img=item.coverImg
      return <Card 
        key={item.id}
        img={require(`./Images/${item.coverImg}`)}
       item={item} />
    })
    return(
      <div className="container">
        <Navbar /> 
        <Hero />
        <section className="cards-list" >
          {cards}
        </section>
          
      </div>
    )
    {/* <div className="contacts">
        <Contact 
          img={require("./Images/mr-whiskerson.png")}
          name="Mr Whiskerson"
          phone="(212) 555-1234"
          mail="mr.whiskaz@catnap.meow" />
        <Contact 
          img={require("./Images/fluffykins.png")}
          name="Fluffykins"
          phone="(212) 555-2345"
          mail="fluff@me.com"/>
        <Contact 
          img={require("./Images/felix.png")}
          name="Felix"
          phone="(212) 555-4567"
          mail="thecat@hotmail.com"/>
        <Contact 
          img={require("./Images/pumpkin.png")}
          name="Pumpkin"
          phone="(0800) CAT KING"
          mail="pumpkin@scrimba.com"/>
      </div>
    */}
      
 };

export default App;
