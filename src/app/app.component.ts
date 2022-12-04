import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap('FaceSnap',
      'A social media app for sharing photos',
      new Date(),
      0,
      'https://www.w3schools.com/w3images/avatar2.png');

    this.myOtherSnap = new FaceSnap('FaceSnap',
      "This is a second FaceSnap",
      new Date(),
      0,
      'https://picsum.photos/200/300');
    this.myLastSnap = new FaceSnap('FaceSnap',
      "Another FaceSnap",
      new Date(),
      5,
      'https://picsum.photos/200/300?grayscale');
  }

}
