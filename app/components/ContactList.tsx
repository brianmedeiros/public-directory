import ContactCard from "./ContactCard";
import { Contact } from "../types/Contact";

interface ContactListProps {
  contacts: Contact[];
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} />
      ))}
    </div>
  );
}