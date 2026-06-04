export default function handler(req, res) {
  res.status(200).json({
    status: true,
    name: "DikzNakano API",
    version: "1.0.0",
    message: "API Online"
  });
}