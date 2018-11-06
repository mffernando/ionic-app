import { Injectable } from '@angular/core';

let configuration = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  //get localstorage
  getConfigData(): any {
    return localStorage.getItem(configuration);
  }

  //set localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if (showSlide) {
      config.showSlide = showSlide;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    localStorage.setItem(configuration, JSON.stringify(config));
  }

}
