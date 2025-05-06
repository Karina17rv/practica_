import { Component, Input, ViewChild } from '@angular/core';
import { cocteles } from '../interfaces/cocteles';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  imports: [NgFor, NgIf, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cotel: cocteles | undefined;

  @ViewChild(ModalComponent) modal!: ModalComponent;

  openModal(coctel: { [key: string]: null | string }): void {
    this.modal.open(coctel);
  }
}
