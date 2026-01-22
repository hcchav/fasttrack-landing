"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-white mt-8 mb-3">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="text-white font-semibold">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 mb-4 text-zinc-300">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 mb-4 text-zinc-300">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="text-zinc-300">{children}</li>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b border-zinc-700">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="text-left text-zinc-400 font-medium py-3 px-4">{children}</th>
        ),
        td: ({ children }) => (
          <td className="text-zinc-300 py-3 px-4 border-b border-zinc-800">{children}</td>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-zinc-400 my-4">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-emerald-400 text-sm">
            {children}
          </code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
