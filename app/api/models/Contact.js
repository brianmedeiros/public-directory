import mongoose from 'mongoose';
import moment from 'moment-timezone';

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
  nextElection: { type: String },
  updateCount: { type: Number, default: 0 }, //Track number of updates to record
  },
  { timestamps: true }
);

// Format `updatedAt` in Eastern Time before returning data
ContactSchema.set('toJSON', {
    transform: function (doc, ret) {
      ret.updatedAt = moment(ret.updatedAt).tz('America/New_York').format('YYYY-MM-DD HH:mm:ss z');
      ret.createdAt = moment(ret.createdAt).tz('America/New_York').format('YYYY-MM-DD HH:mm:ss z');
      return ret;
    },
  });

// If the model already exists, use it; otherwise, create a new model.
// This prevents model recompilation errors in development.
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
