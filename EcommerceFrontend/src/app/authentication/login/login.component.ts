import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: UserService,private router: Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.onSubmit()
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          this.toastr.success('Login successful!', 'Success');
          console.log('Login successful:here is response', response);
          localStorage.setItem('token', response.token); // Store the token
          if(this.authService.isAdmin()){
                  console.log("hello admin");

            this.router.navigate(['/pages/admin/home']);
          }else{
            this.router.navigate(['/product']); // Redirect to home page on success
              console.log("hello user");

          }


        },
        error => {
          console.error('Login failed', error);
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
