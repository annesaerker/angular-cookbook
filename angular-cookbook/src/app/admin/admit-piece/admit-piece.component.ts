import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-admit-piece',
  templateUrl: './admit-piece.component.html',
  styleUrls: ['./admit-piece.component.scss']
})
export class AdmitPieceComponent implements OnInit {
  url: any;
  private admitPieceForm: FormGroup;
  profileImageUrl = "http://placehold.it/180"

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.profileImageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  pieceSubmit(admitPieceForm) {
    console.log("is Valid?: " + admitPieceForm.valid);
    this.router.navigate(['./admin/my-pieces']);
   }

  ngOnInit() {
    this.admitPieceForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      media: ['', Validators.required],
      material: ['', Validators.required],
      description: ['', Validators.required],
      size: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

}

