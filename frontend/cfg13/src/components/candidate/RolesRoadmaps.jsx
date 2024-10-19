import React, { useState } from "react";

import RolesNavbar from "../navBars/rolesNavbar";

function RolesJobs() {
  // Sample job application data
  const [applications] = useState([
    {
      id: 1,
      title: "Intro to Software Development",
      company: "Google",
      payment: "$500",
      Level: "1",
      url: "https://www.fakecompany1.com",
      percentCompleted: 55,
    },
    {
      id: 2,
      title: "Intro to OOPS",
      company: "Google",
      payment: "$400",
      Level: "1",
      url: "https://www.fakecompany2.com",
      percentCompleted: 0,
    },
    {
      id: 3,
      title: "Intro to React",
      company: "Google",
      payment: "$700",
      Level: "2",
      url: "https://www.fakecompany3.com",
      percentCompleted: 10,
    },
  ]);

  // State to track the selected job posting
  const [selectedJob] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* <RolesNavbar /> */}

      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          marginTop: "20px",
          fontsize: "6rem",
        }}
      >
        Job Certificate Journey
      </h1>

      {/* Cards Layout with Flexbox */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Sort applications by percentMatch in descending order */}
        {applications
          .sort((a, b) => b.percentMatch - a.percentMatch)
          .map((app) => (
            <div
              key={app.id}
              style={{
                width: "300px",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f1f1f1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f9f9f9")
              }
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#007BFF" }}>
                {app.title}
              </h3>
              <p style={{ margin: "5px 0" }}>
                <strong>Company:</strong> {app.company}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Payment:</strong> {app.payment}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Level:</strong> {app.Level}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Percent Completed:</strong> {app.percentCompleted}%
              </p>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007BFF", textDecoration: "none" }}
              >
                View More Information
              </a>
            </div>
          ))}
      </div>

      {/* Job Details Section */}
      {selectedJob && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>Job Details</h3>
          <p>
            <strong>Job Title:</strong> {selectedJob.title}
          </p>
          <p>
            <strong>Company:</strong> {selectedJob.company}
          </p>
          <p>
            <strong>Payment:</strong> {selectedJob.Payment}
          </p>
          <p>
            <strong>Level:</strong> {selectedJob.Level}
          </p>
          <p>
            <strong>URL:</strong> {selectedJob.URL}
          </p>
          <p>
            <strong>Percent Completed:</strong> {selectedJob.percentCompleted}%
          </p>
          <a
            href={selectedJob.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007BFF" }}
          >
            View Job Posting
          </a>
        </div>
      )}
    </div>
  );
}

export default RolesJobs;
