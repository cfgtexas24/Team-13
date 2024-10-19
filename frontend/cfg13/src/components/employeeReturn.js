import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Switch, FormControlLabel } from '@mui/material';

const ProfileReturn = () => {
  // Fake user data for returning candidate
  const [userData, setUserData] = useState({
    fullName: 'John Smith',
    location: 'Dallas, TX',
    skills: 'React, CSS',
    dateOfBirth: '1990-01-15',
    gender: 'Male',
    ethnicity: 'Asian',
    certifications: [
      {
        name: 'Certified React Developer',
        issuedBy: 'React Academy',
        date: '2022-05-20',
      },
      {
        name: 'JavaScript Expert',
        issuedBy: 'Code Institute',
        date: '2021-11-15',
      },
    ],
  });

  const [visibility, setVisibility] = useState({
    fullName: true,
    location: true,
    skills: true,
    dateOfBirth: true,
    gender: true,
    ethnicity: true,
    certifications: true,
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = [...userData.certifications];
    updatedCertifications[index][field] = value;
    setUserData({ ...userData, certifications: updatedCertifications });
  };

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const handleVisibilityToggle = (field) => {
    setVisibility({ ...visibility, [field]: !visibility[field] });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl w-full p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Profile</h2>
        <form className="space-y-4">
          {visibility.fullName && (
            <TextField
              label="Full Name"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              disabled={!isEditable}
            />
          )}

          {visibility.location && (
            <TextField
              label="Location"
              name="location"
              value={userData.location}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              disabled={!isEditable}
            />
          )}
          {visibility.skills && (
            <TextField
              label="Skills (comma-separated)"
              name="skills"
              value={userData.skills}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              disabled={!isEditable}
            />
          )}

          {visibility.dateOfBirth && (
            <TextField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={userData.dateOfBirth}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              variant="outlined"
              disabled={!isEditable}
            />
          )}

          <FormControlLabel
            control={
              <Switch
                checked={visibility.gender}
                onChange={() => handleVisibilityToggle('gender')}
              />
            }
            label="Visible: Gender"
          />
          {visibility.gender && (
            <FormControl fullWidth variant="outlined" disabled={!isEditable}>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={userData.gender}
                onChange={handleInputChange}
                label="Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          )}

          <FormControlLabel
            control={
              <Switch
                checked={visibility.ethnicity}
                onChange={() => handleVisibilityToggle('ethnicity')}
              />
            }
            label="Visible: Ethnicity"
          />
          {visibility.ethnicity && (
            <TextField
              label="Ethnicity"
              name="ethnicity"
              value={userData.ethnicity}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              disabled={!isEditable}
            />
          )}
          {visibility.certifications && (
            <div>
              <h3 className="text-lg font-semibold mt-6 mb-2">Certifications</h3>
              {userData.certifications.map((cert, index) => (
                <div key={index} className="border-b pb-2 mb-2">
                  <TextField
                    label="Certification Name"
                    value={cert.name}
                    onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                    fullWidth
                    variant="outlined"
                    className="mb-2"
                    disabled={!isEditable}
                  />
                  <TextField
                    label="Issued By"
                    value={cert.issuedBy}
                    onChange={(e) => handleCertificationChange(index, 'issuedBy', e.target.value)}
                    fullWidth
                    variant="outlined"
                    className="mb-2"
                    disabled={!isEditable}
                  />
                  <TextField
                    label="Date"
                    type="date"
                    value={cert.date}
                    onChange={(e) => handleCertificationChange(index, 'date', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    variant="outlined"
                    disabled={!isEditable}
                  />
                </div>
              ))}
            </div>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={toggleEditable}
          >
            {isEditable ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileReturn;
