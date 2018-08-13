import { FireProvider } from './../../providers/fire/fire';
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
  noticias: any[];
  bottom: boolean = false;
  numeroNoticias = 3;
  carregando = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser, public fire: FireProvider) {
    this.carregando = true;
    this.fire.getNoticias(this.numeroNoticias)
      .then(noticias => {
        this.carregando = false;
        this.noticias = noticias;
        console.log(noticias);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  abrirNoticia(noticia){
    let browser = this.iab.create(noticia.urlNoticia);
    browser.show();
  }

  scroll(){
    //console.log('fora do settimeout',this.content.scrollHeight, this.content.scrollTop, this.content.contentHeight, this.bottom);
    //console.log(this.content.getContentDimensions());
    setTimeout(() => {
      this.content.imgsUpdate();
      this.content.resize();
      //console.log('dentro',this.content.contentWidth, this.content.scrollHeight, this.content.scrollTop, this.content.contentHeight, this.bottom);
      if(this.content.getContentDimensions().scrollHeight <= this.content.scrollTop + this.content.contentHeight){
        if(!this.bottom){
          //alert('chegou ao final');
          this.carregando = true;
          this.fire.getNoticias(this.numeroNoticias + 3)
            .then(noticias => {
              this.carregando = false;
              this.noticias = noticias;
            })
          this.bottom = true
        }
      }
      else{
        //console.log('this.bottom = false;');
        this.bottom = false;
      }
    }, 100);
  }
}
