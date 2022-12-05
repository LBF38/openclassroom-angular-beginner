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
    this.mySnap = {
      title: 'FaceSnap',
      description: 'A social media app for sharing photos',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://www.w3schools.com/w3images/avatar2.png',
      location: 'New York'
    };
    this.myOtherSnap = {
      title: 'FaceSnap',
      description: "This is a second FaceSnap",
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://picsum.photos/200/300',
      location: "La montagne"
    };
    this.myLastSnap = {
      title: 'FaceSnap',
      description: "Another FaceSnap",
      createdDate: new Date(),
      snaps: 5,
      imageUrl: 'https://picsum.photos/200/300?grayscale'
    };
  }

}
