
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-green-1 px-10 py-2 text-center relative">
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Web-Tech GR-04
      </a>
      <Image
        src="/adaltacook.png" // Assurez-vous que le chemin relatif correspond à l'emplacement de votre image dans le dossier "public"
        alt="Adaltas Logo"
        width={35}
        height={35}
        className="cursor-pointer h-6 mr-5 absolute bottom-2 right-2" // Utilisez les classes "absolute", "bottom-2" et "right-2" pour positionner l'image en bas à droite
      />
    </footer>
  );
}

