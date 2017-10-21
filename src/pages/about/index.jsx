import React from 'react'

import headshot from './img/headshot.jpg'

const headshotStyle = {
    borderRadius: `50%`,
    height: `11rem`,
    width: `11rem`
}

const aboutStyle = {
    padding: `0 12em 0 12em`,
    minHeight: `100vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`
}

export default () => (
    <main style={aboutStyle}>
        <img src={headshot} style={headshotStyle} />
        <div style={{ overflow: `auto` }}>
        <p>
        I am a 4th year student studying Electrical & Electronic Engineering (MEng) at University College London. 
        While exploring my career choices at the end of my second year, I found myself drawn into the London startup scene through talks organised by Entrepreneur First. 
        This turned my academic focus towards software engineering and computer science, and I began to teach myself the basics of both disciplines using resources such as David Malan’s CS50 course at HarvardX and FreeCodeCamp.
        <br/><br/>
        Inspired by an EF talk given by Suranga Chandratillake, I applied to the EFx Internships Program to intern at one of EF’s portfolio deep-tech startups. 
        Here, I had the unique opportunity to intern with Accelerated Dynamics and explore drone technologies, control them using RoS, and create a front-end from scratch using AngularJS to control multiple drones simultaneously. 
        Shortly after this internship, I took the opportunity to study abroad at Johns Hopkins University for my 3rd year, where I seized the liberty to study more courses within the CS curriculum (including Machine Learning and Principles of Programming Languages), solidifying my foundation in computer science theory.
        <br/><br/>
        The summer after Hopkins, I worked as a Data Science intern at Reflexis in Atlanta, Georgia, where I used conventional timeseries models and supervised learning methods on past timeseries data to forecast sales data. 
        While interning at Reflexis I was also working as a remote software engineering intern at Semester.ly, an easy-to-use class scheduler webapp founded at Hopkins, using React, Redux and Django to make bugfixes and adding features.        
        <br/><br/>
        I am now working hard on my own time to dive deeper into machine learning concepts, while also realising personal projects that I have ideated using the frameworks and technologies I have learned throughout my academic career. 
        I hope to further develop my software engineering skills and use them to make an impact. 
        <br/><br/>
        </p>
        </div>
    </main>
)