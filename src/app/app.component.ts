import { Component } from '@angular/core';
import { Todolist } from './interface/todolist';
import { recupera, recuperaAxios } from './service/todolist.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'esercizio1';
    elencoTodo!: Todolist[];

    constructor() {
        /*     recupera().then(risposta =>{
        console.log(risposta);
        this.elencoTodo = risposta;
        this.completa();
        console.log(this.elencoTodo);
    }) */

        recuperaAxios().then((risposta) => {
            console.log(risposta);
            this.elencoTodo = risposta;
            this.completa();
            console.log(this.elencoTodo);
        });
    }
    completa() {
        this.elencoTodo = this.elencoTodo.map((elenco) => {
            return { ...elenco, completato: true }; //"fammi lo spread (quindi allargalo tutto) di elenco, riscrivi tutto ("...") ma prendi "completato" e rendilo true"
        });
    }
}
