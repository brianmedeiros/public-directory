import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';

export async function GET(request, context) {
  await dbConnect();

  try {
    const params = await context.params; // ✅ Ensure params is awaited
    const contact = await Contact.findById(params.id);

    if (!contact) {
      return NextResponse.json({ success: false, message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request, context) {
  await dbConnect();

  try {
    const params = await context.params; //Ensure params is awaited
    const body = await request.json();

    const contact = await Contact.findById(params.id);
    if (!contact) {
      return NextResponse.json({ success: false, message: 'Contact not found' }, { status: 404 });
    }

    Object.assign(contact, body);
    await contact.save(); //`__v` should update

    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, context) {
  await dbConnect();

  try {
    const params = await context.params; //Ensure params is awaited
    const deletedContact = await Contact.findByIdAndDelete(params.id);

    if (!deletedContact) {
      return NextResponse.json({ success: false, message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
