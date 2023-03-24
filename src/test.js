// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// // Parse incoming JSON requests
// app.use(bodyParser.json());

// let students = [
//   { id: 1, name: 'John Doe', age: 18 },
//   { id: 2, name: 'Jane Doe', age: 19 },
//   { id: 3, name: 'Bob Smith', age: 20 }
// ];

// // Get all students
// app.get('/students', (req, res) => {
//   res.json(students);
// });

// // Get a specific student
// app.get('/students/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const student = students.find(s => s.id === id);

//   if (!student) {
//     return res.status(404).json({ message: 'Student not found' });
//   }

//   res.json(student);
// });

// // Create or update a student
// app.post('/students/:id?', (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name, age } = req.body;

//   // If id is provided, update existing student
//   if (id) {
//     const studentIndex = students.findIndex(s => s.id === id);

//     if (studentIndex === -1) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     students[studentIndex] = { id, name, age };
//     res.json({ message: 'Student updated successfully' });
//   }
//   // If id is not provided, create new student
//   else {
//     const newId = Math.max(...students.map(s => s.id)) + 1;
//     const newStudent = { id: newId, name, age };
//     students.push(newStudent);
//     res.json({ message: 'Student created successfully', id: newId });
//   }
// });

// // Delete a student
// app.delete('/students/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const studentIndex = students.findIndex(s => s.id === id);

//   if (studentIndex === -1) {
//     return res.status(404).json({ message: 'Student not found' });
//   }

//   students.splice(studentIndex, 1);
//   res.json({ message: 'Student deleted successfully' });
// });

// // Update a specific student
// app.put('/students/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name, age } = req.body;

//   const studentIndex = students.findIndex(s => s.id === id);

//   if (studentIndex === -1) {
//     return res.status(404).json({ message: 'Student not found' });
//   }

//   students[studentIndex] = { id, name, age };
//   res.json({ message: 'Student updated successfully' });
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
