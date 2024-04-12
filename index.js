/**
 * Project Name: <TCP Communication Application>
 * @company YMSLI
 * @author   Sachin Kumar Sinha 
 * @date    September 26, 2022
 * Copyright (c) 2019, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * 
 * Description
 * ----------------------------------------------------------------------------------- 
 * program execution start froms here
 * It fetches the port number from application properties file.
 * it starts the web and tcp server on the port which is fetched.
 * 
 * -----------------------------------------------------------------------------------
 * 
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By              Modified On            Description
 * Sachin Kumar Sinha      Sept 26, 2022         Initially created
 * -----------------------------------------------------------------------------------
*/
// SYSTEM.SETTING is global variable used for reading application properties file and use wherever need in the project
global.SYSTEM_SETTING = require('./ApplicationProperties.json');
//logger is global variable used for reading log.js module and use for logging whenever required without requiring in that file
global.logger = require("./utilities/log");
//globalversion is used for informing that there is change in database
global.globalVersion = 0;
//startWebServer is requiring function responsible for starting web server
const startWebServer = require("./web_server/WebServer");
//startTCPServer is requiring function responsible for starting tcp server
const startTCPServer = require("./tcp_server/TcpServer");
//starting TCP server
startTCPServer(SYSTEM_SETTING.SERVER_PORT);
//starting WEB server
startWebServer(SYSTEM_SETTING.WEB_PORT);