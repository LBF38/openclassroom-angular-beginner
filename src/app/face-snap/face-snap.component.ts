import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapClick: boolean = false;
  snapTitle:string="Oh Snap!";

  ngOnInit() {
    this.title = 'FaceSnap';
    this.description = 'A social media app for sharing photos';
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://www.w3schools.com/w3images/avatar2.png';
  }

  onAddSnap() {
    this.snapClick = true;
    this.snaps++;
    this.snapTitle='Oops, unSnap!';
  }

  onRemoveSnap() {
    this.snapClick = false;
    this.snaps--;
    this.snapTitle='Oh Snap!';
  }

  onSnap() {
    if (this.snapClick) {
      this.onRemoveSnap();
    } else {
      this.onAddSnap();
    }
  }
}
