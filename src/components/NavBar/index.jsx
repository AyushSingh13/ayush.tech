import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const links = [
    {
        name: `AyushSingh(beta)`,
        to: `/`
    },
    {
        name: `about`,
        to: `/about`
    },
    {
        name: `blog`,
        to: `/blog`
    },
]

function activateClick() {
    
}

export default () => (
    <nav className={styles.siteNavLinks}>
        {links.map(link => (
            <Link to={link.to} className={styles.link}>{link.name}</Link>
        ))}
    </nav>
)