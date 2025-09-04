import React from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Todo from "./Todo";

const Home = () => {
    return(
        <>
            <div className="container">
                <section className="mt-4 text-center">
                    <h3>Enter Your Task</h3>

                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
                        <input className="form-control"/>
                        <Button variant="contained" 
                          style={{background:"#eb5253"}} 
                          className="mx-2">
                          <AddIcon/>
                        </Button>
                    </div>
                    
                    <Todo/>
                </section>
            </div>
        </>
    )
}

export default Home;