import mongoose from 'mongoose';


const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  worspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
  },
});

export const Board = mongoose.model("Board", boardSchema);