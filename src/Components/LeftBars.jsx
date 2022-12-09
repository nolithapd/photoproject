import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";


import { Link } from "react-router-dom";


import  {Topics } from "./Topics";

import "./LeftBars.css";

export default function Leftbars(){ {
        const [sidebars, setSidebars] = useState(false);
      
        const showSidebar = () => setSidebars(!sidebars);
      
        return (
          <>
            <IconContext.Provider value={{ color: "#FFF" }}>
              {/* All the icons now are white */}
              <div className="leftbars">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              </div>
              <nav className={sidebars ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="leftbars-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
      
                  {Topics.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </IconContext.Provider>
          </>
        );
      }
}