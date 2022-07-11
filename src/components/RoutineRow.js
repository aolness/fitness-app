import React from "react";

function RoutineRow({routine}){
    return(
        <tr>
            <td>{routine.id}</td>
            <td>{routine.name}</td>
            <td>{routine.days}</td>
            <td>{routine.repRange}</td>
            <td>{routine.level}</td>
        </tr>
    )
}

export default RoutineRow