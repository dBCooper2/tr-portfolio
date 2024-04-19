# tr-portfolio :: Trevor Rowland's Professional Portfolio

A Professional Portfolio built with NextJS and deployed using Vercel.


## Updating the Site

You can update the site by updating the Markdown and JSON files in `/src/content/`, then pushing the changes to the `main` branch.

### Editing the Markdown Files

Using Markdown Files to store your resume information is very convenient, because an update to your resume doesn't require any coding, just an edit to the markdown files and a push to GitHub.

The following files need to be edited to contain your info, and can be found in the directory `/src/content/`:

- Summary (`Summary.md`)
- Abstract (`Abstract.md`)
- Education (`Education.md`)
- Work Experience (`Experience.md`)
- Certificates (`Certificates.md`)
- Research (`Research.md`)
- Footer (`Footer.md`)
- 
A file is contained in the `/src/content/` directory named `MarkdownGuide.md` that you can use as a cheat sheet.

#### Skills:

The `tags.json` file is where you'll add your list of skills. The JSON containing the skills is in the form:

```json
{
  {
    "text":"Skill-Name-1",
    "color":"#A9A9A9"
  },
  {
    "text":"Skill-Name-2",
    "color":"#A9A9A9"
  },
  
  .
  .
  .
  
  {
    "text":"Skill-Name-N",
    "color":"#A9A9A9"
  },
}
```
For the skills, replace whitespace with a dash, and add a custom color for each skill.

#### Projects:

The `projects.json` file contains a blurb of each project and links to ther code/demo. If there is no demo the button will not appear, but the code button is always present. Link Skills from `tags.json` to the project by adding them to the "skills" field.

```json
{
  "1" : {
    "title": "Project 1 Title",
    "description": "Short Description of the Project",
    "skills": ["Skill-1, Skill-2, ..., Skill-N"],
	 "code": "Link-to-Code, if any",
    "demo": "Link-to-Demo, if any"
  },
  "2" : {
    "title": "Project 2 Title",
    "description": "Short Description of the Project",
    "skills": ["Skill-1, Skill-2, ..., Skill-N"],
    "code": "Link-to-Code, if any",
    "demo": "Link-to-Demo, if any"
  },
  
  .
  .
  .
  
  "N" : {
    "title": "Project N Title",
    "description": "Short Description of the Project",
    "skills": ["Skill-1, Skill-2, ..., Skill-N"],
    "code": "Link-to-Code, if any",
    "demo": "Link-to-Demo, if any"
  }
}
```

### Contact Page

To edit the contact page, navigate to `/src/app/contact/page.tsx` and navigate to the following section:

```html
<div className="text-cBody max-w-md px-4 text-left">
  <p>
    <a 
      href="mailto:YOUR EMAIL HERE" 
      className="Tailwind Stuff..."
    >Email: YOUR EMAIL HERE
    </a>
    <a
      href="https://www.linkedin.com/in/YOUR_USERNAME_HERE/"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
    >
      LinkedIn: YOUR NAME HERE
    </a>
    <a
      href="https://github.com/YOUR_USERNAME_HERE"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
    >
      GitHub: YOUR USERNAME HERE
    </a>
  </p>
</div>
```

Here you can change each of the `YOUR EMAIL/NAME/USERNAME HERE` fields to contain your information for Linkedin, Github, and email. Feel free to add your own links, following the format of the `<a>` components, or remove any that you do not have an account for or want advertised.

### Social Links and a PDF Resume Link

To edit the social links on the home page, navigate to the file `src/components/Summary.jsx` and navigate to the section:

```jsx
<div className="px-2 mt-8 flex flex-wrap justify-center md:justify-start gap-4 text-xl font-bold">
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
          href="/documents/YOUR_RESUME_HERE.pdf"
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

```



To update your resume, add it as a PDF to the directory `public/documents` and your resume will become accessible from the site. Make sure to rename the file in Summary.jsx to match the file in `/public/`.

## Site Customization: Images and Metadata

To make the site your own, you should add a headshot or profile picture, and edit the metadata so the site displays your name instead of mine.

### Headshot Image:

To update your headshot, add the new photo to the `/public/images/` directory in the project. Then copy the name of the filename, and locate the file `/src/components/Summary.jsx` and locate the following code:

```jsx
<Image
  src="/images/headshot_filename.png"
  alt="Trevor Rowland's Headshot"
  width={100}
  height={100}
  className="rounded-full border-4 border-cBlock"
/>
```

Change the line `src="/images/headshot_filename.png"` to include the filename of your headshot. Please keep in mind that it must be a valid filename with _no spaces_ within it.

