import React, {useState} from "react";

function CreateRoutine(){
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [days, setDays] = useState('')
    const [repRange, setRepRange] = useState('')
    const [level, setLevel] = useState('')


    return(
        <>
            <form>
                <legend>Create a Routine:</legend>
                <input type="number" placeholder="id" value={id} onChange={e=> setId(e.target.value)}/>
                <input type="text" placeholder="name" value={name} onChange={e=> setName(e.target.value)}/>
                <input type="number" placeholder="days" value={days} onChange={e=> setDays(e.target.value)}/>
                <input type="number" placeholder="repRange" value={repRange} onChange={e=> setRepRange(e.target.value)}/>
                <input type="text" placeholder="level" value={level} onChange={e=> setLevel(e.target.value)}/>
            </form>
            <button onClick={e => {
                setId(e.target.value);
                setName(e.target.value);
                setDays(e.target.value);
                setRepRange(e.target.value);
                setLevel(e.target.value);
                // exercises.push({id, name, muscleGroup, movementType, muscleName})
                alert(`${name} has been added.`);
                e.preventDefault();
                }}>Submit</button>
        </>
    )
}

export default CreateRoutine;