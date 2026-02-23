import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;