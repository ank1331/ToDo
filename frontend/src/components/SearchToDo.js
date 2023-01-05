import React, { useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const BASE_URL = "loose-prose-production.up.railway.app"
export default function SearchToDo() {
  const [isSearch, setIsSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("")

  const handleSearch = async (newval) => {
    if (!isSearch) {
      alert("Enter the Title to be searched");
    } else {
      const resp = await axios.get(`${BASE_URL}/getUsers`);
    //   console.log(resp);
      console.log(resp.data.newusers.length);
      console.log(isSearch);
      if(resp.data.newusers.length>0){
        
        for (let index = 0; index < resp.data.newusers.length; index++)
         {
            console.log(resp.data.newusers[index].title)
            if(isSearch === resp.data.newusers[index].title){
            console.log("Hello");;
            setResult("ToDo Present")
            
            }
            else{
              console.log("bye");
              setResult("ToDo not present")
             }
        }
      }
    }
  };
  const resetvalues = ()=> {
    setIsSearch("");
    setIsOpen(false)
    setResult("")
  }

  return (
    <div class="flex justify-around py-10">
      <button
        class="bg-sky-500 flex w-60 h-12 justify-center items-center rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        {" "}
        Search Todo
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>
          <div class="text-white text-2xl flex justify-center py-2 font-bold">
            SEARCH
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <label class="text-white text-lg flex justify-center font-bold">
              Enter Title
            </label>
            <div class="flex justify-center">
              <input
                placeholder="Enter Title"
                class="px-2 w-3/4 rounded-lg h-8"
                type="text"
                id="name"
                value={isSearch}
                onChange={(event) => {
                  setIsSearch(event.target.value);
                }}
              ></input>
              
            </div>

            <div class="pt-4 flex justify-around">
              <button
                class="bg-sky-500 rounded-lg w-32 h-8"
                onClick={() => {
                  handleSearch(isSearch);

                }}
                
              >
                Search
              </button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
            <div class="flex pt-8 justify-center">
            <input
                placeholder="Output for Searched Task"
                class=" w-3/4 px-2 rounded-lg h-8"
                type="text"
                id="name"
                value={result}
                pt-4
              ></input>
            </div>
          <div class="mt-6 flex justify-around">
            <button
              class="bg-sky-500 rounded-lg w-32 h-8"
              onClick={() => resetvalues()}
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
