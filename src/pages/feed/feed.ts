import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  //Json
  public feed = {
    title: "My title",
    date: "November 1, 2018",
    description: "My Ionic App",
    likes: 100,
    comments: 5,
    comment_time: "11h ago"
  }

  public username: string = "My Name";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* public sum(num1:number, num2:number): void {
    alert(num1 + num2);
  } */

  ionViewDidLoad() {
    //this.sum(1, 2);
    //console.log('ionViewDidLoad FeedPage');
  }

}
