import React from "react";
import Joke from "./Joke";
import jokesData from "./JokesData"

export default function App(){

    const jokeElements =  jokesData.map(item =>{

        return <Joke 
                    setup={item.setup}
                    punchline = {item.punchline}
                />
    })

        console.log(jokeElements)

  return(
    <div className="jokes">
        {jokeElements}
    </div>
  )
}