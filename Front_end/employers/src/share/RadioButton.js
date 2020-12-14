import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const RadioButton = () => {
  return (
    <div className="row mr-2">
      <div className="col-sm-12">
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={true} />
              Option 1
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              Option 2
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" />
              Option 3
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
