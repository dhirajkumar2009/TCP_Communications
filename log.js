/**
 * Project Name: <TCP Communication Application>
 * @company YMSLI
 * @author   Sachin Kumar Sinha 
 * @date    September 26, 2022
 * Copyright (c) 2019, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * 
 * Description
 * ----------------------------------------------------------------------------------- 
 * This module is exporting an object of logger that can be used anywhere in the project 
 * for logging information in the console.
 * -----------------------------------------------------------------------------------
 * 
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By              Modified On            Description
 * Sachin Kumar Sinha      Sept 26, 2022           Initially created
 * -----------------------------------------------------------------------------------
*/
//requiring winston module
const { createLogger, format, transports } = require('winston');
const { splat, combine, timestamp, label, printf, simple } = format;

//Custom formatting the log message
const myFormat = printf( ({ level, message, timestamp , ...metadata}) => {
    let msg = `${message} `  
    return msg
  });
  
//creating the logger to log when called
const logger = createLogger({
  format: combine(
    	simple(),
        myFormat
  ),
  transports: [new transports.Console()]
});


module.exports = logger;