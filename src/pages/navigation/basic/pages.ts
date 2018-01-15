import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,AlertController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../../providers/restapi-service/restapi-service';

@Component({
  templateUrl: 'navigation-details.html',
})
export class XNavigationDetailsPage 
{
  items = [];
  item:any;

  constructor(params: NavParams) 
  {
    this.items = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'JavaScript',
        'icon': 'javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Sass',
        'icon': 'sass',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'NodeJS',
        'icon': 'nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Python',
        'icon': 'python',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Markdown',
        'icon': 'markdown',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
    this.item = this.items[0];
  }
}

@Component({
  templateUrl: 'navigation.html'
})
export class XNavigationPage 
{
  
  feedsArray:any;
  filter:any;
  limit:any;
  loading:any;

  constructor(public nav: NavController,public restapiService: RestapiServiceProvider,public alerCtrl: AlertController,private loadingCtrl: LoadingController) 
  {
    this.filter = 'sports';
    this.limit = 10;
    this.loaddatafromserver(this.filter,this.limit);
    
  }
  // ionViewWillEnter() 
  // {
  //     this.loaddatafromserver(this.filter,this.limit)
  // }

  loaddatafromserver(category,limit) 
  {
      this.loading = this.loadingCtrl.create({content: 'Fetching groups...'});
      this.loading.present();
      this.restapiService.getFeeds(category, limit)
      .subscribe(response => 
      {
          console.log(response.data.children);
          this.feedsArray = response.data.children;
          this.loading.dismiss();
      },
      eror=>
      {
        let alert = this.alerCtrl.create({title: 'New Friend!',message: 'Your friend, Obi wan Kenobi, just approved your friend request!',buttons: ['Ok']});
        alert.present();
        this.loading.dismiss();
      });
  }


  openNavDetailsPage() 
  {
    this.nav.push(XNavigationDetailsPage,{});
  }

}
