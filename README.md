## О superModal

Красивая и функциональная замена стандартным модальным окнам на es6. Не нужно подключать внешние стили, писать разметку, просто подключи superModal.js,
инициализируй и пользуйся!

Попробовать можно здесь: http://supermodal.exp.ae/
Или здесь: http://codepen.io/expdev/full/eJqXZL/

## Краткий обзор
Вызовите аналог alert в браузере:

```js
superModal.alert("Уведомление", "Заявка успешно отправлена!");
```

Покажите пользователю банер:
```js
superModal.image("http://путьдокартинки", function(){
	// И запустите функцию, когда пользователь нажмет на картинку
});
```
Попросите согласие у пользователя:
```js
superModal.confirm("Вы действительно хотите сделать это?", "Мы заметили, что вы хотите сделать это.", "Хочу", "Не хочу");
```
Или задайте кучу настроек объектом:
```js
modal.confirm({
    content: {
      title: "Преступление и наказание: II",
      // если текста будет слишком много, автоматически появится скроллинг в самом окне
      text: "Раскольников не привык к толпе и, как уже сказано, бежал всякого общества, особенно в последнее время. Но теперь его вдруг что-то потянуло к людям. Что-то совершалось в нем как бы новое, и вместе с тем ощутилась какая-то жажда людей. Он так устал от целого месяца этой сосредоточенной тоски своей и мрачного возбуждения, что хотя одну минуту хотелось ему вздохнуть в другом мире, хоть бы в каком бы то ни было, и, несмотря на всю грязь обстановки, он с удовольствием оставался теперь в распивочной."
    },
    buttons: {
      decline: {
        content: "Круто!",
        fn: function(){
          // Запускаем функцию на нажатие кнопки согласия
        }
      },
      accept: {
        content: "Не круто",
        fn: function(){
          // Запускаем функцию на нажатие кнопки отказа
          location.href = "http://exp.ae/";
          // Возвращаем true, если не хотим, чтобы окно закрылось
          return true;
        }
      }
    }
});
```
Вставьте кастомную разметку в модальное окно:
```js
superModal.paste(document.querySelector(".block").innerHTML, "Моя кастомная разметка");
```

А так же возможность задавать функции на каждую из кнопок, устанавливать параметры объектом и полностью изменять оформление вашего окна.

## Инициализация
```js
let modal = new superModal();
```

## Режим alert

Вы можете инициализировать стандартные значения
```js
let modal = new superModal({
	alert: {
	    title: "Ваш заголовок.",
	    text: "Содержимое",
	    button: "Ok!",
		fn: function() {
			// Задайте функцию, которая должна выполниться при нажатии на любой элемент управления

			// return true; - верните true из функции, если хотите, чтобы окно не закрылось при нажатии на кнопки
			// Это полезно, если вам нужно сделать кнопку ссылкой location.href = "http://exp.ae/";
		}
	}
});
```
Чтобы запустить ваше окно со стандартными параметрами нужно лишь ввести:
```js
modal.alert();
```

Или введите новые значения:
```js
modal.alert("Новый заголовок", "Новое содержание", "Новый текст на кнопке", "Новая функция");
```


## Режим confirm

Стандартные значения
```js
let modal = new superModal({
	confirm: {
	    content: {
	      title: "Заголовок",
	      text: "Содержимое"
	    },
	    buttons: {
	      decline: {
	        content: "Согласен",
	        fn: null // Функции аналогичны в superModal.alert(). Так же верните true, если не хотите, чтобы окно закрылось
	      },
	      accept: {
	        content: "Не согласен",
	        fn: null
	      }
	    }
	}
});
```
Запуск:
```js
modal.confirm();
```

Новые значения через запятую:
```js
modal.confirm("Заголовок", "Содержание", "Текст на кнопке accept", "Текст на кнопке decline", "Функция на accept", "Функция на decline");
```

Поставьте false, чтобы применились стандартные значения (справедливо для всех режимов):
```js
modal.confirm(false, "Содержание", false, "Текст на кнопке decline"); // Или не указывайте какие-то значения вообще.
```

Так же, можно инициализировать все объектом (каждое значение, которое вы не укажете будет взято из заданных на моменте инициализации):
```js
modal.confirm({
    content: {
      title: "Effective Firearms Regulation Is Constitutional",
      // если текста будет слишком много, автоматически появится скроллинг в самом окне
      text: "The sudden death of Justice Antonin Scalia of the Supreme Court brought renewed attention to one of his more heralded — and criticized — decisions: District of Columbia v. Heller, in which the court, by a 5-4 vote, held that the Second Amendment conferred an individual right “to keep and bear arms.”"
    },
    buttons: {
      decline: {
        content: "Cancel",
        fn: function(){
          console.log("Cancel is pushed!");
        }
      },
      accept: {
        content: "Confirm",
        fn: function(){
          location.href = "http://exp.ae/";
          return true;
        }
      }
    }
})
```

## Режим image

Стандартные значения
```js
let modal = new superModal({
	image: {
	    src: "Ссылка на картинку",
	    fn: function() {
	    	// функция запустится при нажатии на картинку
	    	return true; // аналогично, если не хотите, чтобы окно закрылось верните true;
	    }
	}
});
```
Запуск:
```js
modal.image();
```

Новые значения через запятую:
```js
modal.image("http://путьдокартинки", function(){
	// функция, которая запустится при нажатии на картинку.
});
```
## Режим paste
Этот режим позволяет вам вставить кастомную верстку в тело модального окна.

Стандартные значения:
```js
let modal = new superModal({
	paste: {
	    content: {
	      title: "Заголовок",
	      html: "<div> Ваш html код здесь </div>" 
	      // Вы можете отдельно сверстать какое-нибудь соглашение и 
	      //  вставить его сюда несколькими способами, например: document.body.innerHTML
	      // или, если используете jQuery: $(".block").html();
	    },
	    // С кнопками аналогично
	    buttons: {
	      decline: {
	        content: "Cancel",
	        fn: null
	      },
	      accept: {
	        content: "Confirm",
	        fn: null
	      }
	    }
	}
});
```
Запуск:
```js
modal.paste();
```

Новые значения через запятую:
```js
modal.paste("html код","Заголовок", "Содержание", "Текст на кнопке accept", "Текст на кнопке decline", "Функция на accept", "Функция на decline");
```

Поставьте false, чтобы применились стандартные значения (справедливо для всех режимов):
```js
modal.paste(false, "Заголовок", false, "Текст на кнопке accept"); // Или не указывайте какие-то значения вообще.
```

Так же, можно инициализировать все объектом, аналогично superModal.confirm:
```js
modal.paste({
    content: {
      title: "Effective Firearms Regulation Is Constitutional",
      html: "<div> Ваш html код </div>"
    },
    buttons: {
      decline: {
        content: "Cancel",
        fn: function(){
          console.log("Cancel is pushed!");
        }
      },
      accept: {
        content: "Confirm",
        fn: function(){
          location.href = "http://exp.ae/";
          return true;
        }
      }
    }
})
```

## Настройте стили
```js
let modal = new superModal({

  settings: {
    duration: 200 // Длительность анимации в ms
    custom: false, // Ставьте true, если вы хотите написать свои стили
    modalClass: "superModal" // Задайте кастомный класс 
  },
  
  // Стили
  style: {
    "overlay-color": "#2B2E38", // Цвет фона
    "content-position": "left", // Позиция контента (left, center, right)
    "accept-color": "#2ecc71",  // Цвет кнопки Accept
    "decline-color": "#e74c3c", // Цвет кнопки Decine
    "close-color": "#121212"    // Цвет крестика
  }
});
```
