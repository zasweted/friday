import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


function Joke() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
            .then(x => setList(x.data.jokes));
    }, []);
    console.log(list);

    return (

        <>
            <h1>Jokes On You</h1>
            <div style={{marginBottom: '50px'}}>
                {
                    list.map(a => a.joke ? <div key={a.id} style={{
                        border: '1px solid #fff',
                        margin: '20px 100px'
                    }} >{a.joke}</div> : <div key={a.id} style={{
                        border: '1px solid #fff',
                        margin: '20px 100px'
                    }}><h2>{a.setup}</h2><p>{a.delivery}</p></div>)
                }
            </div>
        </>

    );

};

export default Joke;