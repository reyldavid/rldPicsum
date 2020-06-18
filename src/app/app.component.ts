import { Component } from '@angular/core';
import { Picture } from './pictures';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  picture: Picture = new Picture();
  isValidFormSubmitted: boolean = false;
  baseUrl: string = "https://picsum.photos";
  pictureUrl: string;
  ayaName: string;

  constructor() {
    this.picture = new Picture();
  }

  onFormSubmitted(form: NgForm) {

    this.picture = new Picture();
    this.isValidFormSubmitted = false;

    console.log("aya ", this.picture);

    if (form.invalid) {
      return;
    }

    this.isValidFormSubmitted = true;

    this.picture.id = form.controls["id"].value;
    this.picture.width = form.controls["width"].value;
    this.picture.height = form.controls["height"].value;
    this.picture.blur = form.controls["blur"].value;
    this.picture.blurSetting = form.controls["blurSetting"].value;
    this.picture.grayscale = form.controls["grayscale"].value;

    this.buildUrl();
  }

  buildUrl() {
    this.pictureUrl = this.baseUrl;

    if (this.picture.id) {
      this.pictureUrl += "/id/" + this.picture.id;
    }

    if (this.picture.width) {
      if (this.picture.height) {
        this.pictureUrl += "/" + this.picture.width + "/" + this.picture.height;
      }
      else {
        this.pictureUrl += "/" + this.picture.width;
      }
    }
    else {
      if (this.picture.height) {
        this.pictureUrl += "/" + this.picture.height;
      }
      else {
        this.pictureUrl += "/400";
      }
    }

    if (this.picture.grayscale) {
      this.pictureUrl += "?grayscale";
    }

    if (this.picture.blur) {
      if (this.picture.grayscale) {
        this.pictureUrl += "&blur";
      }
      else {
        this.pictureUrl += "?blur";
      }

      if (this.picture.blurSetting) {
        this.pictureUrl += "=" + this.picture.blurSetting;
      }

    }
    
    // window.location.href = this.pictureUrl;
    window.open(this.pictureUrl, "_blank");

  }

  onAya (value: string) {
    this.ayaName = value;
  }

}
