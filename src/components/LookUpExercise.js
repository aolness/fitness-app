import React from "react";
import ExerciseRow from "./ExerciseRow";

function LookUpExercise({exercises}){
    return(
        <table id='Exercises'>
            <caption>Exercise List</caption>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Muscle Group</th>
                    <th>movement Type</th>
                    <th>muscle Name</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <ExerciseRow exercise={exercise} key={i}/>)}
            </tbody>
        </table>
    )
}

export default LookUpExercise;