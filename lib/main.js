document.addEventListener('DOMContentLoaded', () => {
  $w('.main').append('<h1></h1>');
  $w('h1').html('Studio Ghibli Search');
  $w('h1').attr('style', 'color: #570202');
  $w('.main').append('<section class="main-container"></section>');
  $w('.main').append('<button class="remove">Remove Facts</button>');
  $w('.remove').on('click', () => location.reload());
  $w('body').attr('style', 'background: url("https://awol.junkee.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-02-at-11.52.28-AM-1.png"); max-width: 99vw');

  const categories = ['films', 'people', 'vehicles'];
  for (let i = 0; i < categories.length; i++) {
    $w('.main-container')
      .append(`<button class="button ${categories[i]}">${categories[i]}</button>`);
  }

  $w(`.films`).on('click', () => {
    $w.ajax({
      type: 'GET',
      url: `https://ghibliapi.herokuapp.com/films`,
      success: (response) => successHandler(response),
    });
  });

  $w(`.people`).on('click', () => {
    $w.ajax({
      type: 'GET',
      url: `https://ghibliapi.herokuapp.com/people`,
      success: (response) => successHandler(response),
    });
  });

  $w(`.vehicles`).on('click', () => {
    $w.ajax({
      type: 'GET',
      url: `https://ghibliapi.herokuapp.com/vehicles`,
      success: (response) => successHandler(response),
    });
  });
});

function successHandler(response) {
  console.log('alive!');
  
  const json = JSON.parse(response);
  
  $w(`.main-container`).append(`<section class="info-dump"></section>`);
  $w('.info-dump').attr("style", "display: flex; flex-wrap: wrap; justify-content: space-evenly;");
  const infoDump = $w('.info-dump');
  json.forEach((item) => {
    for (const prop in item) {
      if (prop === "name" || prop === "title") {
        infoDump.append(`<div class="info ${prop}">${item[prop]}</div>`);
      }
    }
  });
  $w('.info').attr("style", "width: 250px; padding: 20px; font-size: 25px");
}