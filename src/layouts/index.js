import React from "react"
import Link from "gatsby-link"
import NavBar from "../components/NavBar"
import ContactBar from "../components/ContactBar"
import styles from "./styles.module.css"

export default ({ children }) =>
  <div>
    <header>
      <NavBar />
    </header>
    {children()}
    <footer>
      <ContactBar />
    </footer>
  </div>