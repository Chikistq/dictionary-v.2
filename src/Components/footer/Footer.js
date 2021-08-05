import {Maincomponent} from '@core/Maincomponent';
import '@fortawesome/fontawesome-free/js/fontawesome.min'


export class Footer extends Maincomponent {
  static className = ''
  static elType = 'footer'

  constructor($root) {
    super($root, {
      name: 'Footer',
      listeners: ['click']
    });
  }

  toHTML() {
    return ` <p>FedorovKN
                <a 
                rel="stylesheet" 
                href="mailto:fedorovkn@uidevelop.ru">fedorovkn@uidevelop.ru
                </a>
            </p>
            <div class="footer__icons">
                <a href="/"><i class="fab fa-github"></i></a>
                <a href="/"><i class="fab fa-instagram"></i></a>
                <a href="/"><i class="fab fa-linkedin-in"></i></a>
            </div>
`
  }

  onClick(event) {
  }
}
