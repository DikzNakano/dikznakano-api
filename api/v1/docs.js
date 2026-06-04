export default function handler(req, res) {
  res.status(200).json({
    name: "DikzNakano API",
    version: "v1",
    endpoints: [
      "/api/v1",
      "/api/v1/status",
      "/api/v1/docs"
    ]
  });
}