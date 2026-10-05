import Head from 'next/head';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - YouTube Thumbnail Downloader | GatewayMoon</title>
        <meta
          name="description"
          content="Learn more about GatewayMoon and our free YouTube Thumbnail Downloader tool."
        />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
          About Us
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            Welcome to <strong>GatewayMoon&apos;s YouTube Thumbnail Downloader</strong>, your reliable, fast, and free online tool designed to help creators, digital marketers, graphic designers, and educators grab high-resolution video covers with ease.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Mission</h2>
          <p>
            Our mission is simple: provide a fast, privacy-focused, zero-clutter tool that lets you extract thumbnail images from any standard YouTube video or Shorts link in seconds. No software installation, no sign-ups, and no quality degradation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Why Use Our Downloader?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Multiple Resolutions:</strong> Download in Full HD (1080p), High Quality (720p), Standard (480p), or Medium quality.</li>
            <li><strong>YouTube Shorts Support:</strong> Full compatibility with both classic URLs and modern Shorts links.</li>
            <li><strong>Direct Downloads:</strong> Fast, one-click image downloads directly to your PC, Mac, Android, or iOS device.</li>
            <li><strong>100% Free:</strong> No hidden paywalls or subscription requirements.</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
            <Link href="/" className="btn-blue">
              Try the Downloader
            </Link>
            <Link href="/contact-us" className="px-5 py-2.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;