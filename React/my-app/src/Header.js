function Header() {

  function onButtonClick() {
    const button = document.getElementById('click');

    button.style.background = 'lightgoldenrodyellow';

    console.log('Button is clicked!');
    alert('Hey you are clicking button....')

  }
  return (
    <header className='main-header'>
      <a href='https://www.google.com' target='_blank' rel='noreferrer'>
        <img
          src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2abd662597191.5a9589b09ddf5.jpg'
          alt='google'
          id='logo'
        />
      </a>

      <button id="click"
        onClick={onButtonClick}>
        Contact
      </button>
    </header >
  );

}

export default Header;

