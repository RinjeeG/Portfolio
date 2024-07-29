import gitIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import mailIcon from '../assets/icons/mail.png';


function Footer() {
    return (
        <div className="footer">
            <a href=" https://github.com/RinjeeG"><img src={gitIcon} alt="logo of github" className="icon"/></a>
            <a href=" https://www.linkedin.com/in/rinjee-sherpa-13b38b275/"><img src={linkedinIcon} alt="logo of linked in"className="icon"/></a>
            <a href="#"><img src={mailIcon} alt="logo of mail." className="icon"/></a> 
        </div>
    );
}

export default Footer;