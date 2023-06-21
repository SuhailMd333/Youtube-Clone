import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuitem from "./LeftNavMenuitem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";


const LeftNav = () => {
const navigate = useNavigate()
  const {selectCategories,setselectCategories,mobileMenu} = useContext(Context)

  const clickHandler = (name, type) => {
    switch (type) {
        case "category":
            return setselectCategories(name);
        case "home":
            return setselectCategories(name);
        case "menu":
            return false;
        default:
            break;
    }
};

  return (
    <div
    style={{ scrollbarColor: "pink lightblue"}}
    className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
    }`}
>
    <div className="flex px-5 flex-col">
        {categories.map((item) => {
            return (
                <React.Fragment key={item.name}>
                    <LeftNavMenuitem
                        text={item.type === "home" ? "Home" : item.name}
                        icon={item.icon}
                        action={() => {
                            clickHandler(item.name, item.type);
                            navigate("/");
                        }}
                        className={`${
                          selectCategories === item.name
                                ? "bg-white/[0.15]"
                                : ""
                        }`}
                    />
                    {item.divider && (
                        <hr className="my-5 border-white/[0.2]" />
                    )}
                </React.Fragment>
            );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5]  text-bold text-[14px]">
            Cloned by: Suhail @Md
        </div>
    </div>
</div>
  )
}

export default LeftNav
