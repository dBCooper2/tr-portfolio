import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import MarkdownContent from '@/components/MarkdownContent';
import { fetchMarkdownContent } from '@/utils/markdown';

export default async function Summary() {
  const summaryContent = await fetchMarkdownContent('src/content/Summary.md');

  return (
    <div>
      <div className="px-2 space-y-4">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <Image
              src="/images/headshot.png"
              alt="Trevor Rowland Headshot"
              width={225}
              height={225}
              className="rounded-full border-4 border-cBlock"
            />
          </div>
        </div>
        <div id="Summary" className="flex justify-center lg:justify-start">
          <MarkdownContent content={summaryContent} />
        </div>
      </div>
      <div className="px-2 mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xl font-bold">
        <a
          href="https://www.linkedin.com/in/trevor-rowland711/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cLink hover:text-cLinkVisited hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/dBCooper2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cLink hover:text-cLinkVisited hover:underline"
        >
          GitHub
        </a>
        <a
          href="/documents/trevor-rowland-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cLink hover:text-cLinkVisited hover:underline"
        >
          Resume
        </a>
        <a
          href="/contact"
          rel="noopener noreferrer"
          className="text-cLink hover:text-cLinkVisited hover:underline"
        >
          Contact
        </a>
      </div>
    </div>
  );
}