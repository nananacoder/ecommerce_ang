import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";

//  @Component decorator defines metadata for this component:
@Component({
  selector: 'app-home', // means that this component can be used in HTML as <app-home></app-home>.
  standalone: true,  // standalone component (not part of an Angular module).
  imports: [],  // no external Angular modules being imported.
  templateUrl: './home.component.html',  //points to the HTML template for this component
  styleUrl: './home.component.css' //points to the component’s styles in the home.component.css file.
})

// implement this onInit, meaning it will execute some logic when the component initializes.
export class HomeComponent implements OnInit{

  productList: any [] = [];  // will store the list of products retrieved from the API.

  // The constructor injects the ProductService into the component,
  // allowing it to call service methods like getAllProducts().
  constructor(private productService: ProductService) {
  }

  // OnInit is an interface that contains a single method: ngOnInit().
  // ngOnInit(): This method runs when the component is initialized (Angular's lifecycle hook).
  // ngOnInit is called after Angular has finished initializing the component's input properties.
  ngOnInit(): void{
    this.loadAllProducts(); // fetch the products.
  }

  // this func calls getAllProducts() to fetch product data
  // getAllProducts() returns an Observable, which is the data stream that may be emitted over time
  //.subscribe() is used to react to the data emitted by this Observable.
  // (result: any) => { this.productList = result.data; }) is executed when the Observable emits a value.

  // Once the data is received, it assigns the `result.data` to productList
  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result.data;
    })
  }
}
