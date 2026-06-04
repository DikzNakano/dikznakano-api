import { MongoClient } from "mongodb";

export default async function handler(req, res) {

res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
);

res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
);

res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
);

if (req.method === "OPTIONS") {
    return res.status(200).end();
}

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }

    try {

        const { username, phone } = req.body;

        if (!username || !phone) {
            return res.status(400).json({
                success: false,
                error: "Data tidak lengkap"
            });
        }

        const cleanPhone = phone.replace(/\s+/g, "");

        const client = new MongoClient(process.env.MONGODB_URI);

        await client.connect();

        const db = client.db("skp2m");
        const members = db.collection("members");

        const existing = await members.findOne({
            phone: cleanPhone
        });

        if (existing) {
            await client.close();

            return res.status(400).json({
                success: false,
                error: "Nomor sudah terdaftar"
            });
        }

        const result = await members.insertOne({
            username,
            phone: cleanPhone,
            createdAt: new Date()
        });

        await client.close();

        return res.status(200).json({
            success: true,
            memberId: result.insertedId
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            error: err.message
        });

    }

}