import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {


  title = ''; 
  description = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AddItemPage');
    if (this.navParams.get('item')){
      if (typeof this.navParams.get('item').title !== 'undefined'){
        this.title = this.navParams.get('item').title;
      }
      if (typeof this.navParams.get('item').description !== 'undefined'){
        this.description = this.navParams.get('item').description;
      }
    }
    
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };
    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }
}