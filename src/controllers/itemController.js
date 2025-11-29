import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const itemController = {
  async list(req, res) {
    const data = await prisma.item.findMany();
    res.json(data);
  },

  async get(req, res) {
    const { id } = req.params;
    const item = await prisma.item.findUnique({ where: { id: Number(id) }});
    res.json(item);
  },

  async create(req, res) {
    const { name } = req.body;
    const item = await prisma.item.create({ data: { name } });
    res.status(201).json(item);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const updated = await prisma.item.update({
      where: { id: Number(id) },
      data: { name },
    });
    res.json(updated);
  },

  async delete(req, res) {
    const { id } = req.params;
    await prisma.item.delete({ where: { id: Number(id) }});
    res.status(204).send();
  }
};
