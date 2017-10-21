import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const links = [
    {
        name: `AyushSingh(beta)`,
        to: `/`,
        id: 1
    },
    {
        name: `about`,
        to: `/about`,
        id: 2
    },
    {
        name: `blog`,
        to: `/blog`,
        id: 3
    },
]

export default () => (
    <nav className={styles.siteNavLinks}>
        {links.map(link => (
            <Link key={link.id} to={link.to} className={styles.link}>{link.name}</Link>
        ))}
    </nav>
)