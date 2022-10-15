import React, { useContext, useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Remove, Update_data } from "../redux/actions/action";
import { DeleteContext } from "./context/ContextProvider";


const Todo = () => {

    const dispatch = useDispatch();
  const { User_data } = useSelector((state) => state.todoreducers);
  console.log(User_data);

  const {dlttask, setDlttask} = useContext(DeleteContext);

  const[showeye, setShoweye] = useState(false);
  const[showeyevalue, setShoweyevalue] = useState("");

  const [show, setShow] = useState(false);

  const [update, setUpdate] = useState("");

  const[ind, setInd] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (element) =>{
    setShow(true);
    setUpdate(element);
  }


  const remove = (id) => {
    // console.log(id);
    dispatch(Remove(id));
    setDlttask(true);
  }

  const usertask_update = () => {
    dispatch(Update_data(update, ind));
    handleClose();
  }

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {User_data.map((element, k) => {
          return (
            <>
              <div
                className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                style={{
                  background: "#708090",
                  borderRadius: "3px",
                  height: "45px",
                }}
                key={k}
              >
                <li style={{ listStyle: "none" }}>{element}</li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <ModeEditOutlineIcon
                    style={{ color: "black", cursor: "pointer" }}
                    onClick={() =>{ 
                    handleShow(element)
                    setInd(k)
                }}
                  />
                  <DeleteIcon style={{ color: "black", cursor: "pointer" }} 
                  onClick={() => remove(k)} />
                  <VisibilityIcon
                    style={{ color: "black", cursor: "pointer" }}
                    onClick={() => {setShoweye(true)
                    setShoweyevalue(element)}}
                  />
                </div>
              </div>
            </>
          );
        })}
        <Modal show={showeye}>
            <h1 className='text-center'>{showeyevalue}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* update modal */}

        <Modal show={show} onHide={handleClose}>
                <h3 className='text-center mt-2'>Update Your Task</h3>
                    <Modal.Header>
                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                        <input name='task' value={update}

                         onChange={(e)=>setUpdate(e.target.value)} className='form-control col-lg-5 mt-2' />
                    </div>

                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} style={{background:"#36454F"}}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>usertask_update()} style={{background:"#36454F"}}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
      </div>
    </>
  );
};

export default Todo;
