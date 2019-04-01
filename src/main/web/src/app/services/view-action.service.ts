import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewActionService {

  constructor() { }

  blinkElement(id: string) {
    let div = document.getElementById(id);
    
    div.classList.remove('blink_me');
    setTimeout(()=>{
      div.classList.add('blink_me');
    }, 100);
  }

}
