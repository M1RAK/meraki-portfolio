import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Logo_l from '../../assets/images/logo.svg'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterclass, setLetterClass] = useState('text-animate')
  const nameArray = ['E', 'R', 'A', 'K', 'I']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="left-grid">
          <div className="text-zone">
            <h1>
              <span className={`${letterclass} _11`}>H</span>
              <span className={`${letterclass} _12`}>i,</span>
              <br />
              <span className={`${letterclass} _13`}>I</span>
              <span className={`${letterclass} _14`}>'m</span>
              <img width={45} src={Logo_l} />
              <span className={`${letterclass} _15`}>M</span>
              <AnimatedLetters
                letterClass={letterclass}
                strArray={nameArray}
                idx={16}
              />
              <br />
              <AnimatedLetters
                letterClass={`${letterclass} _22`}
                strArray={'web developer'.split()}
                idx={18}
              />
            </h1>

            <h2>I make websites responsive & accessible to users.</h2>

            <Link to="/portfolio" className="contact-button">
              My Work ?
            </Link>
          </div>
        </div>

        <div className="right-grid">
          <Logo />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
