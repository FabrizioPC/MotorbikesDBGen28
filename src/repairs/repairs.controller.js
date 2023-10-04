import { RepairsService } from "./repairs.service.js";

const repairsService = new RepairsService();

export const findAllRepairs = async (req, res) => {
   try {
      const repairs = await repairsService.findAllRepairs();
      return res.json(repairs);
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const findOneRepair = async (req, res) => {
   try {
      const { id } = req.params;
      const repair = await repairsService.findOneRepair(id);
      if (!repair) {
         return res.status(404).json({
            status: "error",
            message: `Repair with id: ${id} not found`,
         });
      }
      return res.json(repair);
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const createRepair = async (req, res) => {
   try {
      const repair = await repairsService.createRepair(req.body);
      return res.status(201).json(repair);
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const updateRepair = async (req, res) => {
   try {
      const { id } = req.params;
      const repair = await repairsService.findOneRepair(id);
      if (!repair) {
         return res.status(404).json({
            status: "error",
            message: `Repair with id: ${id} not found`,
         });
      }
      const updatedRepair = await repairsService.updateRepair(repair);
      return res.json({
         updatedRepair: updatedRepair,
         message: "Repair set completed succesfully",
      });
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const deleteRepair = async (req, res) => {
   try {
      const { id } = req.params;
      const repair = await repairsService.findOneRepair(id);
      if (!repair) {
         return res.status(404).json({
            status: "error",
            message: `Repair with id: ${id} not found`,
         });
      }
      await repairsService.deleteRepair(repair);
      return res.status(204).json(null);
   } catch (error) {
      return res.status(500).json(error);
   }
};
