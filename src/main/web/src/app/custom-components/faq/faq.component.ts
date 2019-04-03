import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getProtectedWelcomeMessage()
    .then((response) => {
      console.log(response);
    }); 
  }

}
