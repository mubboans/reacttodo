import React from "react";

const form = () => {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">label</label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Input field"
          />
        </div>

        {/* <div className="form-group">
            
        </div>
       
        
       
        <button type="submit" className="btn btn-primary">Submit</button> */}
      </form>
    </>
  );
};

export default form;
