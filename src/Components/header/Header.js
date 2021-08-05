import {Maincomponent} from '@core/Maincomponent';

export class Header extends Maincomponent {
  static className = ''
  static elType = 'header'

  toHTML() {
    return `
       <div class="container">
               <div class="row">
                       <div class="col-lg-9 col-md-7 col-8">
                           <div class="header__logo">
                               <img 
                               src="${require('../../static/img/logo.png')}" 
                               alt='logo Dictionary, 3000 words'
                               >
                           </div>

                       </div>
                       <div class="col-lg-3 col-md-5 col-4 header__nav">
                           <ul>
                               <li>Words</li>
                               <li>About</li>
                           </ul>
                       </div>
               </div>
          </div>
    `
  }
}
