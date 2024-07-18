import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  productsService = inject(ProductsService);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productsService.post(product)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
