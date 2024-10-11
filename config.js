class Database {
  constructor(name, email, role, score) {
    this.id = Math.floor(Math.random() * 100000001)
    this.name = name || "undefined"
    this.email = email || "undefined"
    this.role = role || "undefined"
    this.score = score || null;
  }

  agregarPerson(personId) {
    this.Person.push(personId);
    console.log(this.name + "es"+ this.score)
  }
  
  agregarStudents(studentsId) {
   this.students.push(studentsId); 
   console.log(this.name +" es un " + this.score)
  }
    
}

class Person extends Database {
  constructor(id, name,role, score) {
    super(id, name,role,score)
    this.role = role
  }
}

 let getPersonbyID = {
  name: "name",
  role: "role",
  id: "id"
 }

  let getStudentbyID ={
    id: "id",
    role: "role"
  }
  let getAdminbyID ={
    id: "id",
    role:"role"
  }
  
  getPersonbyID()
    return($(this.id) +$(this.name) + $(this.role));
  
  getStudentbyID()
     return($(this.id) + $(this.role)); 
  
  getAdminbyID()
    return($(this.id) + $(this.role));

  const person = new Person(12,12);
  console.log(person.getPersonID);
  console.log(person.getStudent);
  console.log(person.getAdmin);

// config.js

const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

module.exports = connection;
new Database();
