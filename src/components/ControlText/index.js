import React from "react";
// import { MinusSquareOutlined } from "@ant-design/icons";
// import { PlusSquareOutlined } from "@ant-design/icons";
import "./index.css"
function ControlText(props) {
  // const [colors] =useState(["red", "green","blue","black"])
  const { size } = props;
  const { decreaseSizeProps, increaseSizeProps, changeFontProps, changeColorProps, changeSizeProps } = props;

  const updateFont = (e) => {
    console.log("Font-family:" + e.target.value);
    if (e.target.value === "san-serif") {
      changeFontProps("Times New Roman");
    } else if (e.target.value === "serif") {
      changeFontProps("Arial");
    } else {
      changeFontProps("Lucida Console");
    }
  };

  const handleChange = e => {
    console.log(e.target.value);
    changeSizeProps(e.target.value)
  }
  const handleColor = (e) =>{
    console.log(e.target.value);
    console.log(`Color id: ${e.target.id}`);
    if (e.target.id === "red")
    {
      changeColorProps("red")
    }
    else if (e.target.id === "green")
    {
      changeColorProps("green")
    }
    else if (e.target.id === "blue")
    {
      changeColorProps("blue")
    }
    else if (e.target.id === "violet")
    {
      changeColorProps("violet")
    }
    else if (e.target.id === "brown")
    {
      changeColorProps("brown")
    }
  }
  return (
    <div className="filter-text">
      <h2>Selection Filter</h2>
      <div className="font-size-field">
        <label className="text-label">Text Size: </label>
        <input id="text-size-input" type="number" value={size} onChange={handleChange}/>
        {/* <MinusSquareOutlined onClick={decreaseSizeProps} />
        <PlusSquareOutlined onClick={increaseSizeProps} /> */}
      </div>
      <div className="font-family-field">
      <label className="text-label">Text Family: </label>
        <select className="font-item" onChange={updateFont}>
          <option value="san-serif">
            Times New Roman
          </option>
          <option value="serif">
            Arial
          </option>
          <option value="monospace">
            Lucida Console
          </option>
        </select>
      </div>
      <div className="font-color-field">
        <label className="text-label">Text Color: </label>
        <div className="color-item" >
        <div><button className="color-btn" id="red" onClick={handleColor}/></div>
        <div><button className="color-btn" id="blue" onClick={handleColor}/></div>
        <div><button className="color-btn" id="green" onClick={handleColor}/></div>
        <div><button className="color-btn" id="violet" onClick={handleColor}/></div>
        <div><button className="color-btn" id="brown" onClick={handleColor}/></div>
        </div>
      </div>
    </div>
  );
}

export default ControlText;
