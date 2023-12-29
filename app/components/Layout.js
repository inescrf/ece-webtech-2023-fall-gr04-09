import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{`Webtech ${title ? `- ${title}` : ''}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen dark:bg-[#1f2937]"> 
        <Header />
        <main className="flex-grow w-full p-6 md:p-10 bg-white dark:bg-[#1f2937]"> 
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
