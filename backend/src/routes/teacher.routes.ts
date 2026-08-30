import { Router, Request , Response } from "express";
import {authentication} from "../middleware/auth.middleware";
import {authorize} from "../middleware/role.middleware";
import {
  createClassController,
  getClassesController,
  getClassByIdController,
  deleteClassController,
} from "../controllers/class.controller";

const router = Router();
router.get("/profile", authentication , authorize("teacher"), (req:Request, res:Response) => {
    res.json({
        success:true,
        message:"Teacher profile fetched successfully",
    })
  
})

router.post("/classes", authentication, authorize("teacher"), createClassController);
router.get("/classes", authentication, authorize("teacher"), getClassesController);
router.get("/classes/:id", authentication, authorize("teacher"), getClassByIdController);
router.delete("/classes/:id", authentication, authorize("teacher"), deleteClassController);

export default router;