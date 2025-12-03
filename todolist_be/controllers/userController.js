
import userService from "../services/userService.js";

const getUser = async (req, res) => {
    try {
        const data = await userService.getUser();
        res.status(200).json({ message: "lista de usuarios", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/*
los parametros que recibe para crear usuarios
{
    "name": "ricardo",
    "email": "XXXXXXXXXXXXXXXXX",
    "password": "123456",
    "rol": "admin"
}
*/
const createUser = async (req, res) => {
    try {
        const body = req.body;
        const data = await userService.createUser(body);
        res.status(201).json({ message: "usuario creado", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const data = await userService.updateUser(id, body);
        res.status(200).json({ message: "usuario actualizado", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await userService.deleteUser(id);
        res.status(200).json({ message: "usuario eliminado", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function login(req, res){
    try {
        const { email, password } = req.body;
        const data = await userService.login(email, password);

        if(!data){
            return res.status(400).json({ message: "credeniales incorectas",data: null });
        }

        return res.status(200).json({ message: "logueado con exito",data });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

async function logOut(){
    
};


export default {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login,
    logOut
};
