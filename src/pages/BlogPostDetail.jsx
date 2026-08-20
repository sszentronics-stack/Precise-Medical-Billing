import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import FinalCta from "../components/FinalCta.jsx";
import { BLOG_POSTS } from "../data/content.js";

const BlogBody = ({ body }) => (
  <div className="mt-8">
    {body.map((block, i) => {
      if (block.type === "p") {
        return (
          <p key={i} className="type-body text-[var(--ink)] mb-5">
            {block.text}
          </p>
        );
      }
      if (block.type === "list") {
        return (
          <ol key={i} className="space-y-4 my-8">
            {block.items.map((item, j) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--offwhite)] p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] type-caption font-bold text-white">
                  {j + 1}
                </span>
                <div>
                  <h3 className="type-subhead text-[16px] text-[var(--navy)]">{item.title}</h3>
                  <p className="type-body-sm text-[var(--muted)] mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        );
      }
      return null;
    })}
  </div>
);

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center">
        <p className="text-[var(--muted)]">
          We couldn't find that article.{" "}
          <Link to="/blog" className="text-[var(--navy)] font-semibold underline">
            See all articles
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-[var(--navy)] pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 type-body-sm text-white/60 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
            </Link>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
              {post.tag}
            </span>
            <h1 className="font-headline text-white text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="type-body-sm text-white/50 mt-4">
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              {" · "}
              {post.readTime}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-pattern py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <img
              src={`${post.image}&w=1400`}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-lg border border-[var(--border)]"
            />
          </Reveal>
          <Reveal delay={80}>
            <BlogBody body={post.body} />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
};

export default BlogPostDetail;
