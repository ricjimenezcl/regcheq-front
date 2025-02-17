import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

interface Catalog {  // Definir el tipo para evitar el error "never"
  name: string;
  description: string;
}

@Component({
  selector: 'app-catalogs',
  standalone: true,
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
  imports: [FormsModule, CommonModule]
})
export class CatalogsComponent implements OnInit {

  catalogs: Catalog[] = [];  // Asegurar que catalogs es un array de tipo Catalog
  catalog: Catalog = { name: '', description: '' }; // Tipar correctamente

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCatalogs();
  }

  getCatalogs() {
    this.apiService.getAllCatalogs().subscribe(
      (data: Catalog[]) => {  // Tipar la respuesta
        this.catalogs = data;
      },
      error => {
        console.error('Error al obtener catálogos:', error);
      }
    );
  }

  addCatalog() {
    const token = localStorage.getItem('token') ?? '';
    this.apiService.createCatalog(this.catalog, token).subscribe(
      response => {
        console.log('Catálogo agregado:', response);
        this.getCatalogs(); // Refrescar lista de catálogos
      },
      error => {
        console.error('Error al agregar catálogo:', error);
      }
    );
  }
}
