import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [NgIf, NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() coctelSeleccionado: { [key: string]: null | string } = {
    strDrink: '',
    strDrinkThumb: '',
    strCategory: '',
    strAlcoholic: '',
    idDrink: '',
    strGlass: '',
    strInstructions: ''
  };

  bootstrapModal: any = null; 
  @ViewChild('modal') public modal!: ElementRef;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)){
      this.initializeModal();
    }
  }

  initializeModal(): void {
    import('bootstrap').then((bootstrap) => {
      this.bootstrapModal = new bootstrap.Modal(this.modal.nativeElement);
    });
  }

  open(coctel: { [key: string]: null | string }): void {
    this.coctelSeleccionado = coctel;
    if (isPlatformBrowser(this.platformId)) {
      if (this.bootstrapModal) {
        this.bootstrapModal.show();
      } else {
        setTimeout(() => {
          this.bootstrapModal.show();
        }, 0);
      }
    }
  }
}
