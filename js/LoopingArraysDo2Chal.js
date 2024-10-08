'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
// Перенесем для показа вн объекта ресторан

// Треьим расширением ясвляется то, что мы можем вычислить(компилировать) имена свойств вместо написания их вручную и буквально. То есть вычислитяь

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // То есть вместо thu . Мы можем написать [weekdays[3]]. Также здесь можно использовать деструктуризацию . Также в значениях можно указать например 12-12
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 12 - 12, // Open 24 hours
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Второе расширение объектных литеролов при написании методов 
  // Теперь мы можем не писать : function. И Js поймет что это метод и подсветит так же зеленым цветом
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // До ES6 мы должны были писать так, если мы обращались к объекту извне. И тогда у нас снова появлялось данное свойство
  // openingHours:openingHours,

  // Но раздражение было в том что, имя свойства и имя переменной(объекта) совпадали, которое мы получили из нового объекта(openingHours)
  // Но после ES6 мы можем написать просто объект
  // ES6 enchanced object literals 
  openingHours,


  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(`Order received ${this.mainMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  // У пасты будут 3 обязательных ингридиента
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Напишем метод заказа пиццы с помощью оператора rest 
  //Для нашей пиццы должен быть 1 обязательный ингридиент, а остальные опциональные 
  orderPizza(mainIngrideinet, ...otherIngridients) {
    console.log(mainIngrideinet);
    console.log(otherIngridients);
  },


  // Попробовать саммому 
  orderPizzaStr(mainIngrideinet, ...otherIngridients) {
    console.log(`Main ingridient ${mainIngrideinet}; Others ingtiditnrs ${otherIngridients}`);
  },

};



// Lopping Arrays:The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//  For of -  Потому что для item которыз ИЗ(of) menu
for (const item of menu) console.log(item); // Как и для ifElse если 1 строчка то не надо стаивть код блока {}

// То ессть мы по  сути делаем тоже самое что и в цикле for, но не беспакоячсь о счетчике и условии .
// Так же в циклке for of мы можем использовать continue and break keywords 

// Но у for of есть проблема с индексами И поэтому нужно применять к тому что будем перебирать дописывать метод entries()
// Это старый способо до десткруктуризации используя индексы массива



for (const item of menu.entries()) {
  //console.log(item);// Теперь будет выводиться с индексом массива// Поэтому выводв console.log(menu.entries()) подписан как новый массив на каждый вывод item в консоль 
  console.log(`${item[0] +1}: ${item[1]}`); // 1: Focaccia и т.д.
  //То есть взяли индекс массива прибавили единицу написали : и справа написали само наименования блюда как в ресторане
}


//console.log(menu.entries()); // Array Iterator {} мы увидим позднее в курсе узначем что это такое. Но если мы хотим посмотреть на него то мы должны существенно расширить с помощью spread оператора, как сделано ниже


//console.log([...menu.entries()]); //  То есть создаем новый массив на основе menu.entries() . Мы получим массив в котором в каждой позиции содержится новый массив, который содержит элемент. Поэтому номер индекса (сущности) элемента этого элемента в исходном массиве 

// Метод современный используя деструктуризацию 
for (const [i, el] of menu.entries()) { // То есть индекс с 0 индекса массива передаства в i, а 1 индекс (само название блюда) в переменную el 
  console.log(`${i +1}: ${el}`); //2: Bruschetta
}




// Enhanced object literals - Расширенные литералы объекта
// Наш объект restaurant - является object literal(объектны литералом), так как мы используем {} синтаксис. То есть все объекты которые есть внутри были написаны используя object literal syntax

//Но в ES6 представлены 3 способа, которые делают это легче - написание object literal(объектный литерал), как const restaurans = {...}; Написано в объекте ресторан и открытые часы




// Optional chainig (?.) - Опциональная цепочка '?.'
// Допустим мы хотим проверить часы открытия в понедельник. Но так как свойства mon у объект нет, то выведится undefined
console.log(restaurant.openingHours.mon);

// Но мы можем не знать, что ресторан не работае по понедельникам. Этот пример будет как в реальном вэб приложени. Например данные нам будут приходить из какого-лиюо web -api
//И это сервис может сожержать множество ресторанов и не все из них будут открываться в понедельник

// И допустим мы хотим узнать в какой час открывается ресторан

//console.log(restaurant.openingHours.mon.open); // Теперь вывелится ошибка. Так как mon уже undefined и мы не можем узнать его значения Cannot read properties of undefined (reading 'open')

// И чтобы избежать ошибки сверху. В первую очередь мы должны проверить существует ли данное свойство
// По старинке нам придется проверять через if else statement (условие)

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // 11 выведится час открытя ресторана в пятницу

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // Так как  не сущветвует, следовательно вывода в консоль не будет

//  Но что если у ресторана, так же не будет прописанного ссвойства часы открытия. И теперь нам нужна проверка для обоих условий
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // Теперь если оба условия будуте выполнены то будет вывод в консоль 
// И это проблемно и в ES2020 было представлено решение этой проблемы. Особенность называемая optional chaning - опциональная цепочка

// При использовании optional chaning если определенное свойство не будет найдено, то тогда немедлино будет возвращен undefined. И это позволит избегать ошибок, такие, как представленны ранее

// ВОт как это работает
// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); // Здесь мы получим undefined так как свойство mon у openinghours не имеется. 

//Optional chainig работает по принципу nullish assigment operator(оператора нулевого присваивания) - То есть если будут 0 или '' то это будет правдивое значение

// Также мы можем проверять несколько свойств существуют ли они или нет
console.log(restaurant.openingHours?.mon?.open); // То есть если свойство openingHours не будет существовать, то mon js даже не будет пробовать прочитать и поэтому не будет ошибки


// Real world example 

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Вывдем, когда в какой день ресторан открыт, и в который закрыт
for (const day of days) {
  // [ day] используем day как типо индекс, то есть сначала будет перечеслятсья. То есть имя переменной записываем в квадратны скобки 
  // Чтобы не было значеия undeifned используем дефолтное значение. Напишем его с помощью Операторf нулевого слияния  . Если значение левого операнда будет ложное, то он вернет правое значение. Но  0 у данного оператора является правдивым значением
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// nullish coalesing operator и optional chainig представлены в ES2020 и очень хорошо подходят дргу другу. То  есть по концепту, (проверяем существует ли свойство и если его то пишем дефолтное значение. Так как слева операнда будет расположен undefined)

// Methods - Также опциональная цепочка. хорошо работает и с методами 
// То есть в начале перед вызовом метода мы можем проверить - существует ли он 
// Мы всегда должны применять вместе опциональную цепочку и оператор нулевого слияния(optional chainig and nullish coalesing operaor)
console.log(restaurant.order?.(0,1) ?? 'Method does not exist'); // Так как метод существуют выведутся то что прописано в методе 

//Если мы вызовем метод которого не существует, то 
console.log(restaurant.orderRissoto?.(0,1) ?? 'Method does not exist'); // Будет выведено сообщение Method does not exist. То есть вначале опциональная цепочка проверяет существует ли метод, и если не существует то немедленно возвращает undefined. Потом из-за оператора нулевого слеяния, так как операнд слева undefined то будет принято значение по дефолту прописанное справа

// Если не использовать в данном примере опциональную цепочку, то тогда будет ошибка. is not a function 


// Arrays - Также опциональная цепочка работает и с массивами 
// То есть мы можем проверить пустой ли массив 
const users = [{name:'Jonas', email: 'hello@jonas.io'}];
// const users = []; В данном случае было бы прописанно ниже, что массив пустой

console.log(users[0]?.name ?? 'User array epmty'); // Если в объекте в свойстве имени ничего не будет прописано, то мы вывидем сообщение 'User array epmty'

// Так бы выглядело по старинке, без использования опционнальной цепочки
if(users.length >0)console.log(users[0].name);
else console.log('user array empty');






// Loopinbg Objects : Object keys, Values, And Entries - entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value] , в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов).


// Property NAMES
const properties=Object.keys(openingHours);
console.log(properties); // Результатом будет массив, сожержащий имена свойств ['thu', 'fri', 'sat']

for(const day of Object.keys(openingHours)){
console.log(day); // Здесь вывядятся ключи (thu, fri, sat) (имена свойств объекта openingHours который тоже является свойством объекта ресторан)
};

//Напишем сколько дней ресторан открыт
console.log(`We are open on ${properties.length} days`);

//Поместим в переменную строко, сколько дней открыт ресторан, и затем с помощью цикла добавим эти дни

let openStr = `We are open on ${properties.length} days: `;
for(const day of properties){
openStr += `${day}, `; // В каждой итерации цикла будет добисываться день с запятой
};
console.log(openStr); // Выведится We are open on 3 days: thu, fri, sat, 


// Property VALUES
const values = Object.values(openingHours) ;
console.log(values); // Выведится массив с 3 мя объектами содержащий часы открытияи и часы закрытия 

// Entire Object - будет проходить цикл по всему объекту 
const entries = Object.entries(openingHours); // То есть в основном это метод в случае объекта преобразует его в массив. в элементе которого будет массив модержащий ключ(fri) и его значение(объект  открытия и закрытия)
console.log(entries); // Теперь у нас выведится массив с 3 элементами, которые являются масиввами из двух элементов - ключей и значений 

// Теперь используем данный метод для прохода по смому объекту 
// Для определенния нескольких переменных испольхуем деструктуризацию. 
// То есть у нас имеется key и имеется value - которое является объектом. Который мы тоже можем деструктуризировать(распаковать) с помощью {} круглых скобок как показано ниже
for (const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`);
  //Выведится следующие весь объект содержащий [key, {open, close}]
  // On thu we open at 12 and close at 22
  //On fri we open at 11 and close at 23
  //On sat we open at 0 and close at 24
}

