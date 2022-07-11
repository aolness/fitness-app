import React from "react";
import CreateExercise from "../components/CreateExercise"
import LookUpExercise from "../components/LookUpExercise";

function WeightsPage({exercises}, {routines}) {

    return(
        <>WeightsPage
        <CreateExercise exercises= {exercises}/>
        <LookUpExercise exercises={exercises}/>
        </>
    )
}

export default WeightsPage