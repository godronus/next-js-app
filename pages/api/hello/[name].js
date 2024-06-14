export default function handler(req, res) {
  const { name } = req.query;
  res.statusCode = 200;
  res.end(JSON.stringify({ message: `Hello, ${name}!` }));
}
