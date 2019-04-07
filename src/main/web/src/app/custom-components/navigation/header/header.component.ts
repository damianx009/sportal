import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

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
        .then(()=>{
          this.authService.setUserLoggedIn(true);
          this.authService.getUserPrincipal(); 
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
