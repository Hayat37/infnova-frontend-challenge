import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        <div className="footer-brand">
          <h3>INFNOVA Academy</h3>
          <p>
            Empowering learners worldwide with cutting-edge technology courses. 
            Start your journey to success with expert-led training.
          </p>
        </div>

        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Courses</p>
          <p>Instructors</p>
          <p>Contact</p>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 INFNOVA Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
