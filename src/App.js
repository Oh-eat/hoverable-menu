import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Navigation />
      <Navigation />
      <div>aaa</div>
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <Menu to="/" title="MENU 1" />
      <Menu
        title="MENU 2"
        items={["상영 중", "인기", "평점 우수", "개봉 예정"]}
      />
      <Menu title="MENU 3" items={["가", "나", "다", "라"]} />
      <Menu title="MENU 4" items={["A", "B", "C", "D", "E"]} />
    </nav>
  );
}

function Menu({ to, title, items }) {
  if (items && items.length > 0)
    return <HoverableMenu title={title} items={items} />;
  return (
    <Link className="menu" to={to}>
      <h2>{title}</h2>
    </Link>
  );
}

function HoverableMenu({ title, items }) {
  const [visible, setVisible] = useState(false);

  const setVisibleTrue = useCallback(() => {
    setVisible(true);
  }, []);
  const setVisibleFalse = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div
      className="menu hoverable"
      onMouseEnter={setVisibleTrue}
      onMouseLeave={setVisibleFalse}
    >
      <h2>{title}</h2>
      <ul
        style={{
          height: `${visible ? 30 * items.length : 0}px`,
          color: `${visible ? "white" : "transparent"}`
        }}
      >
        {items.map(item => (
          <li key={item} onClick={setVisibleFalse}>
            <Link to="/">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
