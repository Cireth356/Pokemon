import React from 'react';

const Filter = props => {
  return (
    <div className="search">
      <input id="search" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default Filter;
