import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

function Authorise({ setAuthorised }) {
  const [selected, setSelected] = useState(0);

  function getButtonStyle(index, type) {
    let style = '';
    if (index === selected) style = "tabButton selectedTab";
    else return "tabButton"

    if (type === 'first') style += ' firstSelected';
    else if (type === 'middle') style += ' middleSelected';
    else if (type === 'last') style += ' lastSelected';

    return style;
  }

  const buttons = [
    { i: 0, type: 'first', text: 'Login' },
    { i: 1, type: 'last', text: 'Sign up' }
  ]

  function renderButtons() {
    return buttons.map(button =>
      <button
        key={button.i}
        onClick={() => setSelected(button.i)}
        className={getButtonStyle(button.i, button.type)}
      >
        {button.text}
      </button>
    )
  }

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <div className="tabsContainer">
          {renderButtons()}
        </div>
        {selected === 0 && <Login setAuthorised={setAuthorised} />}
        {selected === 1 && <Signup goBack={() => setSelected(0)}/>}
      </div>
    </div>
  )
}

export default Authorise;
