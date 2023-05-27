import Link from "next/link";
import { Fragment, useState } from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderSidebar from "./HeaderSidebar";
import { Blog, Contact, Donation, Home, Page, Portfolio } from "./Menus";
import MobileMenu from "./MobileMenu";
import StickNav from "./StickNav";

const Header4 = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const openMobileMenu = () => {
    document.querySelector("body").classList.add("mobile-menu-visible");
  };
  const closMobileMenu = () => {
    document.querySelector("body").classList.remove("mobile-menu-visible");
  };
  let logo = "assets/images/logo-three.png",
    sidebarImg = "assets/images/icons/icon-menu.png",
    btnClass = "primary_btn-two small";
  return (
    <Fragment>
      <header className="main-header header-style-five">
        <div className="header-top-two">
          <div className="theme_container">
            <div className="header-top-two-wrapper-box">
              <div className="left-column">
                <ul className="header-top-contact-info">
                  <li>
                    <div className="icon">
                      <i className="flaticon-phone" />
                    </div>
                    <h6>Hotline</h6>
                    <p>
                      <a href="tel:+012(345)678">+012 (345) 678</a>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-map" />
                    </div>
                    <h6>Main Address</h6>
                    <p>552 Main Street, New York</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-envelope" />
                    </div>
                    <h6>Email Us</h6>
                    <p>
                      <a href="mailto:hotline@gmail.com">hotline@gmail.com</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="right-column">
                <div className="header-top-two-social-link">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Upper */}
        <div className="header-upper">
          <div className="header-container-box">
            <div className="inner-container">
              <div className="left-column">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src="assets/images/logo-three.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="language">
                  <select>
                    <option data-display="English">English</option>
                    <option value={1}>French</option>
                    <option value={2}>Spanish</option>
                  </select>
                </div>
                {/*Nav Box*/}
              </div>
              <div className="middle-column">
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler"
                    onClick={() => openMobileMenu()}
                  >
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <a href="#">Home </a>
                          <ul>
                            <Home />
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Page </a>
                          <ul>
                            <Page />
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Donation</a>
                          <ul>
                            <Donation />
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Blog</a>
                          <ul>
                            <Blog />
                          </ul>
                        </li>
                        <Portfolio />
                        <Contact />
                      </ul>
                    </div>
                  </nav>
                  {/* language */}
                </div>
              </div>
              <div className="right-column">
                <div
                  className="search-toggler"
                  onClick={() => setSearchToggle(true)}
                >
                  <i className="far fa-search" />
                </div>
                <div
                  className="menu-bar sidemenu-nav-toggler"
                  onClick={() => setSideBarToggle(true)}
                >
                  <img src="assets/images/icons/icon-bar4.png" alt="" />
                </div>
                <a href="#" className="primary_btn-two small">
                  Donation
                  <i className="far fa-heart" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <StickNav
          openMobileMenu={() => openMobileMenu()}
          openSidebar={() => setSideBarToggle(true)}
          openSearchBar={() => setSearchToggle(true)}
          logo={logo}
          btnClass={btnClass}
        />
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}
        <MobileMenu close={() => closMobileMenu()} />
        {/* End Mobile Menu */}
        <div
          className="nav-overlay"
          style={{ display: sideBarToggle ? "block" : "none" }}
          onClick={() => setSideBarToggle(false)}
        />
      </header>
      <HeaderSidebar
        open={sideBarToggle}
        close={() => setSideBarToggle(false)}
      />
      <HeaderSearch open={searchToggle} close={() => setSearchToggle(false)} />
    </Fragment>
  );
};
export default Header4;
