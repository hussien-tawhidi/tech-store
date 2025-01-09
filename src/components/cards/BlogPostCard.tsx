import Link from "next/link";
import { format } from "date-fns";
interface Props {
  category: string;
  date: string | number | Date;
  title: string;
  categoryId?: string;
  blogPostId: string;
}

const BlogPostCard = ({
  category,
  date,
  title,
  categoryId,
  blogPostId,
}: Props) => {
  return (
    <section className='rounded-md overflow-hidden'>
      <div
        className='relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96'
        style={{
          backgroundImage: `url("/assets/samsung/galaxy-watch5-pro.jpg")`,
        }}>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50'></div>
        <div className='absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3'>
          <Link
            rel='noopener noreferrer'
            href={`/blog/${categoryId}`}
            className='px-3 py-2 text-xs font-semibold tracking-wider uppercase text-slate-200'>
            {category}
          </Link>
          <div className='flex flex-col justify-start text-center text-slate-200'>
            <span className='text-3xl font-semibold leading-none tracking-wide'>
              {format(date, "dd")}
            </span>
            <span className='leading-none uppercase'>
              {format(date, "MMMM").slice(0, 3)}
            </span>
          </div>
        </div>
        <h2 className='z-10 p-5'>
          <Link
            rel='noopener noreferrer'
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/single_post/${blogPostId}`}
            className='font-medium text-md hover:underline text-slate-200'>
            {" "}
            {title}
          </Link>
        </h2>
      </div>
    </section>
  );
};

export default BlogPostCard;
