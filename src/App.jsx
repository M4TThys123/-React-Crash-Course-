import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Counter from "./components/Counter"
import React, { useState} from "react";


function App() {
  const [showModal, setShowModal] = useState(false) 
  
  return (
    <>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Sprint 13 afronden" />
        <Todo title="Sprint 14 afronden" />
        <Todo title="Sprint 15 afronden" />
      </div>
      {showModal ? <Modal title="Are you sure?" /> : null}
      {/* {isModalOpen && <Modal title="Are you sure?" />} */}
      {/* {isModalOpen ? <Modal title="Are you sure?" /> : <></>} */}
      <Counter />
    </>
  );
}

export default App;
