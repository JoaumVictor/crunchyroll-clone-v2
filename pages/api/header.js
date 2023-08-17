export default function headerTags(req, res) {
  const tags = ["Navegar", "Mangá", "Jogos", "Notícias"];
  return res.status(200).json(tags);
}
