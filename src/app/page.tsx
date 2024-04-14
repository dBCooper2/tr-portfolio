import Projects from "../components/Projects";
import Skills from "@/components/Skills";
import MarkdownContent from '@/components/MarkdownContent';

import { fetchMarkdownContent } from '@/utils/markdown';

import 'tailwindcss/tailwind.css';
import Head from "./head"

export default async function HomePage(sectionId: string) {
  const abstractContent = await fetchMarkdownContent('src/content/Abstract.md');
  const educationContent = await fetchMarkdownContent('src/content/Education.md');
  const experienceContent = await fetchMarkdownContent('src/content/Experience.md');
  const certificateContent = await fetchMarkdownContent('src/content/Certificates.md');
  // const researchContent = await fetchMarkdownContent('src/content/Research.md');
  const footerContent = await fetchMarkdownContent('src/content/Footer.md');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-cBg font-oldStandardTT px-4 md:px-8 lg:px-16 relative overflow-y-auto">
      <div className="w-full md:w-1/3 bg-cBg sticky top-0 left-0 p-6 md:px-4 md:py-24 min-h-screen md:min-h-1/3 md:order-1">
        <Head />
      </div>
      <div className="w-full md:w-2/3 bg-cBg p-4 md:p-12 md:min-h-2/3 md:order-2 space-y-6">
        <div id="Abstract">
          <MarkdownContent content={abstractContent} />
        </div>
        <div id="Skills">
          <h1 className="markdown-h1">Skills</h1>
          <Skills />
        </div>
        <div id="Education">
          <MarkdownContent content={educationContent} />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Experience">
          <MarkdownContent content={experienceContent} />
        </div>
        <div id="Certificates">
          <MarkdownContent content={certificateContent} />
        </div>
        <div id="Articles">
          <h1 className="text-cH1 font-bold text-xl">Articles and Blog Posts coming soon...</h1>
        </div>
        <div id="Footer">
          <MarkdownContent content={footerContent} />
        </div>
      </div>
    </div>
  );
}