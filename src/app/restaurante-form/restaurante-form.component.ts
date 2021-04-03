import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-restaurante-form',
  templateUrl: './restaurante-form.component.html',
  styleUrls: ['./restaurante-form.component.css']
})

export class RestauranteFormComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder) {      
  }  
 
  formulario!: FormGroup;
  valueAberto: boolean = false;
  valueAtivo: boolean = false;  

  clicou(){
}
  salvar(){ 
    this.forceValidateAllFormFields(this.formulario);
    if (this.formulario.valid) {
      console.log(this.formulario.value)
    } else {
      console.log("ENTROU NO ELSE")    
    }
  }
  
  protected forceValidateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl && control.enabled) {
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            this.forceValidateAllFormFields(control);
        }
    });
}


  get nomeRestaurante(): FormControl { return this.formulario.get('nomeRestaurante') as FormControl; }
  get taxaFrete(): FormControl { return this.formulario.get('taxaFrete') as FormControl; }
  get dataCadastro(): FormControl { return this.formulario.get('dataCadastro') as FormControl; }
  get dataAtualizacao(): FormControl { return this.formulario.get('dataAtualização') as FormControl; }
  get valorAtivo(): FormControl { return this.formulario.get('valorAtivo') as FormControl; }
  get valorAberto(): FormControl { return this.formulario.get('valorAberto') as FormControl; }
  get tipoCozinha(): FormControl { return this.formulario.get('tipoCozinha') as FormControl; } 

  cozinhas = [
    {name: 'Chinesa', code: 'CH'},
    {name: 'Arabe', code: 'AR'},
    {name: 'Italiana', code: 'EU'},
    {name: 'Brasileira', code: 'BR'},
    {name: 'Americana', code: 'EUA'}
  ];  
  
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeRestaurante: [null, Validators.required],
      taxaFrete: [null, Validators.required],
      dataCadastro: [null, Validators.required],
      dataAtualização: [null, Validators.required],
      valorAtivo: [null, Validators.required],
      valorAberto: [null, Validators.required],
      tipoCozinha: [null, Validators.required]
    });
  }
}
