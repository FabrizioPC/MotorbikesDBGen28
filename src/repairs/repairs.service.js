import Repairs from "./repairs.model.js";

export class RepairsService {
   async findAllRepairs() {
      return await Repairs.findAll({
         where: {
            status: "pending",
         },
      });
   }
   async findOneRepair(id) {
      return await Repairs.findOne({
         where: {
            id,
            status: "pending",
         },
      });
   }
   async createRepair(data) {
      return await Repairs.create(data);
   }
   async updateRepair(repair) {
      return await repair.update({ status: "completed" });
   }
   async deleteRepair(repair) {
      return await repair.update({ status: "cancelled" });
   }
}
