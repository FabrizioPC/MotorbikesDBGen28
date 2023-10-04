import { UsersService } from "./users.service.js";

const usersService = new UsersService();

export const findAllUsers = async (req, res) => {
   try {
      const users = await usersService.findAllUsers();
      return res.json(users);
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const findUserById = async (req, res) => {
   try {
      const { id } = req.params;
      const user = await usersService.findUserById(id);
      if (!user) {
         return res.status(404).json({
            status: "error",
            message: `User with id: ${id} not found`,
         });
      }

      return res.json(user);
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const createUser = async (req, res) => {
   try {
      const user = await usersService.createUser(req.body);
      return res.status(201).json(user);
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const updateUser = async (req, res) => {
   try {
      const { id } = req.params;
      const user = await usersService.findUserById(id);
      if (!user) {
         return res.status(404).json({
            status: "error",
            message: `User with id: ${id} not found`,
         });
      }
      const updatedUser = await usersService.updateUser(user, req.body);
      return res.json(updatedUser);
   } catch (error) {
      return res.status(500).json(error);
   }
};
export const deleteUser = async (req, res) => {
   try {
      const { id } = req.params;
      const user = await usersService.findUserById(id);
      if (!user) {
         return res.status(404).json({
            status: "error",
            message: `User with id: ${id} not found`,
         });
      }
      await usersService.deleteUser(user);
      return res.status(204).json(null);
   } catch (error) {
      return res.status(500).json(error);
   }
};
