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

  ngOnInit() {
    this.title = 'FaceSnap';
    this.description = 'A social media app for sharing photos';
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://www.w3schools.com/w3images/avatar2.png';
  }

  onAddSnap() {
    this.snaps++;
  }
}
