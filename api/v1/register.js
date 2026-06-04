import { MongoClient } from "mongodb";

export default async function handler(req, res) {

    if(req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    try {

        const { username, phone } = req.body;

        const client = new MongoClient(
            process.env.MONGODB_URI
        );

        await client.connect();

        const db = client.db("skp2m");

        const result = await db
        .collection("members")
        .insertOne({
            username,
            phone,
            createdAt: new Date()
        });

        await client.close();

        res.status(200).json({
            success: true,
            id: result.insertedId
        });

    } catch(err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

}