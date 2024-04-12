/**
 * Project Name: <TCP Communication Application>
 * @company YMSLI
 * @author   Sachin Kumar Sinha 
 * @date    September 26, 2022
 * Copyright (c) 2019, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * 
 * Description
 * ----------------------------------------------------------------------------------- 
 * This module is responsible for create connection with the server.
 * It connects to the server on some particular port where user wants it to connect.  
 * It uses net module for making connection and exchanging information with server. 
 * 
 * -----------------------------------------------------------------------------------
 * 
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By              Modified On            Description
 * Sachin Kumar Sinha      Sept 26, 2022           Initially created
 * -----------------------------------------------------------------------------------
*/


const net = require("net"); 
const logger = require("./log");
// sendMessage is used for sending data to the client by typing on the terminal.
const sendMessage =  require("readline").createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 

const options = {
    //port: propertyFile["SERVER_PORT"];
    port : 3900
};


//for connecting to the server
let client = net.createConnection(options, () => {
    logger.info("CLIENT : connected to the server.");
    client.write("CLIENT: Hello this is client!"); 
});

logger.info("For Quiting the Client-Server Connection... Press 'q' or 'Q' ");
//printing messages coming from server
client.on("data", data => {
    logger.info(data.toString()); 
});

client.on('end', () => { // close everything when done
    logger.info("CLIENT : connection lost from the server");
    sendMessage.close();
})
//handling error
client.on('error',()=>{
    logger.info("CLIENT : connection lost from the server");
    sendMessage.close();
})

// sending msg to server from the terminal
sendMessage.on('line', (input) => { 
    if (input == "q"  || input == "Q") {  // condition for closing connection from client side by typing Q in terminal.
        client.end();
    }
    else{
        client.write(`CLIENT: ${input}`); 
    }
}); 

