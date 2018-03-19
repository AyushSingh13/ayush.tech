import React from "react"
import Link from 'gatsby-link'
import styles from './styles.module.css'
import ContactBar from '../components/ContactBar'
import headshot from '../static/headshot.jpg'

const pageStyle = {
    minWidth: `100vw`,
    minHeight: `100vh`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
}

const nameStyle = {
    marginBottom: `10px`
}

const headshotStyle = {
    borderRadius: `100%`,
    height: `7rem`,
    width: `7rem`
}

export default () => (
    <div style={pageStyle}>
        <main style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>
            <img style={headshotStyle} src={headshot} />
            <h1 style={nameStyle}>ayush <span id={styles.singh}>singh</span></h1>
            <span id={styles.shortBio}>software engineer | london | united kingdom</span>
            <ContactBar />
        </main>
    </div>
)