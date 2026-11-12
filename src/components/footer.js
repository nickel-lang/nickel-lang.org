import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
    faArrowUp,
    faComments,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <footer className="site-footer">
        <div>
            © 2021 Copyright: <a href={'https://github.com/tweag/nickel/graphs/contributors'} className={'link-footer'}>Nickel contributors</a>
        </div>
        <nav className="site-footer-links">
            <a href="https://twitter.com/nickel_lang"><FontAwesomeIcon icon={faTwitter}/> Twitter</a>
            <a href="https://github.com/tweag/nickel"><FontAwesomeIcon icon={faGithub}/> GitHub</a>
            <a href="https://github.com/tweag/nickel/discussions"><FontAwesomeIcon icon={faComments}/> Discussions</a>
            <a href="https://discord.gg/vYDnJYBmax"><FontAwesomeIcon icon={faMessage}/> Discord</a>
            <a href="#" aria-label="Back to top"><FontAwesomeIcon icon={faArrowUp}/></a>
        </nav>
    </footer>
)

export default Footer
