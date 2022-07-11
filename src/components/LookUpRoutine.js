import React from "react";
import RoutineRow from "./RoutineRow";


function LookUpRoutine({routines}){
    return(
        <table id='Routines'>
            <caption>Routine List</caption>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Days a week</th>
                    <th>Rep Range</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                {routines.map((routine, i) => <RoutineRow routine={routine} key={i}/>)}
            </tbody>
        </table>
    )
}

export default LookUpRoutine;