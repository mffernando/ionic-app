import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
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

  public films = Array<any>();

  public username: string = "My Name";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  /* public sum(num1:number, num2:number): void {
    alert(num1 + num2);
  } */

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(data => {
      const response = (data as any);
      const returns = JSON.parse(response._body);
      this.films = returns.results;
    }, error => {
      console.log(error);
    })

    //this.sum(1, 2);
    //console.log('ionViewDidLoad FeedPage');
  }

}
