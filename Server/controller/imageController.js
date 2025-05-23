
import userModel from "../models/userModels.js";
import FormData from 'form-data';
import axios from "axios";

export const generateImage = async (req, res) => {
    try {
        console.log("✅ generateImage endpoint hit");
        console.log("🧑 req.user:", req.user);

        const userId = req.user?.id; // get from middleware
        const { prompt } = req.body;

        if (!userId) {
            return res.status(401).json({ success: false, message: 'User ID missing from token' });
        }

        const user = await userModel.findById(userId);
        console.log("🔍 User found:", user);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (!prompt) {
            return res.status(400).json({ success: false, message: 'Missing Prompt' });
        }

        if (user.creditBalance <= 0) {
            return res.status(403).json({ success: false, message: "No Credit Balance", creditBalance: user.creditBalance });
        }

        const formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                ...formData.getHeaders(),
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        });

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct 1 credit
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance + 0 });

        res.json({
            success: true,
            message: 'Image Generated',
            creditBalance: user.creditBalance,
            resultImage
        });

    } catch (e) {
        console.error("❌ Error in generateImage:", e);
        res.status(500).json({ success: false, message: e.message });
    }
};
