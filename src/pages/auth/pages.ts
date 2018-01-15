import { Component } from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import { XTabBadgesPage } from '../../pages/tabs/badges/pages';

@Component({
	selector: 'page-login',
  templateUrl: 'template.html'
})
export class SecuredPage 
{

  constructor(public nav: NavController) 
  {

  }

  LoginAction() 
  {
    this.nav.setRoot(XTabBadgesPage);
  }
}
