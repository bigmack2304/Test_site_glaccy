/*
  функционал кнопок в заголовке
*/

//window.onscroll = () => muse_wheel();   // срабатывает при скролле окна
//window.onclick = () => muse_clik();     // срабатывает при клике мышкой (левой кнопкой)
window.onscroll = function() { muse_wheel() };
window.onclick = function() { muse_clik() };

var v_btn_katalog = document.getElementsByClassName('btn_katalog');
var wnd_katalog = document.getElementsByClassName('modal_katalog'); 
var katalog_open = false;     // отображает состояние модального окна каталога

var v_btn_find = document.getElementsByClassName('btn_find');
var wnd_find = document.getElementsByClassName('modal_find'); 
var find_open = false;
 
var v_btn_vhod = document.getElementsByClassName('btn_vhod');
var wnd_vhod = document.getElementsByClassName('modal_vhod'); 
var vhod_open = false;

var v_btn_korzina = document.getElementsByClassName('btn_korzina');
var wnd_korzina = document.getElementsByClassName('modal_korzina'); 
var korzina_open = false;


/////////////////////////////////////////
// ждительность анимаций

var anim_move_r_dur = "0.3s";
var anim_move_l_dur = "0.3s";

/////////////////////////////////////////
// все что связано с кнопкой и окном корзины

function upd_btn_korzina() {
  if (main_korzina.length == 0) {                                                 // если массив корзины пуст
    document.getElementsByClassName('btn_korzina_txt')[0].innerText = "Пусто";    // название кнопки
    document.getElementsByClassName('korz_items_sum')[0].innerText = "0";         // общая сумма покупок
	document.getElementsByClassName('modal_korzina_container')[0].innerHTML = ""; // отчищаем содержимое списка
  } else {                                                                        // если в массиве корзины что-то есть
	  
	document.getElementsByClassName('modal_korzina_container')[0].innerHTML = ""; // отчищаем весь список покупок в окне   
	for (var i = 0; i < main_korzina.length; i++ ) {                              // цыклом проходим по всем элементам массива корзины, и заносим эти элементы в контеинер html в виде отдельных div
		var text_for_container = '<div class="korzina_item"> <button class="corz_close_item" onclick="btn_korz_item_del(' + i + ')" type="button"> </button> <img class="corz_image" src="' + main_korzina[i].icon + '" alt=""> <p class="corz_item_desc">' + main_korzina[i].desc + '</p> <p> <span class="corz_item_widh">' + main_korzina[i].weight + '</span> кг х <span class="corz_item_cost_kg">' + main_korzina[i].cost + ' руб.</span> </p> <p> <span class="corz_item_sum">' + (main_korzina[i].weight * main_korzina[i].cost) + '</span> руб. </p> </div>';
		var in_container = document.getElementsByClassName('modal_korzina_container');  // формируем текст, получаем обьект окна, в который будем зиписывать дивы
		in_container[0].innerHTML += text_for_container;                          // добавляем в конец обьекта сгенерированный текст
	}
	  
    document.getElementsByClassName('btn_korzina_txt')[0].innerText = main_korzina.length;  // на самой кнопке, отображаем количество элементов в массиве корзины

    var summa = 0;                                                            // итоговая сумма покупок
    for (var i = 0; i < main_korzina.length; i++ ) {                          // цыклом проходим по всему массиву корзины и складываем цену всех элементов
      summa = summa + main_korzina[i].cost;                                   // щитаем
    }
    document.getElementsByClassName('korz_items_sum')[0].innerText = summa;   // записываем в html получившийся результат
  }
}


//////////////////////////////////////////////////////////////////////////
// управление видимостью модальных окон

function open_modal_wind (class_name) {
  class_name[0].style.display = 'block';
}

function close_modal_wind (class_name) {
  class_name[0].style.display = 'none';
  class_name[0].style.animationName = "none";
}

//////////////////////
// функция для проверки находится ли элемент в состоянии hover
// возвращает true если состяние hover, иначе false

function addon_is_hover(param) {
  return (document.querySelectorAll(param + ':hover').length) ? (true) : (false);
}

