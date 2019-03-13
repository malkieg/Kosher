import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kosher';
  cardTitle = 'Kosher';
  cardSubtitle = 'an app to show kosher things';
  cardContent = 'some stuff that we will fill in later';
  // Init method
  ngOnInit(): void {
    this.cardTitle = 'WORD!!!';
  }
}
