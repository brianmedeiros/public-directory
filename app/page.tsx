"use client";

import Header from "@/components/Header";
import ContactList from "@/components/ContactList";
import { useEffect, useState } from "react";
import { Contact } from "@/types/Contact";

export default function HomePage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("/api/contacts");
        const data: { success: boolean; data: Contact[] } = await response.json();
        setContacts(data.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  return (
    <main>
      <Header />
      {loading ? <p>Loading...</p> : <ContactList contacts={contacts} />}
    </main>
  );
}
