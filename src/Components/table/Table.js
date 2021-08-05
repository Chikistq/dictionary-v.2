import {Maincomponent} from '@core/Maincomponent';

export class Table extends Maincomponent {
  static className = 'content'
  static elType = 'section'

  toHTML() {
    return ` <div class="container">
<!--                input + previous attempts-->
                <div class="row">
                    <div 
                     class="col-lg-6 col-md-7 col-12 order-md-1 order-2 mb-20">
                        <div class="content__input">
                            <div class="word">
                                advanced <span>[ədˈvɑːnst]</span>
                            </div>
                            <form class="input-form">
                                <p>Enter translation:</p>
                                <input type="text" title="Enter translate">
                                <button class="button-done">Done</button>
                                <button class="button-reset">Reset</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-5 col-12 order-md-2 order-1">
                        <div class="content__previous table-view">
                            <div class="row-table">
                                <div class="cell cell-title">Date</div>
                                <div class="cell cell-title">Curently</div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">20/06/2021 20:08</div>
                                <div class="cell-data">
                                    <span>14/31 - </span>38%
                                    <i class="far fa-eye"></i>
                                </div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">20/06/2021 20:08</div>
                                <div class="cell-data">
                                    <span>14/31 - </span>38%
                                    <i class="far fa-eye"></i>
                                </div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">20/06/2021 20:08</div>
                                <div class="cell-data">
                                    <span>14/31 - </span>38%
                                    <i class="far fa-eye"></i>
                                </div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">20/06/2021 20:08</div>
                                <div class="cell-data">
                                    <span>14/31 - </span>38%
                                    <i class="far fa-eye"></i>
                                </div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">20/06/2021 20:08</div>
                                <div class="cell-data">
                                    <span>14/31 - </span>38%
                                    <i class="far fa-eye"></i>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
<!--                content-->
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="content__table table-view ">
                            <div class="row-table">
                                <div class="cell cell-title">Words</div>
                                <div class="cell cell-title">Translate</div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">
                                    <i class="far fa-times-circle"></i>
                                    <p>advanced <i>[ədˈvɑːnst]</i></p>
                                </div>
                                <div class="cell-data ">
                                    ..... Прил. продвинутый (расширенный) ..... 
                                    Прил. продвинутый (расширенный)..... 
                                    Прил. продвинутый (расширенный)..... 
                                    Прил. продвинутый (расширенный)..... 
                                    Прил. продвинутый (расширенный)..... 
                                    Прил. продвинутый (расширенный)
                                </div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">
                                    <i class="far fa-check-circle"></i>
                                    <p>advanced <i>[ədˈvɑːnst]</i></p>
                                </div>
                                <div class="cell-data">
                                    ..... Прил. продвинутый (расширенный) ..... 
                                </div>
                            </div>
                            <div class="row-table">
                                <div class="cell-data">
                                    <i class="far fa-check-circle"></i>
                                    <p>aed <i>[nst]</i></p>
                                </div>
                                <div class="cell-data">
                                    ..... Прил. продвинутый (расширенный) ..... 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`
  }
}
