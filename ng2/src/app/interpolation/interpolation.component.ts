import {Component} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h1>{{titre}}</h1>
    <h3>Bonjour {{user.firstName + ' ' + user.lastName}}</h3>
    <p>Votre numéro de téléphone : {{user.contact?.phone}}</p>
  `
})
export class InterpolationComponent {
  titre: string = 'Interpolation';
  user: any = {
    firstName: 'Jocelyn',
    lastName: 'N\'TAKPE'
  }
}
