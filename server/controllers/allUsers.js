import user from '../models/auth.js';

export const getAllUsers = async (req,res) => {
    try {
        const allUsers = await user.find().select("name email");
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}