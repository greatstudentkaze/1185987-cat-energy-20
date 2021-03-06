const viewportWidth = window.innerWidth;

ymaps.ready(init);

function init(){
  const myMap = new ymaps.Map('map', {
    center: viewportWidth >= 1440 ? [59.93881810113662,30.321207767181328] : [59.93863506417266,30.323117499999945],
    zoom: 17
  });
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('rulerControl');

  const myPlacemark = new ymaps.Placemark([59.93863506417266,30.323117499999945], {
    hintContent: 'ул. Большая Конюшенная, д. 19/8 Санкт-Петербург',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-pin.png',
    iconImageSize: viewportWidth > 767 ? [113, 106] : [57, 53],
    iconImageOffset: viewportWidth > 767 ? [-64, -100] : [-32, -55]
  });
  myMap.geoObjects.add(myPlacemark);
}
