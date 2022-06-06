import React from "react";
import Joke from "./Joke";

export default function Appharcoded(){
  return(
    <div className="jokes">
        <Joke 
            punchline="I can't wait to see her face light up when she opens it." 
            isPun={true}
            upvotes={10}
            downvotes={2}
            comments={[ {author: "ahmet", body: "bödö pss", title: "başşş 1"}, 
                        {author: "mehmet", body: "hede", title: "baaşşşllık  2"}]
                      }
        />
        <Joke 
            setup="How did the hacker escape the police?" 
            punchline="He just ransomware!" 
            isPun={false}
        />
        <Joke 
            setup="Why don't pirates travel on mountain roads?" 
            punchline="Scurvy." 
            isPun={true}
        />
        <Joke 
            setup="Why do bees stay in the hive in the winter?" 
            punchline="Swarm." 
            isPun={false}
        />
        <Joke 
            setup="What's the best thing about Switzerland?" 
            punchline="I don't know, but the flag is a big plus!" 
            isPun={true}
        />
    </div>
  )
}