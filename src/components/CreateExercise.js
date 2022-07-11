import React, {useState} from "react";
import exercises from "../data/exercises";


function CreateExercise(){
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [muscleGroup, setMuscleGroup] = useState('')
    const [movementType, setMovementType] = useState('')
    const [muscleName, setMuscleName] = useState('')


    return(
        <>
            <form>
                <legend>Create an exercise:</legend>
                <input type="number" placeholder="id" value={id} onChange={e=> setId(e.target.value)}/>
                <input type="text" placeholder="name" value={name} onChange={e=> setName(e.target.value)}/>
                <input type="text" placeholder="Muscle Group" value={muscleGroup} onChange={e=> setMuscleGroup(e.target.value)}/>
                <input type="text" placeholder="Movement Type" value={movementType} onChange={e=> setMovementType(e.target.value)}/>
                <input type="text" placeholder="Muscle Name" value={muscleName} onChange={e=> setMuscleName(e.target.value)}/>
            </form>
            <button onClick={e => {
                setId(e.target.value);
                setName(e.target.value);
                setMuscleGroup(e.target.value);
                setMovementType(e.target.value);
                setMuscleName(e.target.value);
                exercises.push({id, name, muscleGroup, movementType, muscleName})
                alert(`${name} has been added.`);
                e.preventDefault();
                }}>Submit</button>
        </>
    )
}

export default CreateExercise;