import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
// export class HeroesComponent implements OnInit {

//   //Lista de herois (mock)
//   // heroes = HEROES;

//   //Atribui as propriedades da classe heroi para selectedHero (hero selecionado)
//   selectedHero : Hero;

//   heroes: Hero[];
//   constructor(private heroService: HeroService) { }

//   ngOnInit() {
//     this.getHeroes();
//   }

//   //Exemplo de valores setados e enviados para a tela.
//   // hero: Hero = {
//   //   id : 1,
//   //   name : 'Windstorm'
//   // };

//   //Método que recebe um heroi ( click na tela )
//   onSelect(hero : Hero): void{
//     this.selectedHero = hero;
//   }

//   // getHeroes(): void {
//   //   this.heroes = this.heroService.getHeroes();
//   // }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }}




