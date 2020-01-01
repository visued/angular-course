import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: false }) campoInputValor: ElementRef;

  incrementa() {
    this.campoInputValor.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor});
  }

  decrementa() {
    this.campoInputValor.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
