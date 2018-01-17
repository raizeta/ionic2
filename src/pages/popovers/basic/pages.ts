import { Component, ViewChild, ElementRef } from '@angular/core';

import { PopoverController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'popovertemplate.html'
})
export class XDialogPopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      console.log(this.contentEle);

      this.textEle = this.navParams.data.textEle;
      console.log(this.textEle);

      this.background = this.getColorName(this.contentEle.style.backgroundColor);

      if (this.textEle.style.fontFamily) 
      {
        this.fontFamily = this.textEle.style.fontFamily.replace(/"/g, "");
      }
      else
      {
        this.fontFamily = "Arial";
      }
    }
  }  

  getColorName(background) {
    let colorName = 'white';

    if (!background) return 'white';

    for (var key in this.colors) {
      if (this.colors[key].bg == background) {
        colorName = key;
      }
    }

    return colorName;
  }
  changeBackground(color) 
  {
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    this.textEle.style.color = this.colors[color].fg;
  }

  changeFontSize(direction) 
  {
    this.textEle.style.fontSize = direction;
  }

  changeFontFamily() 
  {
    if (this.fontFamily) 
    {
      this.textEle.style.fontFamily = this.fontFamily;
    }
  }
}


@Component({
  templateUrl: 'template.html'
})
export class XPopoverPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(private popoverCtrl: PopoverController) {

  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(XDialogPopoverPage, {contentEle: this.content.nativeElement,textEle: this.text.nativeElement});

    popover.present({
      ev: ev
    });
  }
}
