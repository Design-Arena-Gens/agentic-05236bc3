import Head from 'next/head';
import HighTechScene from '../components/HighTechScene';

export default function Home() {
  return (
    <>
      <Head>
        <title>Swiss High-Tech Piazza Feast</title>
        <meta name="description" content="Illustration of a white-shirt avatar and Popeye sharing a giant pizza on a futuristic Swiss street." />
      </Head>
      <main>
        <h1>Futuristic Swiss Street Feast</h1>
        <p className="tagline">
          An illustrated moment capturing a clean-cut avatar in a crisp white shirt and the unmistakable Popeye enjoying a monumental pizza on a sleek bench nestled within a glowing high-tech Swiss boulevard.
        </p>
        <div className="scene-wrapper">
          <HighTechScene />
        </div>
        <p className="caption">Crafted with layered SVG geometry to evoke the night glow of Switzerland&apos;s innovation capital.</p>
      </main>
    </>
  );
}
