import { Router } from "express";
import sc from "../controllers/studentController.js";

const router = Router();

router.get("/", sc.getAllStudents);
router.post("/", sc.createStudent);
router.get("/:id", sc.getStudentById);
router.put("/:id", sc.updateStudent);
router.delete("/:id", sc.deleteStudent);

export default router;
