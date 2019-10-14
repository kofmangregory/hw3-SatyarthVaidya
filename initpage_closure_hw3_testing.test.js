const theAPI = require('./initpage_closure_hw3_testing.js');


test('testing changeCityName', () => {
  console.log('HI');
  theAPI.changeCityName('haze', '100');
  document.getElementById('city').innerHTML = '100';
  const element = document.getElementById('city').innerHTML;
  expect(element).toBe('100');
});

test('check for not Null input',() => {
  expect(theAPI.validateInput('Surat', false)).toBeTruthy();
});

test('check if DOM Assignment done properly', () => {
  const a = (theAPI.addRadio('Surat', 1))();
  console.log(`this is a:${  a.id}`);
  console.log(a.getElementById('city1'));
  var element = document.getElementById('city1');
  expect(element.innerHTML).not.toBeNull();
  expect(element.innerHTML).toEqual('Surat');
});


test('check if dom elements created properly', () => {
  theAPI.addImgDiv();
})

