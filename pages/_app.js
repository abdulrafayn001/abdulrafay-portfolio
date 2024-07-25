import "../styles/globals.css";

// components
import Layout from "../components/Layout";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const metadata = {
  title: "Abdul Rafay - Full Stack Developer",
  description:
    "Welcome to my portfolio website. I specialize in Full Stack Development using JavaScript, React, Node.js, and more. Check out my projects and get in touch!",
  url: "https://abdulrafay-ebon.vercel.app",
  image: "https://abdulrafay-ebon.vercel.app",
  siteName: "Abdul Rafay's Portfolio",
  author: "Abdul Rafay",
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:site_name" content={metadata.siteName} />

        <link rel="canonical" href={`${metadata.url}/about`} />
        <link rel="icon" href="/favicon.ico" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.author} />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
