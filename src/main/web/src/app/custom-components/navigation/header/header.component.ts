import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  username: string;
  
  constructor(public authService: AuthenticateService) { }

  ngOnInit() {
    const token = this.authService.getToken();

    if(token) {
      this.authService.checkToken()
        .then(async()=>{
          this.authService.setUserLoggedIn(true);
          await this.authService.getUserPrincipal(); 
        });
    }

    this.authService.userNameChange.subscribe(
      (username: string) => {
        this.username = username;}
    );
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }



}
