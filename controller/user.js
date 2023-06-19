const XLSX = require('xlsx');
// const fileData=require('./medical.xlsx')
const path = require('path');
const fs=require('fs');
exports.getCity= async (req, res, next) => {
  try {
  
    function readJSONFile(filePath) {
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            try {
              const jsonData = JSON.parse(data);
              resolve(jsonData);
            } catch (error) {
              reject(error);
            }
          }
        });
      });
    }
    const filePath = path.join(__dirname, 'city.json');
 // Set the appropriate CORS headers
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET');
 res.setHeader('Access-Control-Allow-Headers', '');

    readJSONFile(filePath)
      .then((jsonData) => {
        
      return res.json({
        city:jsonData
      })
        // Return the jsonData as a response or perform further operations
      })
  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}
exports.getMedical= async (req, res, next) => {
  try {
  
    function readJSONFile(filePath) {
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            try {
              const jsonData = JSON.parse(data);
              resolve(jsonData);
            } catch (error) {
              reject(error);
            }
          }
        });
      });
    }
    const filePath = path.join(__dirname, 'medical.json');
 // Set the appropriate CORS headers
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET');
 res.setHeader('Access-Control-Allow-Headers', '');

    readJSONFile(filePath)
      .then((jsonData) => {
        
      return res.json({
        city:jsonData
      })
        // Return the jsonData as a response or perform further operations
      })
  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}
exports.generateFile= async (req, res, next) => {
  try {
  
 // Set the appropriate CORS headers
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET');
 res.setHeader('Access-Control-Allow-Headers', '');

        
      return res.json({
        city:"Hello World"
      })

  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}