///////////////////////////////////////////////////////////////////////
// вызывается при скролле страницы
function muse_wheel() {
  if (katalog_open) {               // если открыто окно каталога, его нужно закрыть
    close_modal_wind(wnd_katalog);
    katalog_open = false;
  }
  if (find_open) {               
    close_modal_wind(wnd_find);
    find_open = false;
  }
  if (vhod_open) {               
    close_modal_wind(wnd_vhod);
    vhod_open = false;
  }
  if (korzina_open) {               
    close_modal_wind(wnd_korzina);
    korzina_open = false;
  }
}

///////////////////////////////////////////////////////////////////////////
// клик левой кнопкой мыши
function muse_clik () {
  // если курсор не наведен ни на кнопку и ни на ее окно
  // видитили, matches не поддерживается в IE поэтому придется
  // ставить костыли
 
  // if (!wnd_katalog[0].matches(':hover') && !v_btn_katalog[0].matches(':hover') ) {  // если на нее наведена мышка
 if (!addon_is_hover(".modal_katalog") && !addon_is_hover(".btn_katalog")) {
    close_modal_wind(wnd_katalog);  // закрыть это окно
    katalog_open = false;
  }
  //if (!wnd_find[0].matches(':hover') && !v_btn_find[0].matches(':hover') ) {  // если на нее наведена мышка
  if (!addon_is_hover(".modal_find") && !addon_is_hover(".btn_find")) {
    close_modal_wind(wnd_find);
    find_open = false;
  }
  //if (!wnd_vhod[0].matches(':hover') && !v_btn_vhod[0].matches(':hover') ) {  // если на нее наведена мышка
  if (!addon_is_hover(".modal_vhod") && !addon_is_hover(".btn_vhod")) {
    close_modal_wind(wnd_vhod);
    vhod_open = false;
  }
  //if (!wnd_korzina[0].matches(':hover') && !v_btn_korzina[0].matches(':hover') ) {  // если на нее наведена мышка
  if (!addon_is_hover(".modal_korzina") && !addon_is_hover(".btn_korzina")) {
    close_modal_wind(wnd_korzina);
    korzina_open = false;
  }
}

///////////////////////////////////////////////////////////////////////
// было нажатие кнопки
function btn_katalog() {
  if (!katalog_open) {                // если окно закрыто, его надо открыть
    open_modal_wind(wnd_katalog);     // унифирсальная функция для открытия окна
    wnd_katalog[0].style.animationDuration = anim_move_l_dur; // добавляем время анимации в css
    wnd_katalog[0].style.animationName = "move_l";  // добавляем анимацию в css
    katalog_open = true;              // флаг открытия этого окна
  } else {                            // если окно открыто, его надо закрыть
    close_modal_wind(wnd_katalog);    // унифирсальная функция для закрытия окон
    katalog_open = false;             // флаг открытия этого окна
  }
}

function btn_find() {
  if (!find_open) {                 
    open_modal_wind(wnd_find);
    wnd_find[0].style.animationDuration = anim_move_r_dur;
    wnd_find[0].style.animationName = "move_r";
    find_open = true;
  } else {                            
    close_modal_wind(wnd_find);
    find_open = false;
  }
}

function btn_vhod() {
  if (!vhod_open) {                
    open_modal_wind(wnd_vhod);
    wnd_vhod[0].style.animationDuration = anim_move_r_dur;
    wnd_vhod[0].style.animationName = "move_r";
    vhod_open = true;
  } else {                            
    close_modal_wind(wnd_vhod);
    vhod_open = false;
  }
}

function btn_korzina() {
  if (!korzina_open) {                  
    open_modal_wind(wnd_korzina);
    wnd_korzina[0].style.animationDuration = anim_move_r_dur;
    wnd_korzina[0].style.animationName = "move_r";
    korzina_open = true;
  } else {                              
    close_modal_wind(wnd_korzina);
    korzina_open = false;
  }
}

////////////////////////////////////////
// нажатие на главную кнопку (дайте оба)
function btn_day_oba() {
  var get_radio = document.getElementsByName('fon_type');
  if (get_radio[0].checked) {
    //если выбран 1й фон
  } else if (get_radio[1].checked) {
    //если выбран 2й фон
  } else if (get_radio[2].checked) {
    //если выбран 3й фон
  }
}

// нажатие на кнопку удаления предмета из корзины
function btn_korz_item_del(index) {
  m_korzina_del(index);
}