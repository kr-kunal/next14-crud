import mongoose, { Schema } from "mongoose";

const TaskModel = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.model("Task", TaskModel);

export default Task;
