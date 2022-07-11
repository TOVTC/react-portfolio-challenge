import React from 'react';
import {BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";

function Footer() {
    return (
        <footer className='d-flex justify-content-center align-items-center'>
            <div id='icons' className='d-flex'>
                <a href='https://github.com/TOVTC' className='mx-3'><BsGithub size='lg'/></a>
                <a href='https://www.linkedin.com/in/veronicataichito/' className='mx-3'><BsLinkedin size='lg'/></a>
                <a href='https://www.facebook.com/profile.php?id=100019319591382' className='mx-3'><BsFacebook size='lg'/></a>
            </div>
        </footer>
    )
}

export default Footer;