import { useEffect, useState } from 'react';
import {
    faNode,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from "react-loaders";
import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    const [letterclass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    return(
     <>
        <div className="container about-page">
            <div className="left-grid">
           <div className="text-zone">
           <h1>
            About Me
            {/* <AnimatedLetters  
            letterClass={letterclass}
            strArray={['A','b','o','u','t',' ','M','e']}
            idx={15}
            /> */}
            </h1>
            <p>
I'm a front-end developer working on building beautiful websites
that are responsive on all devices. mobile, tablet & PC's.
</p>
<p>
Delivering well crafted user experiences by
paying close attention to the nuances of performance, optimization, and design.
</p>

<h4>
  I dislike Ugly L00king Websites. <br />
  Why substance without style ?
</h4>
           </div>
          
            </div>
            <div className="right-grid">
            <div className="stage-cube-wrapper">
  <div className="cube-spinner">
  <div className="face1">
  <FontAwesomeIcon icon={faNode} color="green" />
</div>
<div className="face2">
  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
</div>
<div className="face3">
  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
</div>
<div className="face4">
  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
</div>
<div className="face5">
  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
</div>
<div className="face6">
  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
</div>
  </div>
</div>
            </div>
        </div>
     <Loader type='pacman' />
     </>
    )
}

export default About