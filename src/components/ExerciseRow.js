import React from "react";

function ExerciseRow({exercise}){
    return(
        <tr>
            <td>{exercise.id}</td>
            <td>{exercise.name}</td>
            <td>{exercise.group}</td>
            <td>{exercise.moveType}</td>
            <td>{exercise.muscles}</td>
        </tr>
    )
}

export default ExerciseRow