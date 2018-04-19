import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  abrirNoticia(){
    let browser = this.iab.create('https://www.correiobraziliense.com.br/app/noticia/politica/2018/04/18/interna_politica,674454/na-cadeia-lula-le-livro-sobre-erros-historicos-da-direita-e-esquerda.shtml');
    browser.show();
  }

  scroll(){
    if(this.content.scrollHeight <= this.content.scrollTop + this.content.contentHeight)
      alert('chegou ao final');
  }
}
