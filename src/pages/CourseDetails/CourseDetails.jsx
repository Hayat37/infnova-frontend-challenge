import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CourseDetails.css";

function CourseDetails() {
  return (
    <>
      <Header />

  
      <div className="back-link">
        ← Back to Courses
      </div>

      
      <section className="details-hero">
        <div className="hero-left">
          <p className="course-category">CLOUD COMPUTING</p>

          <h1>Cloud Engineering with AWS</h1>

          <p className="hero-desc">
            Learn how modern companies deploy and scale applications in the cloud.
            Build resilient infrastructure, automate deployments, and understand
            cost-efficient architecture.
          </p>

          <div className="hero-stats">
            <span>👨‍🏫 Instructor: Samuel Getachew</span>
            <span>⏱ 9 weeks</span>
            <span>👥 2,015 enrolled</span>
            <span>⭐ 4.6 rating</span>
          </div>

          <span className="level-pill">Intermediate Level</span>
        </div>

        <div className="hero-right">
          <img src="/assets/Screenshot 2026-02-23 12.57.56 PM.png" alt="AWS Course" />
        </div>
      </section>

      <div className="details-container">

       
        <div className="details-left">

          
          <div className="card-box">
            <h3>📘 What You'll Learn</h3>

            <div className="learn-grid">
              <span>✅ AWS</span>
              <span>✅ Docker</span>
              <span>✅ CI/CD</span>
              <span>✅ Infrastructure</span>
              <span>✅ System Design</span>
            </div>
          </div>

          
          <div className="card-box">
            <h3>Course Description</h3>
            <p>
              Learn how modern companies deploy and scale applications in the
              cloud. Build resilient infrastructure, automate deployments, and
              understand cost-efficient architecture.
            </p>

            <p>
              This comprehensive course is designed to provide you with
              practical, hands-on experience and real-world skills. You'll work
              on projects that simulate actual industry scenarios.
            </p>
          </div>

          
          <div className="card-box instructor-card">
            <h3>Your Instructor</h3>

            <div className="instructor-info">
              <div className="avatar">SG</div>

              <div>
                <h4>Samuel Getachew</h4>
                <p>
                  Expert Cloud Computing professional with over 10 years of
                  industry experience. Passionate about teaching and helping
                  students achieve career goals.
                </p>
              </div>
            </div>
          </div>

        </div>

        
        <div className="details-right">

          <div className="enroll-card">
            <h3>Enroll Today</h3>
            <p className="enrolled-text">
              Join 2,015 students already enrolled
            </p>

            <button className="enroll-btn">Enroll Now</button>
            <button className="wishlist-btn">Add to Wishlist</button>

            <div className="includes">
              <h4>This course includes:</h4>
              <ul>
                <li>✅ 9 weeks of content</li>
                <li>✅ Lifetime access</li>
                <li>✅ Certificate of completion</li>
                <li>✅ Access on mobile and desktop</li>
                <li>✅ Downloadable resources</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default CourseDetails;