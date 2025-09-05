import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Todo from "./Todo";
import { useDispatch } from "react-redux";
import { Add } from "../redux/actions/action";

const Home = () => {
    
    const [data, setData] = useState("");
    // console.log(data);

    const dispatch = useDispatch();

    const addData = () => {
        
        dispatch(Add(data));
        setData("")
    }

    return(
        <>
            <div className="container">
                <section className="mt-4 text-center">
                    <h3>Enter Your Task</h3>

                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">

                        <input 
                        value={data}
                        onChange={(e) => setData(e.target.value)} 
                        className="form-control"/>

                        <Button variant="contained"
                          onClick={() => addData()} 

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