function path(input){
    /*
    Write a function that receives a single string - the path to a file (the '\' character is escaped)
    Your task is to subtract the file name and its extension. 
    (Beware of files like template.bak.pptx, as template.bak should be the file name,
    while pptx is the extension).
    */
let indexStart=input.lastIndexOf("\\")+1;
let extensionStart=input.lastIndexOf(".")+1;
let extensionEnd=extensionStart-1;

let name=input.substring(indexStart,extensionEnd);
let extension=input.substring(extensionStart)

console.log(`File name: ${name}`);
console.log(`File extension: ${extension}`);
}
path('C:\\Internal\\training-internal\\Template.pptx')
path('C:\\Projects\\Data-Structures\\LinkedList.bat.cs')