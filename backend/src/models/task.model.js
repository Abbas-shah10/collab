import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
  },
  status: {
    type: String,
    enum: ['To do', 'In Progress', 'Done'],
    default: 'To do',
  },
});


export const Task = mongoose.model("Task", taskSchema);