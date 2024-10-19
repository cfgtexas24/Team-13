import React from "react";
import DocViewer from "react-doc-viewer";


const ResumeCoverLetterPage = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Roboto, sans-serif" }}>

      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}
      >
        Resume and Cover Letter Templates
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "40px",
        }}
      >
        <div style={{ width: "45%" }}>
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Resume Template
          </h2>
          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>John Doe</h3>
            <p style={{ margin: "5px 0" }}>Email: john.doe@example.com</p>
            <p style={{ margin: "5px 0" }}>Phone: (123) 456-7890</p>
            <p style={{ margin: "5px 0" }}>LinkedIn: linkedin.com/in/johndoe</p>
            <p style={{ margin: "5px 0" }}>GitHub: github.com/johndoe</p>

            <h4
              style={{
                fontSize: "22px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Summary
            </h4>
            <p>
              Detail-oriented software developer with 5+ years of experience in
              building web applications, proficient in JavaScript, React, and
              Node.js.
            </p>

            <h4
              style={{
                fontSize: "22px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Work Experience
            </h4>
            <p style={{ marginBottom: "5px" }}>
              <strong>Software Developer</strong> - XYZ Company
            </p>
            <p style={{ marginBottom: "5px" }}>June 2019 - Present</p>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                Developed and maintained web applications using React and
                Node.js.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver high-quality
                products.
              </li>
              <li>
                Improved site performance by 30% through code optimization.
              </li>
            </ul>

            <h4
              style={{
                fontSize: "22px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Education
            </h4>
            <p>
              <strong>Bachelor of Science in Computer Science</strong> -
              University of ABC
            </p>
            <p>Graduated: May 2019</p>
          </div>
        </div>

        <div style={{ width: "45%" }}>
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Cover Letter Template
          </h2>
          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p>Date: [Insert Date]</p>
            <p>Hiring Manager's Name</p>
            <p>Company Name</p>
            <p>Company Address</p>
            <p>City, State ZIP Code</p>

            <h4
              style={{
                fontSize: "22px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Dear [Hiring Manager's Name],
            </h4>

            <p>
              I am writing to express my interest in the [Job Title] position at
              [Company Name]. With my background in [specific skills related to
              the job], I am confident that I can make a significant
              contribution to your team.
            </p>

            <p>
              In my most recent role as a [Job Title] at [Current or Previous
              Company], I [mention an accomplishment or responsibility that
              matches the job description]. I believe that my experience with
              [mention any relevant tools or software] and my dedication to
              [mention a relevant work ethic or value] make me an ideal
              candidate for this position.
            </p>

            <p>
              I am excited about the opportunity to work with [Company Name] and
              contribute to [mention something you admire about the company].
              Thank you for considering my application. I look forward to the
              opportunity to discuss my qualifications further.
            </p>

            <p>Sincerely,</p>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCoverLetterPage;
