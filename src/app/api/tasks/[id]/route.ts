import dbConnect from "@/libs/dbConnect";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: { params: any }) {
  const { id } = params;
  const { title, description } = await request.json();
  await dbConnect();
  await Task.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    {
      message: "Task updated successfully",
    },
    {
      status: 200,
    }
  );
}

export async function GET(request: any, { params }: { params: any }) {
  const { id } = params;
  await dbConnect();
  const topic = await Task.find({ _id: id });
  return NextResponse.json(
    {
      message: "Topic Find Successfully",
      topic,
    },
    {
      status: 200,
    }
  );
}
