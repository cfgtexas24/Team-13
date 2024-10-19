import fs from 'fs/promises';  

// loads data from JSON file
async function loadData() {
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
        const data = await loadData();
        
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