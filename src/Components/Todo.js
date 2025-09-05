import React, { useContext, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Remove, Update_data } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { DeleteContext } from "./Context/ContextProvider";


const Todo = () => {

    const { User_data } = useSelector((state) => state.todoreducers);
    // console.log(User_data);

    const {dlttask, setDlttask} = useContext(DeleteContext);
    // console.log(dlttask);

    const dispatch = useDispatch();

    //show modal: using the useState for showeye and also using the state for showeyevalue
    const [showeye, setShoweye] = useState(false);
    const [showeyevalue, setShoweyeValue] = useState("");

    const [show, setShow] = useState(false);

    const [update, setUpdate] = useState("");

    const [ind, setInd] = useState("");

    const handleClose = () => setShow(false);

    const handleShow = (el) => {
        setShow(true);
        setUpdate(el);
    }

    // delete function
    const remove = (id) => {
        dispatch(Remove(id));
        setDlttask(true);
    }

    // update function
    const usertask_update = () => {
        dispatch(Update_data(update, ind));
        handleClose();
    }

    return (
        <>
            <div className="todo_data col-lg-5 mx-auto mt-2">
                {
                    User_data.map((element, val) => {
                        return (

                            <div className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                                key={val}
                                style={{ background: "#dcdadaff", borderRadius: "3px", height: "45px" }}>

                                <li style={{ listStyle: "none" }}>{element}</li>

                                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                                    <EditIcon
                                        onClick={() => {
                                            handleShow(element)
                                            setInd(val)
                                        }}
                                        style={{ color: "blue", cursor: "pointer" }} />

                                    <DeleteIcon
                                        onClick={() => remove(val)}
                                        style={{ color: "red", cursor: "pointer" }} />

                                    <RemoveRedEyeIcon
                                        onClick={() => {
                                            setShoweye(true)
                                            setShoweyeValue(element)
                                        }}
                                        style={{ color: "#1dd1a1", cursor: "pointer" }} />

                                </div>
                            </div>
                        )
                    })
                }

                {/* Read Modl */}
                <Modal show={showeye}>
                    <h1 className="text-center">{showeyevalue}</h1>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShoweye(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Update Modal */}
                <Modal show={show} onHide={handleClose}>
                    <h3 className="text-center mt-2">Update Your Task</h3>

                    <Modal.Header>
                        <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
                            <input 
                             value={update}
                             onChange={(e) => setUpdate(e.target.value)} 
                             className="form-control col-lg-5 mt-2"/>
                      </div>
                    </Modal.Header>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => usertask_update()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    )
}
export default Todo;