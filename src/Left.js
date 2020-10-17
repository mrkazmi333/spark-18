import React, { Component } from "react";

class Left extends Component {
  render() {
    const dataList = this.props.data;
    console.log(dataList);
    return (
      <div className="left-container">
        <div className="list">
          {dataList.map((data, index) => (
            <div>
              <h4>{data.Country}</h4>
              {data.Names.map((name, index) => (
                <div>
                  <input type="checkbox" value={name} />
                  <label htmlFor={name}>{name}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Left;
