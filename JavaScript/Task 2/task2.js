function remove_letter(value, ToRemove) {
  const regExpression = new RegExp(ToRemove, 'gi');

  return value.replace(regExpression, '');
}
console.log(remove_letter('Nemanjaaa Zunic', 'a'));

//2

function reverse(value) {
  const list = value.split('');

  const listReversed = list.reverse();

  return listReversed.join('');

}

console.log(reverse('Nemanja Zunic'));