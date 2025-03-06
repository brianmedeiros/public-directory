export interface Contact {
    _id: string;
    firstName: string;
    lastName: string;
    jobTitle?: string;
    office?: string;
    email?: string;
    phoneNumber?: string;
    createdAt: string;  // Date stored as a string
    updatedAt: string;
  }