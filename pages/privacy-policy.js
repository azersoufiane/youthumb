import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - YouTube Thumbnail Downloader | GatewayMoon</title>
        <meta
          name="description"
          content="Privacy Policy for GatewayMoon's YouTube Thumbnail Downloader detailing data collection, cookies, and Google AdSense compliance."
        />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              GatewayMoon (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the YouTube Thumbnail Downloader. We do not require users to create accounts, nor do we store any personal information, YouTube links, or downloaded media on our servers. All thumbnail processing occurs on-the-fly and directly through public YouTube endpoints.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Log Files &amp; Analytics</h2>
            <p>
              Like most web services, we may collect standard internet log information such as IP addresses, browser types, internet service providers (ISPs), referring/exit pages, and date/time stamps. This data is non-personally identifiable and used solely for site maintenance, trend analysis, and performance optimization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cookies and Web Beacons</h2>
            <p className="mb-3">
              We use cookies to store information about visitor preferences and optimize your browsing experience.
            </p>
            <p>
              <strong>Google DoubleClick DART Cookie:</strong> Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Advertisers</h2>
            <p>
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on GatewayMoon. They automatically receive your IP address when this occurs. We have no access to or control over these cookies used by third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Disclaimer &amp; Third-Party Rights</h2>
            <p>
              GatewayMoon is an independent utility tool and is not affiliated, endorsed, or partnered with YouTube, Google LLC, or Alphabet Inc. All YouTube logos, trademarks, and media are the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p>
              If you have questions or require more information about our Privacy Policy, please reach out through our <a href="/contact-us" className="text-blue-600 hover:underline">Contact Us</a> page.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;