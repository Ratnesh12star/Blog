import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },

    name: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    motherName: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
    },

    mobile: {
      type: String,
    },

    studentClass: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Student", studentSchema);
