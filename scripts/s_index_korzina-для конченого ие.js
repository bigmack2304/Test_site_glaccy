
// класс мороженого
//массив хранящий в себе все виды мороженого
var items = [ 
	  prod1 = {	acess: 	true, 
				cost:	310, 
				weight:	1, 
				o_name:	"пломбир 1", 
				desc:	"Сливочное с апельсиновым джемом и цитрусовой стружкой", 
				icon:	"img/item_1.png"
			},
	  
	  prod2 = { acess: 	true,
				cost:	380,
				weight:	1, 
				o_name:	"пломбир 2", 
				desc:	"Сливочно-кофейное с кусочками шоколада", 
				icon:	"img/item_2.png"
			},
			
	  prod3 = { acess: 	true, 
				cost:	355,
				weight:	1, 
				o_name:	"пломбир 3", 
				desc:	"Сливочно-клубничное с присыпкой из белого шоколада", 
				icon:	"img/item_3.png"
			},
			
	  prod4 = { 
				acess: 	true, 
				cost:	415,
				weight:	1, 
				o_name:	"пломбир 4", 
				desc:	"Сливочное крем-брюле с карамельной подливкой", 
				icon:	"img/item_4.png"
			}
];
 
// это корзина (массив обьектов класса o_item)
var main_korzina = []; 

// добавляет в корзину в конец, обьект под индексом items_num из массива items
// и добавляет соответствующий див в html
function m_korzina_add(items_num) {
  if (items[items_num].acess) {
    main_korzina.push(items[items_num]);
    var text_for_container = '<div class="korzina_item"> <button class="corz_close_item" onclick="btn_korz_item_del(' + (main_korzina.length - 1) + ')" type="button"></button> <img class="corz_image" src="' + items[items_num].icon + '" alt=""> <p class="corz_item_desc">' + items[items_num].desc + '</p> <p> <span class="corz_item_widh">' + items[items_num].weight + '</span> кг х <span class="corz_item_cost_kg">' + items[items_num].cost + '</span> руб. </p> <p> <span class="corz_item_sum">' + (items[items_num].weight * items[items_num].cost) + '</span> руб. </p> </div>';
    var in_container = document.getElementsByClassName('modal_korzina_container');
    in_container[0].innerHTML += text_for_container;
    console.log("ОК");
  } else {
    console.log("этот предмет запрещен для продажи, установите флаг acess = true для этого обьекта");
  }
  upd_btn_korzina();
}

// удаляет элемент из массива корзины, под индексом index
function m_korzina_del(index) {
  if (index < main_korzina.length && main_korzina.length != 0) {
    main_korzina.splice(index, 1);
    console.log("ОК");
    var div_from_del = document.getElementsByClassName('korzina_item');
    div_from_del[index].outerHTML = "";
  } else {
    console.log("нельзя удалить элемент из массива c индексом " + index + ", всего элементов " + main_korzina.length);
  }
  upd_btn_korzina();
}













/*    
    items[0].set_acess(true);

console.log(items[0].cost + " " + items[0].desc + " " + items[0].acess)
console.log(items[2].cost + " " + items[2].desc)

/*
class korzina {
  constructor () {
    arry[] = {};
  }
}*/