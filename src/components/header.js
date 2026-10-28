import React from "react"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

/**
 * Mark a menu link as active whenever the current page lives in the same top-level section
 * (e.g. any `/stdlib/...` page for the `/stdlib/std` link).
 */
const navLinkProps = (link) => ({location}) => {
    const section = `/${link.split("/")[1]}`;
    const active = location.pathname === section || location.pathname.startsWith(`${section}/`);
    return active ? {className: "nav-link active", "aria-current": "page"} : {};
};

const Header = ({ menuLinks }) => (
    <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid site-header-inner">
                <Link className="navbar-brand site-brand" to="/">
                    <StaticImage className={"logo-navbar"} src="../images/nickel-logo-2.svg" alt="logo"/><span className="nickel">Nickel</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav site-nav">
                        {menuLinks.map(link => (
                            <Link key={link.name} className="nav-link" to={link.link} getProps={navLinkProps(link.link)}>{link.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default Header
