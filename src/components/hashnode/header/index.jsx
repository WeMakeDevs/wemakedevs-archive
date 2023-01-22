import './hello.css';

const Header = () => {
  return (
    <>
      <header className='containertest'>
        <div>
          <div className='introtext'>
            <h2 className='h2-hashnode'>
              <span className='wemakedevs'>WEMAKEDEVS </span> BLOGGING
              CHALLENGES
            </h2>
            <strong>
              <p className='hashnode'> Powered by hashnode </p>
            </strong>
            <hr className='hr-styled-hashnode' />
            <p className='p-hashnode'>
              Get a chance to win exciting prizes such as{' '}
              <strong>
                {' '}
                MacBooks, iPhones, iPads and more every month 🤩{' '}
              </strong>
            </p>
            <p className='p-hashnode'>
              <span className='wemakedevs'>Blogging</span> is about being
              yourself and putting what you have into it.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
