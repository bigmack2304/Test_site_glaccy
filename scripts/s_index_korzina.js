
// класс мороженого

class o_item {

  cost = 0;       // цена за еденицу веса
  weight = 0;     // вес кг
  o_name = "";    // наименование
  desc = "";      // описание
  icon = "";      // путь до картинки
  acess = true;   // доступен-ли для продажи

  constructor (val1, val2, val3, val4, val5) {
    this.cost = val1;       
    this.weight = val2;      
    this.o_name = val3;     
    this.desc = val4;       
    this.icon = val5;       
  }

  set_acess(mode) {
    if (mode === true || mode === false) {
      this.acess = mode;
      //console.log('acess OK');
    } else {
      console.log('syntax: set_acess(boolean mode)');
    }
  }

}

//массив хранящий в себе все виды мороженого
var items = [
      prod0 = new o_item(310, 1, "пломбир 1", "Сливочное с апельсиновым джемом и цитрусовой стружкой",  "img/item_1.png"),
      prod1 = new o_item(380, 1, "пломбир 2", "Сливочно-кофейное с кусочками шоколада",                 "img/item_2.png"),
      prod2 = new o_item(355, 1, "пломбир 3", "Сливочно-клубничное с присыпкой из белого шоколада",     "img/item_3.png"),
      prod3 = new o_item(415, 1, "пломбир 4", "Сливочное крем-брюле с карамельной подливкой",           "img/item_4.png")
];
 
// это корзина (массив обьектов класса o_item)
var main_korzina = []; 

// добавляет в main_korzina в конец, обьект под индексом items_num из массива items
function m_korzina_add(items_num) {
  if (items[items_num].acess) {
    main_korzina.push(items[items_num]);
    //console.log("ОК");
  } else {
    console.log("этот предмет запрещен для продажи, установите флаг acess = true для этого обьекта");
  }
  upd_btn_korzina();
}

// удаляет элемент из массива корзины, под индексом index
function m_korzina_del(index) {
  if (index < main_korzina.length && main_korzina.length != 0) {
    main_korzina.splice(index, 1);
    //console.log("ОК");
  } else {
    console.log("нельзя удалить элемент из массива c индексом " + index + ", всего элементов " + main_korzina.length);
  }
  upd_btn_korzina();
}