window.onscroll = function() { muse_wheel();
                               upd_modal_map() };

window.onclick = function() { muse_clik() };

start();
function start() {
    upd_fon();          // обновление фона
    upd_btn_korzina();  // обновление наименования корзины
}


/////////////////////////////////////////////////////////////////////////

function upd_fon() {
    let rad = document.getElementsByName('fon_type');
    let slogon = document.getElementsByClassName('img_fon_li')
    let obj_fon = document.getElementsByClassName('head_fon')

    for(let i=0; i < slogon.length; i++) {
      slogon[i].style.display = 'none';
    }

    for (let i=0;i<rad.length; i++) {
      if (rad[i].checked) {
      //  document.body.style.backgroundImage = 'url(img/' + 'fon_type_' + rad[i].value + '.png)';
      obj_fon[0].style.backgroundImage = 'url(img/fon_type_' + rad[i].value + '.png)';
        slogon[i].style.display = 'block';
        switch (rad[i].value) {
          case "1":
            document.body.style.backgroundColor = 'rgb(133, 158, 144)';
            break;
          case "2":
            document.body.style.backgroundColor = 'rgb(137, 150, 166)';
            break;
          case "3":
            document.body.style.backgroundColor = 'rgb(157, 139, 132)';
              break;
          default:
            break;
        }
      }
    }
}

//////////////////////////////////////////////////////////////////////////
// появление модального окна в зависимости от положения карты

let div_map_pos = document.getElementsByClassName('map');                   // карта
let div_mapadress_modal = document.getElementsByClassName('map_addrerss');  // модальное окно на карте
let DOM_body = document.querySelector('body');                              // обьект body из html

function upd_modal_map() {
 if (is_obj_on_vieport(div_map_pos[0], 0.40)) {
  div_mapadress_modal[0].style.opacity = "100%";
 } else {
  div_mapadress_modal[0].style.opacity = "0%";
 }
}

/*
  Функция позволяет определить находится ли обьект в области видимости экрана
  На вход принимается сам обьект и гистерезис 0.00 - 1.00
  Возвращает true\false в зависимости от того виден обьект или нет.
  Гистерезис это % от размера обьекта которой будет выден на экране, после
  которого обьект будет считатся видимым.
  v2
  тк интерфейс масштабируется зумом из css, при значениях zoom отличных от 1
  pos_obj_botom и pos_obj_top смещаются и становятся неверными. Добавил коррекцию
  для zoom в расчеты
*/
function is_obj_on_vieport(DOM_object, hysteresys = 0) {
  let pos_scrol = window.scrollY;                                 // позиция скролла
  let h_vieport = document.documentElement.clientHeight;          // высота видимой части окна
  let pos_obj_botom = DOM_object.getBoundingClientRect().bottom;  // расстояние от нижней точки обьекта до верха документа
  let pos_obj_top = DOM_object.getBoundingClientRect().top;       // расстояние от верхней точки обьекта до верха документа
  let local_zoom = window.getComputedStyle(DOM_body).zoom;        // читаем zoom из css настроек для body

  let h_coef = (pos_obj_botom - pos_obj_top) * local_zoom * hysteresys; // расчитываем гистерезис, с учетом zoom в css

  //console.clear();
  //console.log(pos_obj_botom - pos_obj_top);   // так можно узнать высоту элемента
  //console.log(h_vieport);                     // так можно узнать высоту окна
  //console.log(pos_scrol);                     // так можно узнать позицию скролла
  
  //console.log(pos_scrol + h_vieport);         // позиция нижней границы вьюпорта относительно DOM
  //console.log(h_vieport - pos_obj_top);       // получаем расстояние от верхней границы обьекта до низа вьюпорта
  //console.log(pos_obj_botom);                 // выводим расстояние от нижней границы обьекта до верха вьюпорта
  //console.log(h_vieport - pos_obj_top * local_zoom); // расстояние от верхней границы обьекта до низа вьюпорта с учетом масштаба страницы
  //console.log(pos_obj_botom * local_zoom);           // расстояние от нижней границы обьекта до верха вьюпорта с учетом масштаба страницы

  if ((h_vieport - pos_obj_top * local_zoom)  > (0 + h_coef) && pos_obj_botom * local_zoom > (0 + h_coef)) {
    return true;
  } else {
    return false;
  }
}