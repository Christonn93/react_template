import { Slide, toast } from 'react-toastify';

export const Home = () => {
  const notify = () =>
    toast('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });

  return (
    <>
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home page!</p>
        <button onClick={notify}>Notify !</button>
      </div>
    </>
  );
};
