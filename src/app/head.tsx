import ResumeButton from "@/components/ResumeButton";
import Summary from "@/components/Summary";
import Image from "next/image";

export default function Head() {
  return (
    <>
    <>
      <title>Trevor Rowland's Portfolio</title>
      <meta content="width=device.width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
    <div className="pt-4 md:pt-8">
      <Summary />
      <br />
      <div className="space-y-4 hidden md:block">
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
    </>
  );
}