import Sidebar from "@/components/sidebar";
import Youtube from "@/components/youtube";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <div>
      <Sidebar />

      <div className="p-7 sm:ml-64">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Getting started
        </h1>

        <p className="mt-8 mb-8 text-gray-600 dark:text-gray-400">
          <Link
            href="https://nl.wikipedia.org/wiki/JavaScript"
            target="_blank"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            JavaScript (JS)
          </Link>{" "}
          is een programmeertaal waarmee je webpagina’s interactief maakt. Denk
          aan knoppen die iets doen als je erop klikt, formulieren die je kunt
          invullen, of animaties die verschijnen. Zonder JavaScript zou het web
          maar een saaie bedoening zijn — alsof je een concert bezoekt zonder
          geluid.
        </p>

        <Youtube videoId="R-FxmoVM7X4" />

        <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Projectstructuur
        </h2>

        <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Om overzicht te houden in je project, gebruik je deze mappenstructuur:
        </p>

        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>/projectnaam</li>
          <ul className="max-w-md space-y-1 ml-4 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>/css</li>
            <ul className="max-w-md space-y-1 ml-8 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>style.css</li>
            </ul>
            <li>/images</li>
            <ul className="max-w-md space-y-1 ml-8 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>logo.png</li>
              <li>background.jpg</li>
            </ul>
            <li>/js</li>
            <ul className="max-w-md space-y-1 ml-8 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>script.js</li>
            </ul>
            <li>index.html</li>
            <li>contact.html</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
