import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal.jsx";
import { BLOG_POSTS } from "../../data/content.js";

const BlogTeaser = () => (
  <section className="bg-pattern py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <span className="type-overline text-[var(--navy)]">
            From the blog
          </span>
          <h2 className="type-headline text-[var(--navy)] mt-3">
            Billing insights worth reading.
          </h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BLOG_POSTS.map((post, i) => (
          <Reveal
            as={Link}
            to={`/blog/${post.slug}`}
            key={post.slug}
            delay={i * 70}
            className="group block rounded-lg overflow-hidden border border-[var(--border)] hover:shadow-card hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-32 overflow-hidden">
              <img
                src={`${post.image}&w=400`}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 bg-white">
              <span className="type-overline text-[var(--navy)]" style={{ fontSize: "10.5px" }}>
                {post.tag}
              </span>
              <h3 className="type-subhead text-[var(--navy)] mt-2" style={{ fontSize: "15px" }}>
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 mt-4 text-[12.5px] font-semibold font-sans text-[var(--navy)] group-hover:gap-2.5 transition-all">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogTeaser;
