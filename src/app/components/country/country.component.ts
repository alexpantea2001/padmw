import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Country } from '../../models/country';


@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
// Other code
export class CountryComponent {
  @Input() country?: Country;
  @Output() onclick = new EventEmitter<Country>();

  show() {
    this.onclick.emit(this.country);
  }
}