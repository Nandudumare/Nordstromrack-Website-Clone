import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Navbar = () => {
  const navigate = useNavigate();

  const ColorButton = styled(Button)(() => ({
    color: "white",
    width: "90%",
    marginLeft: "15px",
    marginTop: "15px",
    marginBottom: "15px",
    borderRadius: "0px",
    backgroundColor: cyan[600],
    "&:hover": {
      backgroundColor: "none",
      color: cyan[600],
    },
  }));

  return (
    <div>
      <div className={styles.darkcyan_1}>
        <p>
          Free shipping over $89, or shop online and pick up select orders at a
          Nordstrom Rack or Nordstrom store.{" "}
          <u
            onClick={() => {
              navigate("https://www.nordstromrack.com/ship-return-policy");
            }}
          >
            Learn More
          </u>
        </p>
      </div>

      <div className={styles.div__2}>
        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg"
            alt=""
          />
        </div>

        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input type="text" placeholder="search for product or brand" />
        </div>

        <div className={styles.div__3}>
          <div>
            <div id="drop">
              <div className={styles.dropdown}>
                <p className={styles.dropbtn}>Sign In</p>
                <div className={styles.dropdown_content}>
                  <div className={styles.dropdown_flex}>
                    <div>
                      <ColorButton variant="outlined" color="success">
                        Sign In | Create Account
                      </ColorButton>
                    </div>
                    <div>
                      <h4 style={{ margin: "0px", marginLeft: "15px" }}>
                        Your Account
                      </h4>
                      <div style={{ display: "flex" }}>
                        <span>icon</span>
                        <p>Purchases</p>
                      </div>
                      <a href="#">Exclusive Top Graded Cards</a>
                      <a href="#">Clothing & Accesories</a>
                      <a href="#">SmartPhones ,SmartWatches & Headphones</a>
                      <a href="#">Videogames and consoles</a>
                      <a href="#">Fashion For Men</a>

                      <a href="#">Fashion for Women</a>
                      <a href="#">Toys for Collectibles</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-lock"
              viewBox="0 0 16 16"
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
