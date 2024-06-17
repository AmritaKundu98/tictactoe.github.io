import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent,CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  squares:any = [];
  xIsNext = true;
  winner = '';
  counter = 0;
  isDraw='';
  freshpage = true;
  constructor(){}

  ngOnInit():void{


  }
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isDraw='';
    this.counter = 0;
    this.freshpage= false;
  }

  get player(){
    return this.xIsNext?'x':'o'
  }

  makeMove(idx:number)
{
  if(!this.squares[idx]){
    this.squares.splice(idx,1,this.player)
    this.xIsNext = !this.xIsNext;
    this.counter++;
  }
  this.winner = this.calculateWinner()
  if(!this.winner && this.counter==9){
    this.isDraw='yes'
  }
}

calculateWinner(){
  const lines=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for(let i =0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(this.squares[a] && this.squares[a] ===this.squares[b] && this.squares[a] === this.squares[c]){
      return this.squares[a];
    }
  }
  return null;
}

}
