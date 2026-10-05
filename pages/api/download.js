export default async function handler(req, res) {
  const { url, title } = req.query;

  if (!url || !url.startsWith("https://img.youtube.com/vi/")) {
    return res.status(400).json({ error: "Invalid image URL" });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch image" });
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filename = title ? `${title}.jpg` : "thumbnail.jpg";

    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Cache-Control", "public, max-age=86400");
    return res.send(buffer);
  } catch (error) {
    return res.status(500).json({ error: "Failed to download image" });
  }
}