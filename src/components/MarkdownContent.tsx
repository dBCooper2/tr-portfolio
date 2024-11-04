import React from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchMarkdownContent } from '@/utils/markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import 'katex/dist/katex.min.css';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <article className="markdown-content font-oldStandardTT 
        w-full md:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)]
        mx-auto my-8 break-words">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeSlug, rehypeRaw, rehypeAutolinkHeadings]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="markdown-h1" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="markdown-h2" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="markdown-h3" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="markdown-h4" {...props} />
            ),
            h5: ({ node, ...props }) => (
              <h5 className="markdown-h5" {...props} />
            ),
            h6: ({ node, ...props }) => (
              <h6 className="markdown-h6" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="markdown-link" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="markdown-paragraph" {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className="markdown-hr border-t border-cLineBreak my-8" {...props} />
            ),
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-6">
                <table className="markdown-table w-full border-collapse border border-cLineBreak" {...props} />
              </div>
            ),
            td: ({ node, ...props }) => (
              <td className="border border-cLineBreak p-2 text-cBody" {...props} />
            ),
            th: ({ node, ...props }) => (
              <th className="border border-cLineBreak p-2 text-cBody font-bold" {...props} />
            ),
            code: ({ node, ...props }) => (
              <div className="overflow-x-auto my-4">
                <SyntaxHighlighter 
                  language="javascript" 
                  className="rounded-lg !bg-gray-800 p-4"
                  {...props} 
                />
              </div>
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mb-4 text-cBody" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside mb-4 text-cBody" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote 
                className="border-l-4 border-cLineBreak pl-4 my-4 italic text-cBody"
                {...props} 
              />
            ),
            img: ({ node, ...props }) => (
              <img 
                className="max-w-full h-auto mx-auto my-4 rounded-lg"
                {...props}
              />
            ),
            span: ({ node, ...props }) => {
              const isKatex = (node?.properties?.className as string)?.includes('katex') ?? false;
              if (isKatex) {
                return <span style={{ color: '#2142ab' }} {...props} />;
              }
              return <span className="text-cBody" {...props} />;
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default MarkdownContent;