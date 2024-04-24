import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
@Component({
  selector: 'app-app-guess-game',
  standalone: true,
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './app-guess-game.component.html',
  styleUrl: './app-guess-game.component.css'
})
export class AppGuessGameComponent {

guessNumber="";
answer= Math.ceil(Math.random() *10);
isWnning=false;
trials=0;
message="";
  onGuess(){
   this.isWnning = `${this.answer}` === this.guessNumber;
   this.trials++;
   if(this.isWnning){
    this.message="You win !";
    alert(this.message);
   }else{
    this.message="Try again later...";
    alert(this.message);
   }
  }

  onChange(guessNumber:string){
    this.guessNumber=guessNumber;
  }
}
