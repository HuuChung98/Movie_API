import jwt from "jsonwebtoken";


const generateAccessToken = (data) => {
    return jwt.sign({data}, process.env.TOKEN_SECRET, {expiresIn: '5m'});
} 

const authenticateToken = (req, res, next) => {
    try {
        // const authHeader = req.headers['authorization'];
        const authHeader = req.headers.token;
        const token_header = authHeader && authHeader.split(' ')[0];
        const token = authHeader && authHeader.split(' ')[1];
    
        // if (token == null) return res.sendStatus(401);
        if (token == null) return res.send("You don't have authorize to access");
        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET);
    
        if (verifyToken && token_header == "Mavid") {
            next();
        } else {
            res.send("Token invalid");
        }
    } catch (error) {
        res.send("Error in verify token process");
    }
}


export {
    generateAccessToken,
    authenticateToken
}