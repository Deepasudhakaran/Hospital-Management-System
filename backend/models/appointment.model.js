// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//     Patient_name: {type : String, require:true},
//     Doctor_name:{type : String, require:true},
//     date : {type: Date}

// })

// module.exports = mongoose.model('Appointment', appointmentSchema)




const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient_name: { type: String, required: true },
  doctor_name: { type: String, required: true },
   date: { type: Date, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
