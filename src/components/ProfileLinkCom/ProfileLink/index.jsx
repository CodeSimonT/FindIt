import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ProfileLinks } from "src/data/constant";
import { flexStyle } from "src/style/style";

const index = ({ style }) => {
  const location = useLocation();

  return (
    <>
      {/* links */}
      <ul className={`${style} p-0 mb-3 text-white`}>
        {ProfileLinks.map((item) => (
          <li
            className={`${
              item.link === location.pathname
                ? "border-left-fixed"
                : "border-left-transparent "
            } `}
            key={item.id}
          >
            <Link to={item.link} className="hypertag-decoration">
              <div className={`${flexStyle.flexStart} mx-3 py-3 border-top`}>
                <i
                  className={`${item.icons} me-2`}
                  style={
                    item.link === location.pathname
                      ? { color: "white" }
                      : { color: "#b1afb6" }
                  }
                ></i>
                <p
                  className={`${
                    item.link === location.pathname
                      ? "text-white hypertag-decoration"
                      : "hypertag-style"
                  } pointer`}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default index;
