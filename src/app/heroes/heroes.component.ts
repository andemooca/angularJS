import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Lista de herois (mock)
  heroes = HEROES;

  //Atribui as propriedades da classe heroi para selectedHero (hero selecionado)
  selectedHero : Hero;

  //Exemplo de valores setados e enviados para a tela.
  // hero: Hero = {
  //   id : 1,
  //   name : 'Windstorm'
  // };

  //
  
  constructor() { }

  ngOnInit() {
  }

  //Método que recebe um heroi ( click na tela )
  onSelect(hero : Hero): void{
    //console.log(hero.id+": "+ hero.name);
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
