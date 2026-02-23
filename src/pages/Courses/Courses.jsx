import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./Courses.css";

function Courses() {

  const courses = [
    {
      category: "Web Development",
      level: "Intermediate",
      title: "Full Stack Development Bootcamp",
      instructor: "Lidetu Tadesse",
      image: "src/assets/christopher-gower-m_HRfLhgABo-unsplash.jpg",
      weeks: 12,
      students: 3124,
      rating: 4.9,
    },
    {
      category: "Data Science",
      level: "Advanced",
      title: "Practical Machine Learning",
      instructor: "Bereket Tesfaye",
      image: "src/assets/Screenshot 2026-02-23 12.53.18 PM.png",
      weeks: 10,
      students: 1742,
      rating: 4.8,
    },
    {
      category: "Design",
      level: "Beginner",
      title: "UI UX Design for Modern products",
      instructor: "Hana Alemayehu",
      image: "/src/assets/Screenshot 2026-02-23 12.55.31 PM.png",
      weeks: 8,
      students: 2891,
      rating: 4.7,
    },
    {
      category: "Cloud Computing",
      level: "Intermediate",
      title: "Cloud Engineering with AWS",
      instructor: "Samuel Getachew",
      image: "src/assets/Screenshot 2026-02-23 12.57.56 PM.png",
      weeks: 9,
      students: 2015,
      rating: 4.6,
    },
    {
      category: "Mobile Development",
      level: "Intermediate",
      title: "Mobile App Development with Flutter",
      instructor: "Natnael Desta",
      image: "src/assets/Screenshot 2026-02-23 12.58.37 PM.png",
      weeks: 10,
      students: 2563,
      rating: 4.8,
    },
    {
      category: "Security",
      level: "Beginner",
      title: "Cybersecurity Foundations",
      instructor: "Meklit Girma",
      image: "src/assets/Screenshot 2026-02-23 12.59.10 PM.png",
      weeks: 6,
      students: 1489,
      rating: 4.7,
    },
    {
      category: "Data Science",
      level: "Beginner",
      title: "Data Analytics with Python",
      instructor: "Abel Hailu",
      image: "src/assets/Screenshot 2026-02-23 12.59.46 PM.png",
      weeks: 7,
      students: 2674,
      rating: 4.8,
    },
    {
      category: "BlockChain",
      level: "Advanced",
      title: "BlockChain & Fintech systems",
      instructor: "Yonas Bekele",
      image: "src/assets/Screenshot 2026-02-23 1.00.17 PM.png",
      weeks: 11,
      students: 1321,
      rating: 4.5,
    },
  ];

  return (
    <div className="courses-page-container">
      <Header />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-inner">
          <h1>Explore Our Courses</h1>
          <p>
            Master new skills with expert-led courses designed for the modern learner.
            Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="filter-section">
        <div className="filter-card">
          <input
            className="main-search"
            placeholder="Search courses, instructors..."
          />
        </div>

        <p className="showing-text">
          Showing {courses.length} of {courses.length} courses
        </p>
      </section>

      {/* COURSES */}
      <div className="courses-grid-container">
        <div className="courses-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Courses;