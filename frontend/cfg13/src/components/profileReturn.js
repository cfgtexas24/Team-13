import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, IconButton, Box, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ProfileReturn = () => {
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

  const addCertification = () => {
    setUserData({
      ...userData,
      certifications: [...userData.certifications, { name: '', issuedBy: '', date: '' }],
    });
  };

  const removeCertification = (index) => {
    const updatedCertifications = userData.certifications.filter((_, i) => i !== index);
    setUserData({ ...userData, certifications: updatedCertifications });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Profile</h2>
        <form className="space-y-4">
          <Box display="flex" alignItems="center">
            <TextField
              label="Full Name"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              disabled={!isEditable}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <TextField
              label="Location"
              name="location"
              value={userData.location}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              disabled={!isEditable}
            />
          </Box>

          {/* Properly formatted row for Date of Birth, Gender, and Ethnicity */}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Box display="flex" alignItems="center">
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
                  style={{ opacity: visibility.dateOfBirth ? 1 : 0.5 }}
                />
                <IconButton onClick={() => handleVisibilityToggle('dateOfBirth')}>
                  {visibility.dateOfBirth ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box display="flex" alignItems="center">
                <FormControl fullWidth variant="outlined" disabled={!isEditable} style={{ opacity: visibility.gender ? 1 : 0.5 }}>
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
                <IconButton onClick={() => handleVisibilityToggle('gender')}>
                  {visibility.gender ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box display="flex" alignItems="center">
                <TextField
                  label="Ethnicity"
                  name="ethnicity"
                  value={userData.ethnicity}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  disabled={!isEditable}
                  style={{ opacity: visibility.ethnicity ? 1 : 0.5 }}
                />
                <IconButton onClick={() => handleVisibilityToggle('ethnicity')}>
                  {visibility.ethnicity ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          {/* Certifications Section */}
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Certifications
            </Typography>

            {userData.certifications.map((cert, index) => (
              <Box 
                key={index} 
                mb={4} 
                p={3} 
                border={1} 
                borderColor="grey.300" 
                borderRadius={2} 
                style={{ padding: '20px' }}
              >
                <Grid container spacing={2} alignItems="center">
                  {/* Certification Name Field */}
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Certification Name"
                      value={cert.name}
                      onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditable}
                      style={{ opacity: visibility.certifications ? 1 : 0.5 }}
                    />
                  </Grid>

                  {/* Issued By Field */}
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Issued By"
                      value={cert.issuedBy}
                      onChange={(e) => handleCertificationChange(index, 'issuedBy', e.target.value)}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditable}
                      style={{ opacity: visibility.certifications ? 1 : 0.5 }}
                    />
                  </Grid>

                  {/* Date Field */}
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Date"
                      type="date"
                      value={cert.date}
                      onChange={(e) => handleCertificationChange(index, 'date', e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditable}
                      style={{ opacity: visibility.certifications ? 1 : 0.5 }}
                    />
                  </Grid>

                  {/* Action Buttons: Visibility & Delete */}
                  <Grid item xs={12} md={1} display="flex" justifyContent="center" alignItems="center">
                    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                      <IconButton onClick={() => handleVisibilityToggle('certifications')}>
                        {visibility.certifications ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                      <IconButton onClick={() => removeCertification(index)}>
                        <DeleteOutlineIcon color="error" />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}

            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={addCertification}
              color="primary"
              sx={{ mt: 2 }}
            >
              Add Certification
            </Button>
          </Box>


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
