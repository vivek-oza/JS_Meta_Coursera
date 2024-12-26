// STRINGS

const name = "Vivek";
const repCount = 4;

console.log(name + repCount + " Pizza"); // DO NOT USE THIS FORMAT to concatenate string,


//USE THIS -> This is called (  String interpolation , and the method of doing so is called Template Literals. [ie: using (` `) to create string is called a template literal string, and PROCESS OF PUTTING PLACEHOLDER VALUE THERE IS CALLED STRING INTERPOLATION]   )

console.log(`Hello my name is ${name} any my repo count is ${repCount}`);


trickyString = "Hello\nWorld"   // WE Expect output to be 12. BUT REAL OUTPUT is 11 -> Reason : in JS, all "escape sequence characters" are treated as a single character.  
console.log(trickyString.length);



console.log(`Hey ,my name is ${name} and my repo count is ${repCount}`);










/* 

// NOTE -> ANOTHER WAY to declare String is by using OBJECT in JS

*/



const testStr = "Normal String";
console.log(testStr);
console.log(typeof(testStr));

const gameName = new String("GTA6");    // THIS STRING is being declared using object. 
console.log(gameName);
console.log(typeof(gameName));





/* 

ALSO, Behind the scenes, the normal declaration also invoke the object (uses this method)

    // NOTE

    THE TYPE OF BOTH STRING WILL BE DIFFERENT.

    clonsole.log(testStr)
    "Normal String"
    typeof testStr
    'string'


    clonsole.log(gameName)
    [String: 'GTA6']
    typeof gameName
    'object'
    

    --> Object String
    THE STRING declared as an OBJECT willl be stored as object IN KEY VALUE FORMAT (INTEGERS ARE KEY, AND EACH CHAR IS THE VALUE -> ITS LIKE INDEXING)
    The string declared as object will have ITS Properties and many inbuilt methods
    
    [
        PRO TIP -> 
        USE THIS IN CONSOLE IN BROWSER
    ]

*/


const languageName = new String('Java Script');

//INDEXING , OR , ACCESSING THE CHAR USING KEY VALUE PAIR CONCEPT
console.log(languageName[0]);   //J



//  ACCESSING THE PROTOTYPE

console.log(languageName.__proto__);    //we get an object printed, its looking empty here, but we can see all its content if we do this in console


// Each string object has default "length property" . and many more methods in prototype(__proto__).

console.log(languageName.length);   //11

//BUT, we dont need to mention proto when using string object's methods , we can use it directly , like we do access property. [ie : we can do this -> strObjName.method() , and we dont need to do, strObjName.__proto__.method()]

console.log(languageName);                  //[String: 'Java Script']
console.log(languageName.toUpperCase);      //[Function: toUpperCase]
console.log(languageName.toUpperCase());    //JAVA SCRIPT   [The method in string object returns "String"]


/* 
    // NOTE
        THIS METHOD DID NOT CHANGE ORIGINAL STRING
            And the reason is -> [REF : stack and heap memory]
            Primitive datatypes are stored using "Stack memory" and
            In stack memory, a copy of original var is passed when change is made and NOT The original values reference.

 */

    console.log(languageName.toUpperCase());    //JAVA SCRIPT
    console.log(languageName);    //[String: 'Java Script']

    // HERE WE SEE, THE ORIGINAL VALUE ISNT CHANGED





// SOME More methods

    //For reference -> original declaration of "languageName"
    // const languageName = new String('Java Script');


console.log(languageName.charAt(0));    //J
console.log(languageName.charAt(6));    //c

console.log(languageName.indexOf('t')); //10




/* 
    SLICING AND SUBSTRING
 */



const techStack = "MERN-mongo,express,react,next";

const newStr = techStack.substring(0,5);
console.log(newStr);

const anotherStr = techStack.slice(0,8);
console.log(anotherStr);
console.log(techStack.length);

const anotherStr2 = techStack.slice(5,-2);
console.log(anotherStr2);   //Slicing Gives output for NEGATIVE INDEX VALUE

const newStr2 = techStack.substring(5,-2);
console.log(newStr2);       //Substring Does NOT give output for NEGATIVE INDEX VALUE







/* 
    TRIM and REPLACE  METHODs

    trim -> removes leading and trailing white spaces and line terminators.
 */

const newTestStr = "    vivek be winning             ";
const newTestStr2 = "for real";

console.log(`${newTestStr} ${newTestStr2}`);            //without trim

console.log(`${newTestStr.trim()} ${newTestStr2}`);     //with trim





const url = "https://vivek.com/vivek%20oza";

console.log(url);

console.log(url.replace('%20',"-"));

console.log(url.includes('vivek'));   //true
console.log(url.includes('gaming'));  //false




// STRING TO ARRAY

//reference declaration -> const techStack = "MERN-mongo,express,react,next";


console.log(techStack);

console.log(techStack.split(','));




/* 

    // FINAL NOTES -> 
    
    1.  USE TEMPLATE LITERALS FOR MAKING STRING 
        [ie: const testStr = `Hye, this is a template literal string`]

    2.  DO LEARN OTHER STRING METHODS -> 
        DO PRACTICE
        BROWSE MDN

 */


const newStringTESTING = new String(`This is a template literal String and I am trying string interpolation ${newTestStr2}`);

console.log(newStringTESTING);  //[String: 'This is a template literal String and I am trying string interpolation for real']

// it worked LOL