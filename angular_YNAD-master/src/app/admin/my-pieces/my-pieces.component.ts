import { Component, OnInit } from '@angular/core';
import { PiecesService } from '../../pieces.service';

@Component({
  selector: 'app-my-pieces',
  templateUrl: './my-pieces.component.html',
  styleUrls: ['./my-pieces.component.scss']
})
export class MyPiecesComponent implements OnInit {
  piece = {}

  constructor(private piecesservice: PiecesService) { }

  ngOnInit() {
    this.piecesservice.displayAllPieces().subscribe(data => {
      this.piece  = data[0];
     // console.log(data[0]);
  });

}

}