// Если бы в примере выше value не являлось объектом, то тогда мы могли бы использовать запись проще [key, value]




// Sets - Одна из data structure добавленных в ES6

// Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
// Это ознначает, что  set не может иметь дубликаты. И это свойство делает его полезным в определленных ситуациях

// Создадим новый set с помощью new Set и в круглые скобки() помещаем iterable . Самым распространенным iterable является массив
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']); // Поместим массив, с несколькими значениями 

// Мы поместили в массив 6 строк, но также может быть любой тип данных(число или булеан например). Set может работьть с любым типом данных, в этом нет никакой проблемы
console.log(ordersSet); // Выведит Set(3) с размером 3(указан в скобках) и значения содержащиеся внутри  {'Pasta', 'Pizza', 'Risotto'}

// У Set мы видим сходство с массивом. Так как у них нет пар ключ,значение. А имеется просто набор значений сгрупированных вместе в данном случае в Set 

// Так же как массивы Set является iterables
// Но Set остается разным в отличие от массива. Во первых потому, что его элементы уникальны. Во вторых, потому что порядок элементов set не имеет значения.

// Надо помнить, что сткроки тоже являются iterables и мы можем делать следующее. Мы можем передать строку 
console.log(new Set(`Jonas`)); // Set(5) {'J', 'o', 'n', 'a', 's'}. Здесь получим Set с 5 элементами. Которые являются компонентами данной, строки которая является iterables   

