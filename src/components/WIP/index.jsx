import React, { Component } from 'react'
import styles from './styles.module.css'

// export default (props) => (
//     <div>
//         Work in progress. 
//         <p>Last updated: {props.time}</p>
//     </div>
// )

const todoList = [
    `Add image/headshot`,
    `Fix randomly large font sizes`,
    `Blog`,
]

export default () => (
    <div className={styles.WIPbutton}>
        WIP
    </div>
)