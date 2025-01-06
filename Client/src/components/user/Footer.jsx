import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <>
    <footer className="footer bg-base p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link to="/login/seller" className="link link-hover">Login as Seller</Link>
    <Link to="/branding" className="link link-hover">Branding</Link>
    <Link to="/design" className="link link-hover">Design</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link to="/about" className="link link-hover">About us</Link>
    <Link to="/contact" className="link link-hover">Contact</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link to="/termsofuse" className="link link-hover">Terms of use</Link>
    <Link to="/privacypolicy" className="link link-hover">Privacy policy</Link>
  </nav>
</footer>
    
    </>
  )
}
