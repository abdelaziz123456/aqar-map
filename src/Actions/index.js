import { ADD_PROPERTY,DELETE_PROPERTY,CLEAR_PROPERTIES } from "./types";

//actions creators



export const add_property=(property)=>{
    const action={
        type:ADD_PROPERTY,
        property:property
    }
    return action


    }



    export const delete_property=(id)=>{
        const action={
            type:DELETE_PROPERTY,
            id
        }
        return action
    }


    export const clear_property=()=>{
        const action={
            type:CLEAR_PROPERTIES
        }


        return action
    }