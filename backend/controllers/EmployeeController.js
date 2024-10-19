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