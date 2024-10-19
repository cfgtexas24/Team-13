import fs from 'fs/promises';  

// loads data from JSON file
async function loadEmployeeListData() {
    const dataPath = '../json_responses/application_list.json';
    try {
      const jsonData = await fs.readFile(dataPath, 'utf8');
      return JSON.parse(jsonData);
    } catch (error) {
      console.error('Error reading or parsing JSON file:', error);
      throw new Error('Failed to load data');
    }
}