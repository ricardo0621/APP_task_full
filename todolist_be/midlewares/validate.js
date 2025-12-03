import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// para que lea el archivo .env la variable de entorno
dotenv.config();

function validateToken(req, res, next) {

    // 1️⃣ Obtener token del header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token no enviado" });
    }

    // El formato esperado es:  Bearer TOKEN y en la posicion 1 esta el token
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token inválido" });
    }

    try {
        // 2️⃣ Verificar token usando la SECRET_KEY
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // 3️⃣ Guardar info del usuario en req.user para usar después
        req.user = decoded;

        next(); // 4️⃣ Continuar hacia la ruta protegida

    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
}

const validateRole = (rolesAuth) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Acceso denegado" });
        }

        if (!rolesAuth.includes(req.user.rol)){
            return res.status(401).json({ message: "no tienes permiso para acceder a esta ruta" });
        }
        next();
    };  
};

export default {
    validateToken,
    validateRole
};