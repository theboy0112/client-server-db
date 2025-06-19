const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const port = 5175;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'boy',
//   password: 'biboy',
//   database: 'students'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('❌ Database connection failed:', err.message);
//   } else {
//     console.log('✅ Connected to the MySQL database.');
//   }
// });


const db = mysql.createConnection({
    host: "localhost",
    user: "boy",
    password: 'biboy',
    database:"students"
})
app.post('/students', (req, res) => {
  const sql = "INSERT INTO student_details (firstname, lastname, email) VALUES (?, ?, ?)";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email
  ];
  db.query(sql, values, (err, result) => {
    if (err) return res.json({ message: 'Something went wrong: ' + err });
    return res.json({ success: 'Student Added successfully' });
  });
});
app.get('/students', (req,res)=>{
    const sql = "SELECT * FROM student_details";
    db.query(sql, (err,result)=>{
        if(err) res.json({"message":"Server Error"});
        return res.json(result);
    })
});


app.listen(port, ()=>{
 console.log(`Server is listening at http://localhost:${port}`);
})