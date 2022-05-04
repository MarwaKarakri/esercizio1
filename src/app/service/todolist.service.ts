/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor() { }
}
 */
import { Todolist } from "../interface/todolist";
import axios from "axios";

export async function recupera(): Promise<Todolist[]> {
return await (await fetch('assets/db.json')).json()
}

export async function recuperaAxios(): Promise<Todolist[]> {
const risposta = (await axios.get<Todolist[]>('assets/db.json')).data;
return risposta;
}