// Так же Set может быть пустым
console.log(new Set());// Set(0) {size: 0}


// Раююота с Set
// Мы можем получить размер Set(сета) с помощью свойства size (ordersSet.size)
console.log(ordersSet.size);

//Это может быть полезно например, для шефа ресторана, узнать сколько блюд здесь готовится. То есть узначем, что готовится 3 разных блюда

// Тажкде у сет есть метод has() - который проверяет наличие элемента у сета. этот метод похож на метод includes у массивов
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Garlic Bread')); // false

// Также мы можем добавлять новые элементы в set.add() (у массивов push)
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // Даже жобавить одинаковые элементы. Сет записвает только уникальные значения элементов. Добавление одинакового элемента будет проигнорировано 

// Также м можем удалить элемент set.delete(). У массива нет такого простого метода дл удаления, как у сета
ordersSet.delete('Risotto');
console.log(ordersSet);

// У Set нету индексов и пооэтому нет способа получить значения из set
// Если задуматься нам не надо получить данные из сет, потому что если все значения уникальны, то не важен их порядок. Поэтому нет смысла извлекать данные из set. Все что нам надо знать, является ли определленное значение в set(наборе) или нет. Поэтому есть метод has

// Если наша цель хранить значение в определенном порядке и извлекать их. То тогда лучшим рещением будет использовать массивы array. Set(набор) для этого не используется, потому что для этого мы используем массив

// Метод удаляющий все элементы из набора(set)
//ordersSet.clear();
//console.log(ordersSet);  // Выведится пустой набор Set(0) {size: 0}

// Set (набор) также являеся iterables(перечисляемым). И поэтому мы можим проходить циклом по нему

for(const order of ordersSet) console.log(order); // По отдельности вывелутся элементы на каждой итерации цикла

// Циклирование возможно как и любое перечисление(iterables) 

// Обычной практикой применения набора(set) является удаление дубликатов из массива

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Создадим set(набор) new Set(staff) и в скобках нужно вставить iterables(перечесляемое) в нашем случае это массив
const staffUnique = [...new Set(staff)]; // Для конверстации из Set(набора) обратно в массив мы можем воспользоваться оператором spread (... справа). Потому что spread operator работает со всеми iterales(перечесляемыми). То есть все элементы будут положены в новыйс обранный массив

console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']
 
// Если нам не нужен будет сам массив. А нужно количество уникальных значений, то тогда мы можем воспользоваться методом size так
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  ); // Введится 3, так как 3 уникахльных значения
 
// Также будет работать если нам нужно узнать количество уникальных букв в строке
console.log(new Set('jonasschedtmann').size); // 11 уникальных букв

// Подитожим. Set(набор) не предназначен заменить массив. Когда нужно хранить данные в порядке(определенном),  и возможны дубликаты, то тогда всегда используем массивы, также когда нужно манипулировать с данными. Потому что у массива есть много хороших методов

// Set's(наборы) не так важны, как массивы, но если надо работать с уникальными значениями, то тогда  лучше использовать Set's (Наборы)
