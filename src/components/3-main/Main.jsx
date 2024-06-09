import { useState } from "react";
import "./main.css";
import { MyProject } from "./myProjects.js";
import { AnimatePresence, motion } from "framer-motion";
export default function Main() {
  const [CurrentActive, setCurrentActive] = useState("all")
  const [Array, setArray] = useState(MyProject)
  return (

    <main className="flex">
      <section className="flex left-section">
        <button onClick={() => {setCurrentActive("all")
          setArray(MyProject)
        }} className={CurrentActive === "all"? "active" : null }>All projects</button>
        <button onClick={() => {
          setCurrentActive("vue")
          const newArray = MyProject.filter((item) => {
            return item.category === "vue"
           })
           setArray(newArray)
         }} className={CurrentActive === "vue"? "active" : null }>Vue.js</button>
        <button onClick={() => {setCurrentActive('react')
                    const newArray = MyProject.filter((item) => {
                      return item.category === "react"
                     })
                     setArray(newArray)
        }} className={CurrentActive === "react"? "active" : null} >React.js</button>
        <button onClick={() => { setCurrentActive("graphic")
                    const newArray = MyProject.filter((item) => {
                      return item.category === "graphic"
                     })
                     setArray(newArray)
        }} className={CurrentActive === "graphic"? "active" : null} >Graphic</button>
        <button onClick={() => { setCurrentActive('ui/ux')
                    const newArray = MyProject.filter((item) => {
                      return item.category === "ui/ux"
                     })
                     setArray(newArray)
         }} className={CurrentActive === "ui/ux"? "active" : null}>UI/UX</button>
      </section>
      <section className="right-section flex">
      <AnimatePresence>
        {Array.map((item) => {
          return(
            <motion.article
            layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
             key={item.id} className="card">
            <img src={item.img} width={270} height={150} alt="project 1"  />
            <div className="box" style={{width:'270px'}}>
              <h1 className="title">{item.title}</h1>
              <p className="subtitle">
                of Computer Science Engineering Department of Information
                Technology{" "}
              </p>
              <div className="flex icons">
                <div style={{gap:'15px'}} className="flex">
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
                <a  className='link flex' href="">
                  more <span style={{alignSelf:'end', marginLeft:'5px'}} className="icon-arrow-right-outline"></span>
                </a>
              </div>
            </div>
          </motion.article>
          )
         })
}
</AnimatePresence>
      </section>
    </main>
  );
}
