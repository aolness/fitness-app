import React from "react";
import CreateRoutine from "../components/CreateRoutine";
import LookUpRoutine from "../components/LookUpRoutine";

function RoutinesPage({routines}){
    return(
        <>Routines Page
            <CreateRoutine/>
            <LookUpRoutine routines={routines}/>
        </>
    )
}

export default RoutinesPage;