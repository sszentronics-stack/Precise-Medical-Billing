import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import FinalCta from "../components/FinalCta.jsx";
import { BLOG_POSTS } from "../data/content.js";

const Blog = () => (
  <>
    <section className="bg-[var(--navy)] pt-32 pb-20 lg:pt-36 lg:pb-24 text-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
            Blog
          </span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Billing insights worth reading.
          </h1>
        </Reveal>
      </div>
    </section>

    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
        {BLOG_POSTS.map((post, i) => (
          <Reveal
            as={Link}
            to={`/blog/${post.slug}`}
            key={post.slug}
            delay={i * 70}
            className="group block rounded-lg overflow-hidden border border-[var(--border)] hover:shadow-card hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={`${post.image}&w=600`}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="type-overline text-[var(--navy)]">
                {post.tag}
              </span>
              <h3 className="type-subhead text-[17px] text-[var(--navy)] mt-2">
                {post.title}
              </h3>
              <p className="type-body-sm text-[var(--muted)] mt-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold font-sans text-[var(--navy)] group-hover:gap-2.5 transition-all">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <FinalCta />
  </>
);

export default Blog;
