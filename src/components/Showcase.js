import React from 'react'
import LeftImage from '../assets/images/img-2.svg'
import RightImage from '../assets/images/img-1.svg'

const Showcase = () => {
  return (
    <section className="__showcase">
      <div className="container">
        <img src={LeftImage} />
        <div>mitten</div>
        <img src={RightImage} />
      </div>
    </section>
  )
}

export default Showcase