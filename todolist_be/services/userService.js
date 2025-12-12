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
            rol: body.rol,
            password: await passwordEncrypt(body.password),
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

async function login(body) {
    const data = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });
    if (data) {
        const passwordValida = await passwordCompare(body.password, data.password);
         if (passwordValida) {
            data.password = "";
            const token = jwt.sign(data,process.env.SECRET_KEY,{expiresIn: '1h'});
            return {message: "inicio de sesio exitoso", data:token};
         }
         return {message: "Password incorrecta", data: null};
    }
    return {message: "Usuario no encontrado", data:data};

    
}

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