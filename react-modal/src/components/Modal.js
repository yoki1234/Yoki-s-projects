import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Ha Ha Ha! You shall not pass heheee!</h1>
        </div>
        <div className="body">
          <p>Answer this question: which will be heared first?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            haaaaaaaaaaa!
          </button>
          <button>argrrrrrr!</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
