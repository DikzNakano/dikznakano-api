import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);

        await client.connect();

        const db = client.db("skp2m");

        const members = await db
            .collection("members")
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        await client.close();

        res.status(200).json({
            success: true,
            members
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
}