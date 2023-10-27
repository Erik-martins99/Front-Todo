import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  
  constructor(private router: Router, private service: TodoService) { }


  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }

  ngOnInit(): void {
    
  }

  cancel(): void{
    this.router.navigate(['']);
  }

  create(): void{
    this.dateFormater()
    this.service.create(this.todo).subscribe((resposta) => {
      this.service.message("To-do created sucefull");
      this.router.navigate(['']);
    }, error => {
      this.service.message("failed to create To-do");
      this.router.navigate(['']);
    })
  }

  dateFormater(): void{
    let date = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
