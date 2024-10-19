import React, { useState } from "react";

function FeedbackForm() {
  const [employerName, setEmployerName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1); // Default rating is 1
  const [showConfirmation, setShowConfirmation] = useState(false); // Confirmation state

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      employerName,
      employeeName,
      feedback,
      rating,
    });

    // Show confirmation message
    setShowConfirmation(true);

    // Reset the form after submission
    setEmployerName("");
    setEmployeeName("");
    setFeedback("");
    setRating(1);

    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        Employee Feedback Form
      </h2>

      {/* Confirmation Message */}
      {showConfirmation && (
        <div
          style={{
            backgroundColor: "#D4EDDA",
            color: "#155724",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          Feedback submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Your Name:
          </label>
          <input
            type="text"
            value={employerName}
            onChange={(e) => setEmployerName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Employee's Name:
          </label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Feedback:
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Rating:
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#1E3A8A",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;