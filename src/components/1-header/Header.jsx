import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
const [ShowModal, setShowModal] = useState(false)
const [theme, setTheme] = useState(localStorage.getItem('currentMode'))

useEffect(() => {
  if (theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
  else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}, [theme])

  return (
    <header className="flex">
      <button className="button-menu flex" onClick={() => {
        setShowModal(true)
       }}> <span className="icon-th-menu-outline" /> </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>

      <button onClick={() => {
        localStorage.setItem('currentMode', theme === 'light'? 'dark' : 'light')
        setTheme(localStorage.getItem('currentMode'))
      }}
        className="button-moon flex"> {theme === "dark"?(
          <span className="icon-moon-o" />
        ):(
          <span className="icon-weather-sunny" />
        )} </button>
      {ShowModal && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className="icon-close-solid" onClick={() => {
                setShowModal(false)
               }}></button>
              </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
