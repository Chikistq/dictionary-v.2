import './style/main.scss'
import './index.html'
import '@fortawesome/fontawesome-free/js/regular.min'
import '@fortawesome/fontawesome-free/js/brands.min'
import {Dic} from '@/Components/Dic/dic';
import {Header} from '@/Components/header/Header';
import {Table} from '@/Components/table/Table';
import {Footer} from '@/Components/footer/Footer';
import {Popup} from '@/Components/popup/Popup';


const dictionary = new Dic('#app', {
  components: [Header, Table, Popup, Footer]
})

dictionary.render()

