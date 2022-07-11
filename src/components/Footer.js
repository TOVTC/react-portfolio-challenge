import React from 'react';
import {BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";

function Footer() {
    return (
        <footer className='d-flex justify-content-center align-items-center'>
            <div id='icons' className='d-flex align-items-center'>
                <a href='https://github.com/TOVTC' className='mx-3 icons'><BsGithub /></a>
                <a href='https://www.linkedin.com/in/veronicataichito/' className='mx-3 icons'><BsLinkedin /></a>
                <a href='https://www.facebook.com/profile.php?id=100019319591382' className='mx-3 icons'><BsFacebook /></a>
            </div>
        </footer>
    )
}

export default Footer;