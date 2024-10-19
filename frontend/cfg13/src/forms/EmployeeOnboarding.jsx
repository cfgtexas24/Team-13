import React, { useState } from 'react';
import { Link } from "react-router-dom";

const EmployeeOnboarding = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [certifications, setCertifications] = useState([{ name: '', issuedBy: '', dateIssued: '' }]);

    const handleAddCertification = () => {
        setCertifications([...certifications, { name: '', issuedBy: '', dateIssued: '' }]);
    };

    const handleCertificationChange = (index, field, value) => {
        const newCertifications = [...certifications];
        newCertifications[index][field] = value;
        setCertifications(newCertifications);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name,
            location,
            skills: skills.split(',').map(skill => skill.trim()),
            demographic: { dob: parseInt(dob), gender, ethnicity },
            certifications
        };
        console.log(formData);
        const employee = fetch('http://localhost:4000/api/getEmployeeById/12345')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Your Profile</h1>
                <div className="bg-white shadow rounded-lg">
                    <form className="space-y-6 p-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
                            <input
                                id="skills"
                                name="skills"
                                type="text"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                            <div>
                                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="ethnicity" className="block text-sm font-medium text-gray-700">Ethnicity</label>
                                <input
                                    id="ethnicity"
                                    name="ethnicity"
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={ethnicity}
                                    onChange={(e) => setEthnicity(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Certifications</label>
                            {certifications.map((cert, index) => (
                                <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
                                    <input
                                        placeholder="Certification Name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                                        value={cert.name}
                                        onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                                    />
                                    <input
                                        placeholder="Issued By"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                                        value={cert.issuedBy}
                                        onChange={(e) => handleCertificationChange(index, 'issuedBy', e.target.value)}
                                    />
                                    <input
                                        type="date"
                                        className="mb-1 mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        value={cert.dateIssued}
                                        onChange={(e) => handleCertificationChange(index, 'dateIssued', e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setCertifications(certifications.filter((_, i) => i !== index))}
                                        className="rounded text-xs float-right text-red-500"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddCertification}
                                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Certification
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                            >
                                Create Profile
                            </button>
                        </div>
                    </form>

                    <div className="mt-2 pb-8 text-center">
                        <Link to="/login" className="font-medium text-blue-900 hover:text-blue-900">
                            Already have an account? Login Here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeOnboarding;
