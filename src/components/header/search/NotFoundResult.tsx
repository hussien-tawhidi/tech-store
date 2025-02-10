"use client"
interface Props {
    cate: string
    query:string
}

const NotFoundResult = ({cate,query}:Props) => {
  return (
    <div className='text-gray-500 my-4 flex flex-col items-center mb-10'>
      <p className='text-sm flex gap-1 items-center'>
        No results found for:
        <span className='font-bold capitalize text-xl text-slate-800'>
          {query}
        </span>{" "}
        {cate && (
          <span className='font-bold capitalize text-xl text-slate-800'>
            in {cate}
          </span>
        )}
      </p>
      <p className='text-sm mt-2 mb-5'>Try searching for something else.</p>
    </div>
  );
}

export default NotFoundResult