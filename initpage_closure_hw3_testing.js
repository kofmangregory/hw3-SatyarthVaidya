function changeCityName(description, temp, i) {
  document.getElementById(`temperature${i}`).innerHTML = `${temp}K `;
  document.getElementById(`weather_description${i}`).innerHTML = description;
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=NA756gtlejRSY9J3szjBsNA6JmZOiM3O&q=${description}&limit=1&offset=0&rating=G&lang=en`).then((response) => response.json()).then((wdata) => {
    document.getElementById(`celebrityImage${i}`).src = wdata.data[0].images.fixed_width.url;
  });
}
const addRadio = function (t, i) {
  console.log('addRadio called');
  if (i > 5) {
    alert('RESET !');
  }
  const div = document.createElement(`div${i}`);
  div.setAttribute('id', `div${i}`);
  function init() {
    console.log('init called !');
    const lbl = document.createElement('label');
    lbl.setAttribute('id', `city${i}`);
    lbl.innerHTML = `${t} `;
    div.appendChild(lbl);

    const lblOne = document.createElement('label');
    lblOne.setAttribute('id', `weather_description${i}`);
    lblOne.innerHTML = 'None';
    div.appendChild(lblOne);

    const lblTwo = document.createElement('label');
    lblTwo.setAttribute('id', `temperature${i}`);
    lblTwo.innerHTML = 'None';
    div.appendChild(lblTwo);

    div.appendChild(document.createElement('br'));

    const picture = document.createElement('img');
    picture.setAttribute('id', `celebrityImage${i}`);

    div.appendChild(picture);
    picture.setAttribute('border', '3');
    picture.setAttribute('width', '304');
    picture.setAttribute('height', '228');

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&appid=69ee10f3cf697856f4d8db0f5015bfdf`).then((response) => response.json()).then((wData) => { changeCityName(wData.weather[0].description, wData.main.temp, i); }).catch((err) => alert('Error: could not fetch the data'));
    return div;
  }
  return init;
};

const addImgDiv = function () {
  console.log('addImgDiv Called !');
  let i = 0;
  const head = document.createElement('h2');
  head.setAttribute('id', 'headerUpper');
  head.innerHTML = 'Get Weather for City';
  document.body.appendChild(head);

  const lbl = document.createElement('label');
  lbl.setAttribute('for', 'city');
  lbl.innerHTML = 'City: ';
  document.body.appendChild(lbl);

  const inpt = document.createElement('input');
  inpt.setAttribute('type', 'text');
  inpt.setAttribute('id', 'city');
  inpt.setAttribute('value', '');
  document.body.appendChild(inpt);

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', 'btn1');
  btn.innerHTML = 'Ok';
  document.body.appendChild(btn);

  document.body.appendChild(document.createElement('br'));

  const div = document.createElement('div');
  div.setAttribute('id', 'div_final');
  document.body.appendChild(div);

  btn.onclick = function () {
    div.appendChild(document.createElement('br'));
    div.appendChild(addRadio(document.getElementById('city').value, i)());
    i += 1;
  };
};

addImgDiv();

const validateInput = (text, notEmpty) => {
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  return true;
};

module.exports = {
  addImgDiv, addRadio, changeCityName, validateInput,
};
