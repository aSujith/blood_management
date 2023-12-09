const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blood_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema for your employee collection
const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  blood_group: String,
  isactive: Boolean,
});

const Employee = mongoose.model('Employee', employeeSchema);

// API endpoint to create a new employee
app.post('/employee', async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
