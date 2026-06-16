import fs from "fs";
import path from "path";

export default function handler(req, res) {

  try {

    const { type } = req.query;

    const filePath = path.join(
      process.cwd(),
      "api",
      "random",
      `${type}.json`
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    const images = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    if (!Array.isArray(images) || images.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No images found"
      });
    }

    const random =
      images[Math.floor(Math.random() * images.length)];

    return res.redirect(302, random);

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

  }

}
