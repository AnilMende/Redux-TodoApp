export const Add = (iteams) => {
    return{
        type: "ADD_DATA",
        payload: iteams
    }
}

// for removing a task
export const Remove = (id) => {
    return{
        type: "REMOVE_DATA",
        payload: id
    }
}

// for updating data when update button is clicked

export const Update_data = (iteams, id) => {
    return{
        type: "UPDATE_DATA",
        payload: iteams,
        d: id
    }
}