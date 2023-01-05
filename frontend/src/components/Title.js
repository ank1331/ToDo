import React, { useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const BASE_URL = "loose-prose-production.up.railway.app"

export default function Title() {
  const [userName, setUserName] = useState("");
  const [userTask, setUsertask] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  console.log(userName, userTask);

  const submitData = async () => {
    const data = {
      title: userName,
      tasks: userTask,
    };
    const res = await axios.post(`${BASE_URL}/createUser`, data);
    console.log(res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitData();
    setUserName("");
    setUsertask("");
  };

  return (
    <div>
      
      <div class="flex justify-around py-10">
        <button
          class="bg-sky-500 flex w-60 h-12 justify-center items-center rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          {" "}
          Add Task
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader >
          <div class="text-white text-2xl flex justify-center py-2 font-bold">
          ADD TASK
          </div>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div>
              <label class="text-white text-lg flex justify-center font-bold">
                TITLE
              </label>
              <div class="flex justify-center">
              <input
                placeholder="Enter Title"
                class="px-2 w-3/4 rounded-lg h-8"
                type="text"
                id="name"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              ></input>
              </div>
      
              <div>
                <label class="text-white text-lg flex justify-center font-bold">TASKS</label>
                <div class="flex justify-center">
                 <input
                  placeholder="Enter Title"
                  class="px-2 w-3/4 rounded-lg h-8"
                  type="text"
                  id="tasks"
                  value={userTask}
                  onChange={(event) => {
                    setUsertask(event.target.value);
                  }}
                ></input>
                </div>
              </div>
              </div>
              <div class="pt-10 flex justify-around">
                <button class="bg-sky-500 rounded-lg w-32 h-8" type="submit">
                  {" "}
                  Add ToDo
                </button>
              </div>
           
          </form>
        </ModalBody>
        <ModalFooter>
          <div class="mt-8 flex justify-around">
            <button
              class="bg-sky-500 rounded-lg w-32 h-8"
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Cancel
            </button>
          </div>
        </ModalFooter>
      </Modal>

    </div>
  );
}
