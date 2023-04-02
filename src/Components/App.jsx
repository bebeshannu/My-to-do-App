import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App(){

    var[inputText, setInputText]=React.useState("");
    var[items,setItems]=React.useState([]);

    function handleNote(event){
        const noteValue=event.target.value;
        setInputText(noteValue);

    }
    
    function addItems(){
        setItems(function(previousItem){
            return [...previousItem,inputText]
            
        });
        setInputText(" ");

    }
return(
<div className="main-container">
    <Header/>
    <div className="container">
        <div className="form">
            <input type="text" onChange={handleNote} />
            
            <button onClick={addItems}>
                <span>
                    Add
                </span>
            </button>
            <div>
                <ul>
                  {items.map((noteItems)=>{
                        return <li>{noteItems}</li>              
                  })
                  }
                </ul>
            </div>
        </div>
    </div>
    <Footer/>
</div>

);

}

export default App;