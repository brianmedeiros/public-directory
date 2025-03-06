import { NextResponse } from 'next/server';
import dbConnect from '../lib/dbConnect';
import Contact from '../models/Contact';

export async function GET(request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const state = searchParams.get('state');
  const jobTitle = searchParams.get('jobTitle');

  const filter = {};
  if (state) filter.state = state;
  if (jobTitle) filter.jobTitle = jobTitle;

  const contacts = await Contact.find(filter);
  return NextResponse.json({ success: true, data: contacts });
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  const contact = await Contact.create(body);
  return NextResponse.json({ success: true, data: contact }, { status: 201 });
}
