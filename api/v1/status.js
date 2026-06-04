export default function handler(req, res) {
  res.status(200).json({
    status: true,
    api: "DikzNakano API",
    version: "v1",
    timestamp: Date.now(),
    uptime: process.uptime()
  });
}