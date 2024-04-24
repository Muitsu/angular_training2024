import { Component ,OnInit} from '@angular/core';
import { EmpService } from '../services/emp.service';
import { Emp } from '../models/emp';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormEmpComponent } from '../form-emp/form-emp.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
@Component({
  selector: 'app-list-emp',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,MatIconModule,FormEmpComponent],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})

export class ListEmpComponent implements OnInit  {
  columnToDisplay = ['Id','Name','Salary','Age','Action'];
  employees:Emp[]=[];
  constructor(private empService:EmpService,public dialog: MatDialog){}
  ngOnInit(): void {
    this.empService.getAllEmp().subscribe({
      next: (response) => {
        this.employees=response.data;
      },
      error: (error) => {
        console.error('Too many request',error);
      }
    })
    
}

onClickRow(){
  this.dialog.open(DialogExampleComponent, {
    width: '250px',
  });
}
}
