import express from "express";

import Student from "../models/Student.js";

import auth from "../middleware/auth.js";

const router = express.Router();



// ================= GET ALL STUDENTS =================

router.get(
  "/",
  async (req, res) => {

    try {

      const students =
        await Student.find();

      res.status(200).json(
        students
      );

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  }
);



// ================= GET SINGLE STUDENT =================

router.get(
  "/:id",
  async (req, res) => {

    try {

      const student =
        await Student.findById(
          req.params.id
        );

      if (!student) {

        return res.status(404).json({
          success: false,
          message: "Student not found",
        });

      }

      res.status(200).json(
        student
      );

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  }
);



// ================= CREATE STUDENT =================

router.post(
  "/create",
  auth,

  async (req, res) => {

    try {

      const student =
        await Student.create(
          req.body
        );

      res.status(201).json({
        success: true,
        message: "Student created successfully",
        student,
      });

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  }
);



// ================= UPDATE STUDENT =================

router.put(
  "/update/:id",
  auth,

  async (req, res) => {

    try {

      const updatedStudent =
        await Student.findByIdAndUpdate(

          req.params.id,

          req.body,

          {
            new: true,
          }

        );

      if (!updatedStudent) {

        return res.status(404).json({
          success: false,
          message: "Student not found",
        });

      }

      res.status(200).json({
        success: true,
        message: "Student updated successfully",
        updatedStudent,
      });

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  }
);



// ================= DELETE STUDENT =================

router.delete(
  "/delete/:id",
  auth,

  async (req, res) => {

    try {

      const deletedStudent =
        await Student.findByIdAndDelete(
          req.params.id
        );

      if (!deletedStudent) {

        return res.status(404).json({
          success: false,
          message: "Student not found",
        });

      }

      res.status(200).json({
        success: true,
        message: "Student deleted successfully",
      });

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  }
);

export default router;