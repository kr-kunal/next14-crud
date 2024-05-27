import dbConnect from "@/libs/dbConnect";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, description } = await request.json();
  await dbConnect();
  await Task.create({ title, description });
  return NextResponse.json(
    { message: "Task created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await dbConnect();
  const res = await Task.find();
  return NextResponse.json(
    {
      message: "Tasks fetch successfully",
      result: res,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await Task.findByIdAndDelete(id);
  return NextResponse.json(
    {
      message: "Tasks deleted successfully",
    },
    {
      status: 200,
    }
  );
}
