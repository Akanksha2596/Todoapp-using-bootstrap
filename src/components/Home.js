import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
import {Add} from "../redux/actions/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const [data, setData] = useState("");
  // console.log(data);

  const dispatch = useDispatch();

  const addData = () => {
    dispatch(Add(data))
    setData("")
  };
  return (
    <>
      <div className="container">
        <section className="mt-3 text-center">
          <h1 style={{ fontSize: "24px" }}>Enter Your Task</h1>

          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input
              name="task"
              value={data}
              className="form-control"
              placeholder="eg.learn react-redux"
              onChange={(e) => setData(e.target.value)}
              required
            />
            <Button
              variant="contained"
              onClick={() => addData()}
              className="mx-2"
              style={{ backgroundColor: "#36454F" }}
            >
              <AddIcon />
            </Button>
          </div>
          <Todo />
        </section>
      </div>
    </>
  );
};

export default Home;
