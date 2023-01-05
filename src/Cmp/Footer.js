import './FooterCss.css'
import {FaFacebook,FaGithub,FaInstagramSquare,FaTwitterSquare,FaYoutube,FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className='text'>
          <ul className='footerText'>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Disclaimer</a></li>
            <li><a href='#'>Terms and Conditions</a></li>
            <li><a href='#'>All Right reserved</a></li>
            <li><a href='#'>CSR Policy</a></li>
          </ul>
        </div>
        <div className='icon'>
          <ul className='footerIcon'>
            <li><a href='#'><FaFacebook/></a></li>
            <li><a href='#'><FaGithub /></a></li>
            <li><a href='#'><FaInstagramSquare /></a></li>
            <li><a href='#'><FaTwitterSquare /></a></li>
            <li><a href='#'><FaYoutube /></a></li>
            <li><a href='#'><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer