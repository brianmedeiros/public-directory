import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
  salary: {
    type: Number,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  state: {
    type: String,
  },
});

// If the model already exists, use it; otherwise, create a new model.
// This prevents model recompilation errors in development.
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