While you're here, you can change the alt text of the image (`alt="Trevor Rowland's Headshot`) to your own name for accessibility, and you can also change the size of the image if you'd like it to be bigger by changing the `width` and `height` 

### Metadata and Website Icon:

To edit the icon that appears on a tab with your site, you need to create an icon. To do this, take the icon image you'd like to use and add it to the `/public/images/` folder. Then navigate to the file `/src/app/head.tsx` and find this section:

```tsx
<>
  <title>Trevor Rowland :: Portfolio</title>
  <meta content="width=device.width, initial-scale=1" name="viewport" /
  <link rel="icon" href="/images/filename.png" sizes="any" />
</>
```

Change the field `filename` in the line `<link rel="icon" href="/images/filename.png" sizes="any" />` to the name of your icon image file. While you're here, edit the `<title>` tag as well to contain your name, and add something to say it's your portfolio too if you'd like.

To finish setting up the icon, you also need to navigate to the `/src/app/layout.tsx` file, and find this section:

```tsx
export const metadata: Metadata = {
  title: "Trevor Rowland :: Portfolio",
  description: "Trevor Rowland's Professional Portfolio",
  icons: {
    icon: [
      {
        url: "/images/filename.png", // /public path
        href: "/images/filename.png", // /public path
      },
    ],
  },
};
```

Edit the Title and Description fields to change the metadata, and then move on to the `icons` section. Change the filenames in the fields `url` and `href` to match the filenames you just added in the `head.tsx` file.

## Site Customization: Resume Customization and Color Extras

### Extra Resume Content:

If you need to add/remove anything from the resume section, look in the `/src/app/page.tsx` file and navigate to this section:

```tsx
export default async function HomePage() {
  const abstractContent = await fetchMarkdownContent('src/content/Abstract.md');
  const educationContent = await fetchMarkdownContent('src/content/Education.md');
  const experienceContent = await fetchMarkdownContent('src/content/Experience.md');
  const certificateContent = await fetchMarkdownContent('src/content/Certificates.md');
  // const researchContent = await fetchMarkdownContent('src/content/Research.md');
  const footerContent = await fetchMarkdownContent('src/content/Footer.md');

  return (
    <div className="tailwind stuff...">
      <div className="tailwind stuff...">
        <Head />
      </div>
      <div className="tailwind stuff...">
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
        <div id="Footer">
          <MarkdownContent content={footerContent} />
        </div>
      </div>
    </div>
  );
}
```

To add a new section, you will need to add this block to the `return` statement:

```jsx
<div id="Filename">
  <MarkdownContent content={filenameContent} />
</div>
```

And a corresponding fetch request for the markdown file:

```jsx
const abstractContent = await fetchMarkdownContent('src/content/Abstract.md');
```

If you add a new section, you'll need to change the ResumeButton components in `/src/app/head.jsx`

```jsx
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
```

### Changing the Site's Colors, Fonts and Styles:

To change the colors in the site, other than the tags you edited previously in `tags.json`, navigate to the file `/tailwind.config.ts` and find the section:

```ts
theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cBg: '#000000', // background color
        cBgGradient: '#000000', // background color gradient
        cH1: '#FFFFFF', // heading 1 text color
        cH2: '#FFFFFF', // heading 2 text color
        cH3: '#FFFFFF', // heading 3 text color
        cH4: '#FFFFFF', // heading 4 text color
        cH5: '#FFFFFF', // heading 5 text color
        cH6: '#FFFFFF', // heading 6 text color
        cBody: '#FFFFFF', // body text color
        cBlock: '#808080', // code block color
        cLink: '#FFFFFF', // link color
        cLinkVisited: '#FFFFFF', // visited link color
        cButton: '#808080', // button color
        cButtonHover: '#808080', // button hover color
        cLineBreak: '#808080', // colors for line breaks
      },
      fontFamily: {
        'font': ['Old Standard TT', 'serif'], //LaTeX-Like Font
      },
    },
  },
  plugins: [],
};
```

Lastly, to add any custom styles for the rendered markdown, you can add custom styles to the file `/src/app/globals.css` in the `@layer utilities` section:

```css
@layer utilities {
    .text-balance {
        text-wrap: balance;
    }

    .tag-button {
        @apply rounded-full px-4 py-2 text-cBg font-medium cursor-pointer transition;
    }

    .tag-button-hover {
        @apply hover:bg-[color];
    }

    .markdown-h1 {
      @apply text-4xl font-bold text-cH1 mb-4;
    }
      
    .markdown-h2 {
      @apply text-3xl font-bold text-cH2 mb-3;
    }
      
    .markdown-h3 {
      @apply text-2xl font-bold text-cH3 mb-2;
    }
      
    .markdown-h4 {
      @apply text-xl font-bold text-cH4 mb-1;
    }
      
    .markdown-h5 {
      @apply text-lg font-bold text-cH5 mb-1;
    }
      
    .markdown-h6 {
      @apply text-base font-bold text-cH6 mb-1;
    }

    .markdown-link {
        @apply text-cLink hover:text-cLinkVisited;
    }

    .markdown-hr {
      @apply text-cLineBreak;
    }

    .markdown-paragraph {
        @apply text-cBody text-lg mb-4;
    }
}
```
