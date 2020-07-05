import React, { useState } from 'react';
import Cookies from 'js-cookie';
import AddPost from '../components/AddPost';

function Home({ setAuthorised }) {
  const [selected, setSelected] = useState(0);

  function logout() {
    Cookies.remove('token');
    setAuthorised(false);
  }

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
    { i: 0, type: 'first', text: 'Add Post' },
    { i: 1, type: 'last', text: 'Log out', cb: logout }
  ]

  function renderButtons() {
    return buttons.map(button =>
      <button
        key={button.i}
        className={getButtonStyle(button.i, button.type)}
        onClick={() => button.cb ? button.cb() : setSelected(button.i)}
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
        {selected === 0 && <AddPost />}
      </div>
    </div>
  )
}

export default Home;
