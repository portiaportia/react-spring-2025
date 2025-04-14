import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteHousePlan = (props) => {
  const [result, setResult] = useState("");

  const deleteHousePlan = async() => {
   
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button >No</button>            
              <button >Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteHousePlan;