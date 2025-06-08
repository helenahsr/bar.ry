import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle } from "@deemlol/next-icons";
import { House } from "@deemlol/next-icons";
import { Camera } from "@deemlol/next-icons";

export default function Home() {
  const images = [
    '/images/barry1.jpeg',
    '/images/barry2.jpeg',
    '/images/barry3.jpeg',
    '/images/barry4.jpeg',
    '/images/barry5.jpeg',
    '/images/barry6.jpeg',
    '/images/barry7.jpeg',
    '/images/barry8.jpeg',
    '/images/barry9.jpeg',
    '/images/barry10.jpeg',
    '/images/barry11.jpeg',
    '/images/barry12.jpeg',
  ];

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <Link href="/" className="link">
            <span className="nav-item" >
              <span className="icon"><House color="#000" /></span> Home
            </span>
          </Link>
          <Link href="/imagens" className="link">
            <span className="nav-item">
              <span className="icon"><Camera color="#000" /></span> Imagens
            </span>
          </Link>
          <Link href="/sobre" className="link">
            <span className="nav-item">
              <span className="icon"><AlertCircle color="#000" /></span> Sobre
            </span>
          </Link>
        </nav>
      </header>

      <main className="main-content">
        <h1 className="title">BAR.RY</h1>
        <h2 className="section-title">IMAGENS</h2>

        <div className="image-grid">
          {images.map((src, index) => (
            <div key={index} className="image-wrapper">
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
                className="image-item"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}