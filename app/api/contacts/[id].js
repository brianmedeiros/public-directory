// pages/api/contacts/[id].js

import dbConnect from '../../../lib/dbConnect';
import Contact from '../../../models/Contact';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const contact = await Contact.findById(id);
        if (!contact) {
          return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case 'PUT':
      try {
        const contact = await Contact.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!contact) {
          return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case 'DELETE':
      try {
        const deletedContact = await Contact.deleteOne({ _id: id });
        if (!deletedContact) {
          return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
