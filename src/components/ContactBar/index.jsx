import React, { Component } from 'react'
import Link from 'gatsby-link'

import twitterLogo from './logos/#e74c3c/twitter-logo.svg'
import githubLogo from './logos/#e74c3c/github-logo.svg'
import linkedInLogo from './logos/#e74c3c/linkedin-logo.svg'
import instagramLogo from './logos/#e74c3c/instagram-logo.svg'
import cvSymbol from './logos/#e74c3c/cv-symbol.svg'
import spotifyLogo from './logos/#e74c3c/spotify-logo.svg'

const contactsMetadata = [
    {
        title: 'GitHub',
        href: 'https://github.com/AyushSingh13',
        icon: githubLogo,
        colors: `#767676`
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ayushvijaysingh/',
        icon: linkedInLogo,
        colors: `#4875B4`
    },
    {
        title: 'Resume/CV',
        href: 'https://www.dropbox.com/s/b2vsopcdtv1ngl6/UCL_Ayush_Singh.pdf?dl=0',
        icon: cvSymbol,
        colors: `#e74c3c`

    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/Whoosh13/',
        icon: instagramLogo,
        colors: `#bc2a8d`
    },
    {
        title: 'Spotify',
        href: 'https://open.spotify.com/user/whoosh13',
        icon: spotifyLogo,
        colors: ''
    },
    {
        title: 'Twitter',
        href: 'https://twitter.com/Whoosh13',
        icon: twitterLogo,
        colors: `#00ACED`
    }
]

const logoStyle = {
    width: `1.5em`,
    height: `1.5em`,
    margin: 0
}

const contactBarStyle = {
    display: `flex`,
    margin: `1em 0 0 0`,
    padding: `0.5em`,
    justifyContent: `space-around`,
    alignItems: `center`,
    width: `100%`,
}

export default () => (
    <nav style={contactBarStyle}>
        {
            contactsMetadata.map(
                entry =>
                    <a
                        style={{ height: `1.5em`, width: `1.5em`, margin: 0 }}
                        key={entry.title}
                        href={entry.href}
                    >
                        <img style={{ margin: 0 }} src={entry.icon} alt={entry.title} />
                    </a>
            )
        }
    </nav>
)