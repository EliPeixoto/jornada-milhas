import { Component } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent {
  depoimentos = [
    {
      depoimento: `
      Recomendo fortemente a agência de viagens Jornada.
      Eles oferecem um serviço personalizado e de alta qualidade
      que excedeu minhas expectativas em minha última viagem.
      `,
      autoria: 'Mariana Faustino'
    },
    {
      depoimento: `
      A viagem com a Jornada foi incrível!
      O atendimento foi excepcional e a viagem foi tudo o que eu esperava.
      `,
      autoria: 'João Silva'
    },
    {
      depoimento: `
      A Jornada é a melhor agência de viagens que já usei.
      A equipe é profissional e a viagem foi memorável.
      `,
      autoria: 'Ana Maria'
    }
 ];
}
