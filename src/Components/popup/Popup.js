import {Maincomponent} from '@core/Maincomponent';

export class Popup extends Maincomponent {
  static className = 'popup'
  static elType = 'div'

  toHTML() {
    return `
        <div class="popup_modal">
                <img 
                src="${require('../../static/img/logo.png')}" 
                alt='logo Dictionary, 3000 words'
                >
                <p>Приветствую всех читателей. <br>
                    Данное Single page application создано исключительно с целью
                    практики своих знаний английского словаря. Словарь состоит
                    из 3000 самых “ходовых” слов. К сожалению список переводов
                    не обладает достаточным количеством синонимов,поэтому не
                    растраивайтесь если алгоритм будет выдавать "неверный
                    результат" на введенное Вами слово. При желании подробный 
                    перевод вы можете найти
                    например здесь - <a href="https://translate.google.com/" target="_blank">Google Переводчик</a> 
                    или здесь - <a href="https://translate.yandex.ru/" target="_blank">Яндекс.Переводчик</a>, 
                    либо воспользоваться своим любимым переводчиком.
                    <br>Приложение имеет
                    <a href="https://github.com/Chikistq/dictionary-v.2" target="_blank">открытый исходный код</a>. </p>
                </p>

            </div>
    `
  }
}
