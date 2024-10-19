import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

const ResumeCoverLetterPage = () => {
  const resumeURI = require('../../assets/resume-template.jpeg');
  const coverLetterURI = require('../../assets/cover-letter.jpg');

  const resume = [{ uri: resumeURI }];
  const coverLetter = [{ uri: coverLetterURI }];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Resume and Cover Letter Templates
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Space between the two viewers
            gap: "20px", // Gap between columns
            alignItems: "flex-start", // Align content at the top
            marginBottom: "40px",
          }}
        >
          {/* Resume Section */}
          <div style={{ width: '48%' }}>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <a href={resumeURI} download="resume-template.jpeg">
                <button
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#1e3a8a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginBottom: '10px', // Adds space below the button
                  }}
                >
                  Download Resume
                </button>
              </a>
            </div>
            <DocViewer
              documents={resume}
              pluginRenderers={DocViewerRenderers}
              style={{ width: '95%', height: '600px' }}
            />
          </div>

          {/* Cover Letter Section */}
          <div style={{ width: '48%' }}>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <a href={coverLetterURI} download="cover-letter.jpg">
                <button
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#1e3a8a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginBottom: '10px', // Adds space below the button
                  }}
                >
                  Download Cover Letter
                </button>
              </a>
            </div>
            <DocViewer
              documents={coverLetter}
              pluginRenderers={DocViewerRenderers}
              style={{ width: '95%', height: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCoverLetterPage;
