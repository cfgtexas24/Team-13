import mongoose from "mongoose";
// const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
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
    description: {
        type: String,
        required: true
    },
    targetedSkills: {
        type: [String],
        required: true
    },
    // jobs: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Job"
    // }]
});

export const Employer = mongoose.models.Employer || mongoose.model("Employer", employerSchema);
// module.exports = mongoose.models.Employer || mongoose.model("Employer", employerSchema);