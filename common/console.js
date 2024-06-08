function log(text){
    let content = document.getElementById("console_body");
    let logLine = document.createElement("p");
    
    logLine.append(text)
    
    content.append(logLine);				
}