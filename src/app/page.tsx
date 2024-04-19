import Projects from "../components/Projects";
import Skills from "@/components/Skills";
import Articles from "@/components/Articles";
import MarkdownContent from '@/components/MarkdownContent';

import { fetchMarkdownContent } from '@/utils/markdown';

//css
import 'tailwindcss/tailwind.css';
import Head from "./head"
import ResumeButton from "@/components/ResumeButton";
import Summary from "@/components/Summary";

export default async function HomePage() {
  const abstractContent = await fetchMarkdownContent('src/content/Abstract.md');
  const educationContent = await fetchMarkdownContent('src/content/Education.md');
  const experienceContent = await fetchMarkdownContent('src/content/Experience.md');
  const certificateContent = await fetchMarkdownContent('src/content/Certificates.md');
  // const researchContent = await fetchMarkdownContent('src/content/Research.md');
  const footerContent = await fetchMarkdownContent('src/content/Footer.md');

  // Tailwind Breakpoints: none/sm: Phones, md: Tablets, lg: Desktop, xl: Widescreen Desktop

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-cBg font-oldStandardTT px-8 py-24 relative overflow-y-auto">
      <div className="bg-cBg lg:w-full px-6 lg:px-20 lg:sticky lg:top-0 lg:left-0 lg:min-h-1/3 lg:order-1">
        <div className="pt-4">
          <Summary />
          <br />
          <div className="space-y-4 hidden lg:block">
            <div className="flex flex-col space-y-2">
              <ResumeButton sectionId="Abstract" />
              <ResumeButton sectionId="Skills" />
              <ResumeButton sectionId="Education" />
              <ResumeButton sectionId="Projects" />
              <ResumeButton sectionId="Experience" />
              <ResumeButton sectionId="Certificates" />
              <ResumeButton sectionId="Articles" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row bg-cBg px-6 lg:px-12 py-8 pb-10 grid grid-cols-1 gap-8 lg:order-2">
        <div id="Abstract">
          <MarkdownContent content={abstractContent} />
        </div>
        <div id="Skills">
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
        <Articles />
        </div>
        <div id="Footer" className='pb-12'>
          <MarkdownContent content={footerContent} />
        </div>
      </div>
    </div>
  );
}