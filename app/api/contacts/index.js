import dbConnect from '../../../lib/dbConnect';
import Contact from '../../../models/Contact';

export default async function handler(req, res) {
  await dbConnect();

  // Handler logic based on HTTP method
  switch (req.method) {
    case 'GET':
      try {
        const { state, jobTitle } = req.query;
        const filter = {};

        if (state) {
          filter.state = state;
        }
        if (jobTitle) {
          filter.jobTitle = jobTitle;
        }

        const contacts = await Contact.find(filter);
        res.status(200).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case 'POST':
      try {
        const contact = await Contact.create(req.body);
        res.status(201).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
