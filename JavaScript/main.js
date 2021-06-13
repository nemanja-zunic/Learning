window.onload = () => {


  const body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = 'lightgoldenrodyellow';

  const h = document.getElementById('heading');
  h.style.fontSize = '100px';

  const button = document.getElementById('click');
  button.onclick = () => {
    console.log('Button is clicked!');
    alert('Hey you are clicking button....')
  }

  const main = document.getElementById('main');
  main.style.fontStyle = 'italic';

  var oldDateObj = new Date();
  var newDateObj = new Date();
  newDateObj.setTime(oldDateObj.getTime());
  console.log(newDateObj);

}