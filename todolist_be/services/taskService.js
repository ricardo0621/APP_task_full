import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getTask() {
    const data = await prisma.task.findMany();
    return data;
}

async function createTask(body) {
    const data = await prisma.task.create({
        data: {
            name: body.name,
            status: false,
            dueDate: body.dueDate,
            userId: body.userId
        }
    });
    return data;
}

async function updateTask(_id, body) {
    const data = await prisma.task.update({
        where: { id: _id },
        data: {
            name: body.name,
            status: body.status,
            dueDate: body.dueDate,
            userId: body.userId
        }
    });
    return data;
}

async function deleteTask(id) {
    const data = await prisma.task.delete({
        where: { id: id }
    });
    return data;
}

export default {
    getTask,
    createTask,
    updateTask,
    deleteTask
}