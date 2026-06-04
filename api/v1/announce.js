import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {

    try {

        const { id } = req.body;

        const client = new MongoClient(
            process.env.MONGODB_URI
        );

        await client.connect();

        const db = client.db("skp2m");

        await db
            .collection("members")
            .updateOne(
                {
                    _id: new ObjectId(id)
                },
                {
                    $set: {
                        announced: true
                    }
                }
            );

        await client.close();

        res.json({
            success: true
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

}