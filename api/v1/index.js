export default function handler(req, res) {
  res.status(200).json({
    status: true,
    name: "DikzNakano API",
    version: "v1",
    message: "Welcome to DikzNakano API"
  });
}