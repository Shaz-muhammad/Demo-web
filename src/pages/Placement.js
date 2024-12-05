
import React from "react";
import "./Placement.css";

function Placement() {
  return (
    <div className="placement-container">
      <header className="placement-header">
        <h1>PLACEMENT & TRAINING CELL</h1>
      </header>
      <nav className="placement-nav">
        <ul>
          <li>Overview</li>
          <li>Faculty Coordinators</li>
          <li>Workshop</li>
          <li>Placement Schedule</li>
          <li>Placed Students Details</li>
          <li>MoUs</li>
          <li>CPOD</li>
        </ul>
      </nav>
      <section className="placement-content">
        <div className="content-overview">
          <h2>Placement and Training Cell</h2>
          <p>
            The Placement and Training Cell at PACE is the cornerstone of our
            students' journey to a successful career...
          </p>
        </div>
        <div className="faculty-coordinators">
          <h3>Faculty Coordinators 2023-24</h3>
          <table>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Prof. Mohammad Hussain K</td>
                <td>Training & Placement Officer</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ms. Fathima Naizam</td>
                <td>Asst. TPO</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mr. Mohammed Faizal N</td>
                <td>CPOD Head</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </section>
      <footer className="placement-footer">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>PA Educational Trust</li>
            <li>Our Chairman</li>
            <li>Principal's Message</li>
            <li>Vision & Mission</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Admissions</li>
            <li>Placements</li>
            <li>Online Admission</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>
            P.A. College of Engineering
            <br />
            Nadupadav, Mangalore
          </p>
          <p>Phone: +91 9980022000</p>
        </div>
      </footer>
    </div>
  );
}

export default Placement;