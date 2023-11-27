import React from "react"

export default function Button(){
  return (
    <div>
      <button 
          onClick={()=> alert('Hello world!')}
      >Buttodn-this</button>
    </div>
  );
}