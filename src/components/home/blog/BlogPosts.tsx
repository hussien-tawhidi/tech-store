"use client";

import BlogPostCard from "@/components/cards/BlogPostCard";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
const BlogPosts = () => {
  return (
    <div className=''>
      <div className=''>
        <h4 className='flex items-center gap-2 md:text-3xl font-semibold text-slate-600 my-3 capitalize'>
          <IoStar /> Recently blog post added
        </h4>
        <Link
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog`}
          className='font-semibold text-sm capitalize text-slate-600 hover:underline transition-all hover:text-slate-950'>
          see more
        </Link>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3'>
        <BlogPostCard
          category='phone'
          date={"2024-03-23"}
          title='Safty battery'
          categoryId='12sff'
          blogPostId='23123124'
        />
        <BlogPostCard
          category='phone'
          date={"2024-03-23"}
          title='Safty battery'
          categoryId='12sff'
          blogPostId='23123124'
        />
        <BlogPostCard
          category='phone'
          date={"2024-03-23"}
          title='Safty battery'
          categoryId='12sff'
          blogPostId='23123124'
        />
        <BlogPostCard
          category='phone'
          date={"2024-03-23"}
          title='Safty battery'
          categoryId='12sff'
          blogPostId='23123124'
        />
      </div>
    </div>
  );
};

export default BlogPosts;
