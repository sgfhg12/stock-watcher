import React from "react";
import './SideRender.css'
const SideRender = props => {
  console.log(props);
  const renderStock = props.stocks.map(ele => {
    return (
      <li>
        <div className="collapsible sidebar"></div>
        <span>{ele.dataset.name}</span>
      </li>
    );
  });
  return (
    <div className="sidebox">
    <ul>
      {renderStock}
      <div className="Form header">
        <form className="stockform" onSubmit={event => props.addStock(event)}>
          <button onClick={event => props.addStock(event)}> ADD STOCK </button>
          <input
            id="stockCode"
            type="text"
            value={props.value}
            onChange={event => props.onChange(event)}
          />
        </form>
      </div>
    </ul>
    </div>
  );
};

export default SideRender;
