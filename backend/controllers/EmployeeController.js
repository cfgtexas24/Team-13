import fs from 'fs/promises';  

// loads data from JSON file
async function loadEmployeeListData() {
    const dataPath = '../json_responses/employee_list.json';
    try {
      const jsonData = await fs.readFile(dataPath, 'utf8');
      return JSON.parse(jsonData);
    } catch (error) {
      console.error('Error reading or parsing JSON file:', error);
      throw new Error('Failed to load data');
    }
}

// loads job data from JSON file
async function loadJobData() {
    const dataPath = '../json_responses/job_list.json';
    try {
      const jsonData = await fs.readFile(dataPath, 'utf8');
      return JSON.parse(jsonData);
    }
    catch (error) {
      console.error('Error reading or parsing JSON file:', error);
      throw new Error('Failed to load data');
    }
}

// fetch a user by id
export const getEmployeeById = async (req, res) => {
    try {
        const employeeId = parseInt(req.params.id, 10); // Convert to a number
        const data = await loadEmployeeListData
    ();
        
        const employee = data.employees.find((employee) => employee.id === employeeId); // Match the ID correctly
        
        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }
        
        res.json(employee);
    } catch (error) {
        console.error('Error fetching employee data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// fetch all applications by employee id
export const getApplicationById = async (req, res) => {
    try {
        const employeeId = parseInt(req.params.employeeId, 10); // Convert to a number
        const applicationId = parseInt(req.params.applicationId, 10); // Convert to a number

        const data = await loadEmployeeListData();

        const employee = data.employees.find((employee) => employee.id === employeeId); // Match the ID correctly

        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }

        const application = employee.applications.find((application) => application.id === applicationId); // Match the ID correctly

        if (!application) {
            res.status(404).json({ error: 'Application not found' });
            return;
        }

        res.json(application);
    } catch (error) {
        console.error('Error fetching employee data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// fetch all applications
export const getAllApplications = async (req, res) => {
    try {
        const employeeId = parseInt(req.params.id, 10); // Convert to a number
        const data = await loadEmployeeListData();

        const employee = data.employees.find((employee) => employee.id === employeeId); // Match the ID correctly

        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }

        const applications = employee.applications;
        res.json(applications);
    } catch (error) {
        console.error('Error fetching employee data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// create application
export const createApplication = async (req, res) => {
    try {
        const {} = req.body;

        const response = {
            jobName,
            company,
            location,
            salary,
            description,
            message: "Job data successfully received and packaged."
        };
        res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: 'Invalid request body', error: error.message });
      }
}

// get jobs based off of % match with employee
export const getPotentialJobs = async (req, res) => {
    try {
        const jobsData = await loadJobData();  // Load job data
        const employeesData = await loadEmployeeListData();  // Load employee data

        const employeeId = parseInt(req.params.id, 10);  // Parse employee ID from request params

        // Find the employee by ID
        const employee = employeesData.employees.find(emp => emp.id === employeeId);
        if (!employee) {
            return res.status(404).json({ message: `Employee with ID ${employeeId} not found` });
        }

        const employeeSkills = employee.skills;
        const employeeCertifications = employee.certifications.map(cert => cert.name);

        // Filter jobs that match at least 80% of the employee's skills and certifications
        const matchingJobs = jobsData.jobs.filter(job => {
            const jobSkills = job.skills;
            const jobCertifications = job.certifications.map(cert => cert.name);

            // Calculate the number of matching skills and certifications
            const matchingSkillsCount = jobSkills.filter(skill => employeeSkills.includes(skill)).length;
            const matchingCertificationsCount = jobCertifications.filter(cert => employeeCertifications.includes(cert)).length;

            // Total job requirements (skills + certifications)
            const totalJobRequirements = jobSkills.length + jobCertifications.length;

            // Total matched (skills + certifications)
            const totalMatched = matchingSkillsCount + matchingCertificationsCount;

            // Calculate match percentage
            const matchPercentage = (totalMatched / totalJobRequirements) * 100;

            return matchPercentage >= 80;  // Only return jobs with 80% or more match
        });

        if (matchingJobs.length === 0) {
            return res.status(200).json({ message: "No jobs match 80% or more of the employee's qualifications" });
        }

        res.status(200).json(matchingJobs);
        
    } catch (error) {
        console.error('Error in getPotentialJobs:', error);
        res.status(500).json({ message: 'Internal Server Error in getPotentialJobs' });
    }
};

// fetch all job postings
export const getAllJobPostings = async (req, res) => {
    try {
        const data = await loadJobData();
        const jobPostings = data.jobs;
        res.json(jobPostings);
    } catch (error) {
        console.error('Error fetching job data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}