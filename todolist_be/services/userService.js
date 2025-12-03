import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const prisma = new PrismaClient();
dotenv.config();// para que lea el archivo .env la variable de entorno


async function getUser() {
    const data = await prisma.user.findMany();
    return data;
}

async function createUser(body) {
    const data = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: await passwordEncrypt(body.password),
            rol: body.rol
        }
    });
    return data;
}

async function updateUser(id, body) {
    const data = await prisma.user.update({
        where: { id: id },
        data: {
            name: body.name,
            email: body.email,
            password: await passwordEncrypt(body.password),
            rol: body.rol
        }
    });
    return data;
}

async function deleteUser(id) {
    const data = await prisma.user.delete({
        where: { id: id }
    });
    return data;
}

const login = async (email, password) => {
    const query = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!query) {
        return ('Usuario no encontrado');
    }
    const passwordValida = await passwordCompare(password, query.password);
    if (!passwordValida) {
        return ('Password incorrecta');
    }

    const token = jwt.sign(
        {
            id: query.id,
            email: query.email
        },
        process.env.SECRET_KEY,
        { expiresIn: '5h' }
    );

    return { token: token };
};

async function logout() { }


async function passwordEncrypt(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}


async function passwordCompare(password, hash) {
    const result = await bcrypt.compare(password, hash);
    return result;
}

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login,
    logout
};