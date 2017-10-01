import React from "react"
import Link from 'gatsby-link'
import styles from './styles.module.css'

const uclAnchor = <a className={styles.UCL} href='http://www.ucl.ac.uk/'>UCL</a>
const jhuAnchor = <a className={styles.JHU} href='https://www.jhu.edu/'>Johns Hopkins</a>

const pageStyle = {
    padding: `40px 5em 58px 5em`,
    minHeight: `100vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
}

export default () => (
    <main style={pageStyle}>
        <h1>I'm Ayush Singh.</h1>
        <h2>Aspiring software engineer, data scientist and entrepreneur.</h2>
        <h6>
            Fourth year student at {uclAnchor}, former {jhuAnchor} exchange student. 
        </h6>
    </main>
)