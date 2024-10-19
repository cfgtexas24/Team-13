import mongoose from "mongoose";
// const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    companySize: {
        type: String,
        required: true
    },
    foundedYear: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }]
});

export const Employer = mongoose.models.Employer || mongoose.model("Employer", employerSchema);
// module.exports = mongoose.models.Employer || mongoose.model("Employer", employerSchema);