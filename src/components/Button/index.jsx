import React, { Component } from 'react'
import styles from './styles.module.css'

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: `transparent`,
            color: this.props.colors,
            borderImageSlice: 1
        }
        this.mouseHover = this.mouseHover.bind(this)
        this.mouseUnhover = this.mouseUnhover.bind(this)
    }

    mouseHover() {
        this.setState({
            borderBottom: `1.5px solid ${this.props.colors}`,
            borderImage: this.props.colors,
        })
    }

    mouseUnhover() {
        this.setState({
            background: `transparent`,
            border: `none`
        })
    }

    render() {
        return (
            <a href={this.props.href} className={styles.contactButton}
               style={{
                   color: this.state.color,
               }}
               onMouseOver={this.mouseHover}
               onMouseLeave={this.mouseUnhover}
            >
                {this.props.children}
            </a>
        )
    }
}

// export default (props) => (
//     <a href={props.href} className={styles.contactButton}
//        style={{
//           color: props.colors,
//        }}
//     >
//         {props.children}
//     </a>
// )