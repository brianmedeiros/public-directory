import styles from "@/styles/ContactCard.module.css";
import { Contact } from "@/types/Contact";

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className={styles.card}>
      <h3>{contact.firstName} {contact.lastName}</h3>
      <p><strong>Job:</strong> {contact.jobTitle || "N/A"}</p>
      <p><strong>Email:</strong> {contact.email || "N/A"}</p>
      <p><strong>Phone:</strong> {contact.phoneNumber || "N/A"}</p>
    </div>
  );
}
