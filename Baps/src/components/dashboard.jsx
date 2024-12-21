// App.js
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;

// components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Student Dashboard</h1>
    </header>
  );
};

export default Header;

// components/Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Grades</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

// components/MainContent.js
import React from "react";
import "./MainContent.css";
import Courses from "./sections/Courses";
import Grades from "./sections/Grades";
import Profile from "./sections/Profile";

const MainContent = () => {
  return (
    <main className="main-content">
      <Courses />
      <Grades />
      <Profile />
    </main>
  );
};

export default MainContent;

// components/sections/Courses.js
import React from "react";

const Courses = () => {
  return (
    <section className="courses">
      <h2>Courses</h2>
      <ul>
        <li>Mathematics</li>
        <li>Physics</li>
        <li>Computer Science</li>
      </ul>
    </section>
  );
};

export default Courses;

// components/sections/Grades.js
import React from "react";

const Grades = () => {
  return (
    <section className="grades">
      <h2>Grades</h2>
      <ul>
        <li>Mathematics: A</li>
        <li>Physics: B+</li>
        <li>Computer Science: A+</li>
      </ul>
    </section>
  );
};

export default Grades;

// components/sections/Profile.js
import React from "react";

const Profile = () => {
  return (
    <section className="profile">
      <h2>Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
    </section>
  );
};

export default Profile;

// App.css
.dashboard-container {
  font-family: Arial, sans-serif;
}

.dashboard-body {
  display: flex;
}

// Header.css
.header {
  background-color: #6200ea;
  color: white;
  padding: 1rem;
  text-align: center;
}

// Sidebar.css
.sidebar {
  background-color: #f5f5f5;
  width: 200px;
  padding: 1rem;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 0.5rem 0;
}

// MainContent.css
.main-content {
  flex: 1;
  padding: 1rem;
}

// Example Usage
// Run the project using a tool like Create React App or Vite.
