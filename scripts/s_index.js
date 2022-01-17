

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

/*
//////////////////////////////////////////////////////////////////////////
// значки сбоку от ссылок в футоре

// принимает на вход какой-то обьект html, возврщает true
// если курсор мыши наведен на него
function hover_state(obj) {
  return obj.matches(':hover');
}

// принимает обьект из html и лог.значене
// возволяет скрывать обьект путем отключения его рендеринга
// через своиство display
///////////// ПЕРЕДЕЛАНО
// изменяет прозрачность обьекта 0 - 100%
function icon_visible(obj, mode) {
  //let display_mode = (mode === true) ? ('block') : ('none');
  //obj.style.display = display_mode;
  let display_mode = (mode === true) ? ('1') : ('0');
  obj.style.opacity = display_mode;
}

var obj_menu = document.getElementsByClassName('obj_menu_a');     // массив ссылок меню, на которые можно наводится
var obj_menu_icon = document.getElementsByClassName('menu_icon'); // массив дивов с иконкой, которые нужно скрывать или показывать

// вызывается при каждом наведении или убирании курсора с любово
// элемента ссылки среднего меню футора
function menu_icon_upd() {
  for (let i=0; i < obj_menu.length; i++) {   // обходим все ссылки меню
    if (hover_state(obj_menu[i])) {           // если состояние обьекта hover
      icon_visible(obj_menu_icon[i], true);   // включаем видимость для его иконки
    } else {                                  // если не hover
      icon_visible(obj_menu_icon[i], false);  // выключаем видимость для его иконки
    }
  }
}



/*
var old_hover = -1;

function footer_menu() {
  var obj_menu = document.getElementsByClassName('obj_menu_a');
  var obj_menu_icon = document.getElementsByClassName('menu_icon');

    for (var i=0; i<obj_menu.length; i++) { // обход нужных ссылок
      if (obj_menu[i].matches(':hover')) {  // если на нее наведена мышка
         if (old_hover != i) {               // 
            obj_menu_icon[i].style.display = 'block';
         }
         old_hover = i;                    // установить номер элемента
         break;                              // выход из цыкла
      } else {
         if (i == (obj_menu.length - 1)) {
           old_hover = -1;
           for (var a=0; a < obj_menu.length; a++) {
             obj_menu_icon[a].style.display = 'none';
           }
         }
      }
    }
   // window.setInterval(footer_menu, 50);     // вызывает этуже функцию с интервалом 500мс
}
*/
