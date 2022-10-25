import React, { useState} from "react";

function Counter({ title }) {

    let i = 0;
    console.log(i)
    function minEen(i) {
    i = i++;
    console.log(i)
  }

  return (
    <div className='counter__wrapper'>
        <button onClick={() => minEen(1)}>-</button>
    </div>
  );
}
//55:30
export default Counter;