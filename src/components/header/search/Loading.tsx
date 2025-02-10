import "./loading.css";
const Loading = () => {
  return (
    <div className='w-full py-5 px-5 flex items-center justify-center'>
      <div className='loader'>
        <div className='inner one'></div>
        <div className='inner two'></div>
        <div className='inner three'></div>
      </div>
    </div>
  );
};

export default Loading;
