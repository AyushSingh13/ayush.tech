import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css';
import Button from '../Button'

import twitterLogo from './img/twitter-logo.svg'

const contactsMetadata = [      
    {
        title: 'GitHub',
        href: 'https://github.com/AyushSingh13',
        icon: '',
        colors: `#767676`
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ayushvijaysingh/',
        icon: '',
        colors: `#4875B4`
    },
    {
        title: 'Resume/CV',
        href: '',
        icon: '',
        colors: `#e74c3c`

    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/Whoosh13/',
        icon: '',
        colors: `#bc2a8d`
    },
    {
        title: 'Twitter',
        href: 'https://twitter.com/Whoosh13',
        icon: '',
        colors: `#00ACED`
    }
]

export default () => (
    <nav className={styles.contactsNav}>
            {
                contactsMetadata.map(
                    entry => <Button key={entry.title} href={entry.href} colors={entry.colors}>{entry.title}</Button>
                )
            }
    </nav>
)