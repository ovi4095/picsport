import React, { useState } from 'react'
import './Footer.css'
import FooterLogo from '../../assets/images/logo/PicsPort.png'
import Fb from '../../assets/images/socialLinks/fb.png'
import Insta from '../../assets/images/socialLinks/insta.png'
import LinkedIn from '../../assets/images/socialLinks/linkedin.png'
import { Link } from 'react-router-dom'
import { Collapse } from 'reactstrap'
const Footer = () => {
  const [isToggle, setIsToggle] = useState(false)
  const colleps = () => {
    setIsToggle(!isToggle);    
  }
  return (
    <div className='footer'>
        <div className='footerContent'>
            <div className='footerAbout'>
                <img className='footerLogo' src={FooterLogo} alt="Footer logo"/>
                <div className='footerAboutPara'>
                    <h3>About PicsPort</h3>
                    <p>PicsPort is a web platform, where <br/> 
                    you can find photos of different <br/>
                    categories. This Photos are  shown <br/>
                    to people to get opinion form <br/> 
                    peoples. So, enjoy seeing beautiful <br/>
                    and give your opinion.</p>
                </div>
            </div>
            <div className='footerNav'>
                <button className='Footerbtn' onClick={colleps}>Navigation</button>
                <div className='footerNavList'>
                    <Collapse isOpen={isToggle}>
                      <ul is className='collaps'> 
                        <li><Link className='nav-link' to='/home'>Home</Link></li>
                        <li><Link className='nav-link' to='/about'>About</Link></li>
                        <li><Link className='nav-link' to='/gallery'>Gallery</Link></li>
                      </ul>
                    </Collapse>
                  </div>  
            </div>
            <div className='socailLinks'>
              <h3>Social Links</h3>
              <span><img className='socialLinkicon' src={Fb} alt="Facebook"/></span><span><img className='socialLinkicon' src={Insta} alt="Instagram"/></span><span><img className='socialLinkicon' src={LinkedIn} alt="LinkedIn"/></span>
            </div>
        </div>
        <div className='licence'>
          <p>PicsPort Al Amin Ovi © Copyright 2024</p>
        </div>
    </div>
  )
}

export default Footer