import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapClick: boolean = false;
  snapTitle!: string;

  ngOnInit() {
    this.snapTitle = 'Oh Snap!';
  }

  onAddSnap() {
    this.snapClick = true;
    this.faceSnap.snaps++;
    this.snapTitle = 'Oops, unSnap!';
  }

  onRemoveSnap() {
    this.snapClick = false;
    this.faceSnap.snaps--;
    this.snapTitle = 'Oh Snap!';
  }

  onSnap() {
    if (this.snapClick) {
      this.onRemoveSnap();
    } else {
      this.onAddSnap();
    }
  }
}
