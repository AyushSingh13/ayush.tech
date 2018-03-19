import React from "react"
import Link from "gatsby-link"
import NavBar from "../components/NavBar"
import ContactBar from "../components/ContactBar"
import styles from "./styles.module.css"
import WIP from '../components/WIP'

export default ({ children }) => 
  <div>
    {children()}
    <footer>
    </footer>
  </div>