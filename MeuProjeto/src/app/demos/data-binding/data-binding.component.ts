import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome1: string = "";
  public nome2: string = "";
  public nome3: string = "";
  public nome4: string = "";

  adicionarClique(){
    this.contadorClique++;
  }
  resetarClique(){
    this.contadorClique = 0;
  }

  keyUp(event: any){
      this.nome1 = event.target.value;
  }


}
