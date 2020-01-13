import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.models';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    return this.contactService.contactForm(this.model).subscribe(
      data => console.log('success!', data),
      error => console.log('Error!', error)
    );
  }

  gotoHome() {
    this.router.navigate(['home']);
  }
}
