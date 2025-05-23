import jwt from 'jsonwebtoken';
const userAuth = async (req, res, next) => {
    const {token} = req.headers;
    console.log("Incoming token:", token); // Add this
    if(!token){
        return res.json({success: false, message: 'Not Authorized Login Again'})
    }
    try{
        
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("Token decoded:", tokenDecode); // Add this
        if(tokenDecode.id){
        //   req.body.userId = tokenDecode.id;
        req.user = { id: tokenDecode.id }; // ✅ SAFE
             next();
        } else {
            return res.json({success: false, message: 'Not Authorized Login Again'})
        }
     
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export default userAuth;