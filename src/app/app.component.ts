import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './summary.pipe';
import { CopyrightDirective } from './copyright.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,SummaryPipe],
  templateUrl: './app_component/app.component.html',
  styleUrl: './app_component/app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name = 'Jane Doe';
  isNameJhon = this.name === 'John Doe';
  isJhonSister = this.name === 'Jane Doe';
  heroes = ['Superman','Spiderman', 'Batman'];
  heroes2 = [
    {id:1,name: 'Superman',team:'Marvel'},
    {id:2,name: 'Spiderman',team:'Marvel'},
    {id:3,name: 'Batman',team:'DC'}
  ];

  hero:Hero = {id:1,name: 'Superman',team: 'avenger'}
  today = new Date();
}

export interface Hero{
  id:number,name:string,team:string;
}