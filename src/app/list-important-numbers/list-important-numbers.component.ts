import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-important-numbers',
  templateUrl: './list-important-numbers.component.html',
  styleUrls: ['./list-important-numbers.component.scss'],
})
export class ListImportantNumbersComponent {
  contactos = [
    {
      nombre: 'Bomberos',
      telefono: '3462664079',
      color: 'bg-red-500',
      icon: '../../assets/icon/bomberos.png',
    },
    {
      nombre: 'Comisaria',
      telefono: '3462567918',
      color: 'bg-blue-500',
      icon: '../../assets/icon/coche-de-policia.png',
    },
    {
      nombre: 'Guardia Urbana',
      telefono: '3462616565',
      color: 'bg-blue-300',
      icon: '../../assets/icon/police.png',
    },
    {
      nombre: 'Hospital',
      telefono: '3462635765',
      color: 'bg-white',
      icon: '../../assets/icon/hospital.png',
    },
    {
      nombre: 'Comuna',
      telefono: '3462330033',
      color: 'bg-orange-200',
      icon: '../../assets/icon/municipalidad.png',
    },
    {
      nombre: 'Área de la mujer',
      telefono: '3462505454',
      color: 'bg-fuchsia-300',
      icon: '../../assets/icon/mujer.png',
    },
    {
      nombre: 'Juzgado',
      telefono: '3462639778',
      color: '#000000',
      icon: '../../assets/icon/juzgado.png',
    },
  ];

  constructor() {}
}
