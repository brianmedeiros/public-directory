import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  office: { type: String },
  salary: { type: Number },
  salaryExtraOne: { type: String },
  salaryExtraTwo: { type: String },
  party: { type: String },
  email: { type: String },
  addressTitleOne: { type: String },
  addressOneStreet: { type: String },
  addressOneCity: { type: String },
  emailWebsite: { type: String },
  website: { type: String },
  phoneNumber: { type: String },
  term: { type: String },
  nextElection: { type: String }
});

// If the model already exists, use it; otherwise, create a new model.
// This prevents model recompilation errors in development.
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
