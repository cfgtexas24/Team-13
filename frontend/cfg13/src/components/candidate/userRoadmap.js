import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  LinearProgress, 
  Box,
  Avatar,
  Stack,
  Modal,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const UserRoadmap = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Google IT Support Professional",
      provider: "Google",
      progress: 75,
      image: "/api/placeholder/64/64",
      completionDate: "Expected Dec 2024",
      modules: "5/6 modules complete",
      category: "Technical",
      description: "Get ready for a career in IT support with a program designed by Google. Learn the fundamentals of IT support, from networking to operating systems, and security.",
      skills: ["Technical Support", "Network Security", "System Administration", "Linux", "Troubleshooting"],
      courseModules: [
        { name: "Technical Support Fundamentals", status: "Completed" },
        { name: "Computer Networking", status: "Completed" },
        { name: "Operating Systems", status: "Completed" },
        { name: "System Administration", status: "Completed" },
        { name: "IT Security", status: "In Progress" },
        { name: "Capstone Project", status: "Not Started" }
      ],
      estimatedTime: "6-8 months",
      difficulty: "Beginner-Intermediate",
      price: "Free with CFG Scholarship"
    },
    {
      title: "Google Project Management",
      provider: "Google",
      progress: 40,
      image: "/api/placeholder/64/64",
      completionDate: "Expected Jan 2025",
      modules: "2/6 modules complete",
      category: "Management",
      description: "Start your career as a project manager. Learn how to create effective project documentation and artifacts, manage stakeholders, and apply agile and scrum frameworks.",
      skills: ["Project Planning", "Risk Management", "Agile Methodologies", "Scrum", "Team Leadership"],
      courseModules: [
        { name: "Project Management Foundations", status: "Completed" },
        { name: "Project Initiation", status: "Completed" },
        { name: "Project Planning", status: "In Progress" },
        { name: "Project Execution", status: "Not Started" },
        { name: "Agile Project Management", status: "Not Started" },
        { name: "Capstone Project", status: "Not Started" }
      ],
      estimatedTime: "6 months",
      difficulty: "Beginner",
      price: "Free with CFG Scholarship"
    },
    {
      title: "NRF Customer Service & Sales",
      provider: "National Retail Foundation",
      progress: 85,
      image: "/api/placeholder/64/64",
      completionDate: "Expected Nov 2024",
      modules: "4/5 modules complete",
      category: "Retail",
      description: "Master the art of customer service and sales in retail. Learn proven techniques for customer engagement, sales strategies, and professional communication.",
      skills: ["Customer Service", "Sales Techniques", "Communication", "Problem Solving", "Retail Operations"],
      courseModules: [
        { name: "Customer Service Fundamentals", status: "Completed" },
        { name: "Sales Techniques", status: "Completed" },
        { name: "Customer Engagement", status: "Completed" },
        { name: "Conflict Resolution", status: "Completed" },
        { name: "Final Assessment", status: "In Progress" }
      ],
      estimatedTime: "3-4 months",
      difficulty: "Beginner",
      price: "Free with CFG Scholarship"
    }
  ];

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 800,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
  };

  const CertificateCard = ({ cert }) => (
    <Card 
      onClick={() => setSelectedCert(cert)}
      sx={{ 
        '&:hover': { 
          boxShadow: 6,
          transition: 'box-shadow 0.3s ease-in-out',
          cursor: 'pointer'
        },
        borderLeft: `4px solid ${cert.provider === 'Google' ? '#4285F4' : '#00848E'}`
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', gap: 2, flex: 1, alignItems: 'center' }}>
            <Avatar
              src={cert.image}
              alt={`${cert.provider} logo`}
              sx={{ width: 64, height: 64 }}
              variant="rounded"
            />
            <Box>
              <Typography variant="h6" component="div">
                {cert.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                {cert.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cert.modules}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cert.completionDate}
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ width: 200 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">Progress</Typography>
              <Typography variant="body2">{cert.progress}%</Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={cert.progress}
              sx={{ 
                height: 8, 
                borderRadius: 4,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: cert.provider === 'Google' ? '#4285F4' : '#00848E'
                }
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ maxWidth: 900, margin: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Professional Certifications
      </Typography>
      
      {/* Google Certifications Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, color: '#4285F4' }}>
        Google Certifications
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        {certificates
          .filter(cert => cert.provider === "Google")
          .map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
      </Stack>

      {/* NRF Certifications Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, color: '#00848E' }}>
        National Retail Foundation Certifications
      </Typography>
      <Stack spacing={2}>
        {certificates
          .filter(cert => cert.provider === "National Retail Foundation")
          .map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
      </Stack>

      {/* Detail Modal */}
      <Modal
        open={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        aria-labelledby="certificate-modal-title"
      >
        <Box sx={modalStyle}>
          {selectedCert && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                <Typography id="certificate-modal-title" variant="h5" component="h2">
                  {selectedCert.title}
                </Typography>
                <IconButton onClick={() => setSelectedCert(null)} size="small">
                  <CloseIcon />
                </IconButton>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                {selectedCert.description}
              </Typography>

              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" sx={{ mb: 2 }}>Key Information</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, mb: 3 }}>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Duration</Typography>
                  <Typography>{selectedCert.estimatedTime}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Difficulty</Typography>
                  <Typography>{selectedCert.difficulty}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Price</Typography>
                  <Typography>{selectedCert.price}</Typography>
                </Box>
              </Box>

              <Typography variant="h6" sx={{ mb: 2 }}>Skills You'll Learn</Typography>
              <Box sx={{ mb: 3 }}>
                {selectedCert.skills.map((skill, index) => (
                  <Chip 
                    key={index} 
                    label={skill} 
                    sx={{ m: 0.5 }}
                    variant="outlined"
                  />
                ))}
              </Box>

              <Typography variant="h6" sx={{ mb: 2 }}>Course Modules</Typography>
              <List>
                {selectedCert.courseModules.map((module, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemText 
                      primary={module.name}
                      secondary={
                        <Chip 
                          label={module.status}
                          size="small"
                          color={
                            module.status === "Completed" ? "success" :
                            module.status === "In Progress" ? "warning" : "default"
                          }
                          sx={{ mt: 1 }}
                        />
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button 
                  variant="outlined" 
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </Button>
                <Button 
                  variant="contained" 
                  endIcon={<OpenInNewIcon />}
                  sx={{ 
                    bgcolor: selectedCert.provider === 'Google' ? '#4285F4' : '#00848E',
                    '&:hover': {
                      bgcolor: selectedCert.provider === 'Google' ? '#3367d6' : '#006d75'
                    }
                  }}
                >
                  Go to Course
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default UserRoadmap;