import React, { useState, useCallback } from 'react'


const ToggleHook = () => {
  //Using useToggle Hook

  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle]
  };


  const [toggle, setToggle] = useToggle();
  return (
    <div>
      <button onClick={setToggle} class="btn btn-primary mb-5">Toggle State</button>


      {toggle && (
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      )}

    </div>
  )
}

export default ToggleHook
