import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {
  @Input()
  srcPath: string;

  @Input()
  description: string;

  @Input()
  name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
