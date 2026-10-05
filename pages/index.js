import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const extractVideoID = (url) => {
    if (!url) return null;
    const regExp =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.trim().match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const getYouTubeThumbnail = (e) => {
    if (e) e.preventDefault();
    setError("");
    setCopiedIndex(null);

    const videoId = extractVideoID(videoURL);

    if (!videoId) {
      setError("Please enter a valid YouTube video or Shorts URL.");
      return;
    }

    setLoading(true);

    const thumbnailBaseUrl = "https://img.youtube.com/vi/";
    const options = [
      { resolution: "Maximum Resolution (1080p / 720p)", code: "maxresdefault", tag: "HD" },
      { resolution: "Standard Quality (640x480)", code: "sddefault", tag: "SD" },
      { resolution: "High Quality (480x360)", code: "hqdefault", tag: "HQ" },
      { resolution: "Medium Quality (320x180)", code: "mqdefault", tag: "MQ" },
    ];

    const generatedOptions = options.map((option) => ({
      resolution: option.resolution,
      tag: option.tag,
      code: option.code,
      url: `${thumbnailBaseUrl}${videoId}/${option.code}.jpg`,
      downloadUrl: `/api/download?url=${encodeURIComponent(
        `${thumbnailBaseUrl}${videoId}/${option.code}.jpg`
      )}&title=youtube-thumbnail-${videoId}-${option.code}`,
    }));

    setThumbnailOptions(generatedOptions);
    setLoading(false);
  };

  const handleCopy = (url, index) => {
    copy(url);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          YouTube Thumbnail Downloader
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Download high-quality YouTube video &amp; Shorts thumbnails in Full HD, HQ, and SD for free.
        </p>

        {/* Search / Input Box */}
        <form onSubmit={getYouTubeThumbnail} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800"
            placeholder="Paste YouTube or Shorts URL here (e.g., https://youtu.be/...)"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <button
            type="submit"
            className="btn-blue sm:w-auto"
            disabled={loading || !videoURL.trim()}
          >
            {loading ? "Fetching..." : "Get Thumbnails"}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-sm font-medium mt-3 text-left sm:text-center">
            {error}
          </p>
        )}
      </section>

      {/* Thumbnails Display Grid */}
      {thumbnailOptions.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center sm:text-left">
            Available Resolutions
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {thumbnailOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                  <span className="font-semibold text-gray-800 text-sm">{option.resolution}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                    {option.tag}
                  </span>
                </div>

                <div className="p-4 flex items-center justify-center bg-gray-100 min-h-[220px]">
                  <img
                    src={option.url}
                    alt={`YouTube Thumbnail ${option.tag}`}
                    className="max-h-64 object-contain rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = thumbnailOptions[2]?.url || option.url;
                    }}
                  />
                </div>

                <div className="p-4 bg-white border-t border-gray-100 flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopy(option.url, index)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg text-sm transition-colors text-center"
                  >
                    {copiedIndex === index ? "✓ Copied!" : "Copy URL"}
                  </button>
                  <a
                    href={option.downloadUrl}
                    download
                    className="flex-1 btn-green text-sm text-center"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEO Content Section */}
      <article className="mt-16 pt-12 border-t border-gray-200 prose lg:prose-lg max-w-none text-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Unveiling the Power of YouTube Thumbnail Downloader
        </h2>
        <p className="leading-relaxed mb-6">
          In the ever-evolving landscape of digital content, captivating visuals serve as the gateway
          to audience engagement. Among the arsenal of tools designed to simplify this process, our
          YouTube Thumbnail Downloader stands out as an effortless solution to grab high-resolution
          cover images directly from any video.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">1. Understanding the YouTube Thumbnail Downloader</h3>
        <p className="leading-relaxed mb-4">
          The YouTube Thumbnail Downloader offers a range of resolutions—from Full HD (1080p) and
          HD (720p) to Standard and Medium definitions. This empowers creators, designers, and marketers
          to extract the exact graphic quality they need.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">2. Practical Applications</h3>
        <p className="leading-relaxed mb-4">
          Whether you are preparing presentation slides, conducting competitive media analysis,
          designing blog cover images, or creating video reaction concepts, grabbing original thumbnails
          saves time and preserves full image fidelity.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">3. How to Download YouTube Video Thumbnails</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>Copy the URL of any YouTube video or Shorts link from your browser or mobile app.</li>
          <li>Paste the link into the search box above and click <strong>Get Thumbnails</strong>.</li>
          <li>Select your preferred resolution and click <strong>Download</strong> to save the image directly.</li>
        </ol>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">4. Legal &amp; Copyright Guidelines</h3>
        <p className="leading-relaxed mb-4">
          While downloading thumbnail images for personal reference, study, or fair-use commentary
          is common practice, remember that original thumbnail artwork is protected by copyright. If
          you plan to reuse graphics publicly or commercially, always obtain permission from the
          original creator.
        </p>
      </article>
    </div>
  );
};

export default Index;