import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productForm!: FormGroup;
  // categories = [
  //   { _id: '665471f061af1ee31ccc7a0b', name: 'Category 1' },
  //   { _id: '665471f861af1ee31ccc7a0e', name: 'Category 2' }
  // ];
  categories:any = [];

  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder, private productService : ProductService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      category: [null,Validators.required],
      stock: [0, Validators.required],
      images: ['', Validators.required],
      vendor: ['', Validators.required]
    });

    this.getCategories()
    console.log("categories",this.categories);
    
  }

  // onCategoryChange(e: any, categoryId: string) {
  //   const categoryArray: FormArray = this.productForm.get('category') as FormArray;
  //   if (e.target.checked) {
  //     categoryArray.push(new FormControl(categoryId));
  //   } else {
  //     const index = categoryArray.controls.findIndex(x => x.value === categoryId);
  //     if (index !== -1) {
  //       categoryArray.removeAt(index);
  //     }
  //   }
  // }

  // isChecked(categoryId: string): boolean {
  //   const categoryArray: FormArray = this.productForm.get('category') as FormArray;
  //   return categoryArray.controls.some(control => control.value === categoryId);
  // }

  onFileSelected(event: any) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.selectedFiles.push(event.target.files[i]);
      }
    }
  }
  getCategories(){

    this.productService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log("categories Data:",data);
      },
      (error) => {
        console.error('Error fetching quiz:', error);
      }
    );
    // console.log("categories",this.categories);
  }

  onSubmit() {
    console.log(this.productForm);
    
    const formData: FormData = new FormData();
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('description', this.productForm.get('description')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('category', JSON.stringify(this.productForm.get('category')?.value));
    formData.append('stock', this.productForm.get('stock')?.value);
    formData.append('vendor', this.productForm.get('vendor')?.value);

    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('images', this.selectedFiles[i]);
    }

    console.log(this.productForm.value);
    
    this.productService.createProduct(formData).subscribe(response => {
      console.log('Product created successfully!', response);
    }, error => {
      console.error('Error creating product:', error);
    });
  }
}
