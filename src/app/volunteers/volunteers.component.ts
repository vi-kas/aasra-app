import { Component, OnInit } from '@angular/core';
import { IVolunteer } from './components/volunteer.modal';

@Component({
  templateUrl: './volunteers.component.html',
})
export class VolunteersComponent {
  public volunteers: IVolunteer[] = [
    {
      id: 1,
      name: 'CHAND KANWAR',
      imageUrl: '../../../../assets/images/chand.jpg',
      designation: 'President',
    },
    {
      id: 2,
      name: 'MANGLA SHARMA',
      imageUrl: '../../../../assets/images/mangla.jpg',
      designation: 'Secretory',
    },
    {
      id: 3,
      name: 'NEHA SHARMA',
      imageUrl: '../../../../assets/images/neha.jpg',
      designation: 'Advisor',
    },
    {
      id: 4,
      name: 'VIKASH SHARMA',
      imageUrl: '../../../../assets/images/unsplash_2.jpg',
      designation: 'Member',
    },
  ];
}
