const fs = require('fs'); 
const path = require('path');
const LOG_FILE = path.join(__dirname, 'requests.log');

// Create a logger module 
const logger = { 
  logToFile: function(req, res) { 
    // console.log(req.url)
    // console.log(req.method)
    // console.log(new Date().toISOString());
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;

    res.on('finish', () => {
        const statusCode = res.statusCode;
        const logMessage = `${timestamp} - ${method} ${url} - Status: ${statusCode}\n`;

        // Append to the log file
        fs.appendFile(LOG_FILE, logMessage, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
      });
} 
}; 
module.exports = logger

