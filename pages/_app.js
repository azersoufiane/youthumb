import '../styles/index.css';
import { DefaultSeo } from 'next-seo';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <DefaultSeo
        title="YouTube Thumbnail Downloader - Free HD & 4K Thumbnail Grabber"
        description="Download high-quality YouTube video thumbnails in Full HD, HD, and SD resolution for free."
        canonical="https://gatewaymoon.com"
        openGraph={{
          url: 'https://gatewaymoon.com',
          title: 'YouTube Thumbnail Downloader',
          description: 'Download high-quality YouTube thumbnails easily.',
          site_name: 'YouTube Thumbnail Downloader',
        }}
      />

      {/* Global Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default MyApp;