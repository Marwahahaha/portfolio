import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 dark:text-zinc-50">Marwah Al-Shakhli</h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
          <Image
            src="/profile-image.png"
            alt="Profile Image"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <nav>
            <ul className="space-y-6 text-lg">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-600 dark:text-zinc-50 dark:hover:text-gray-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/blogposts"
                  className="hover:text-gray-600 dark:text-zinc-50 dark:hover:text-gray-400 transition-colors">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-gray-600 dark:text-zinc-50 dark:hover:text-gray-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-600 dark:text-zinc-50 dark:hover:text-gray-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
