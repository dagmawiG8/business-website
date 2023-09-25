import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailForwarderService } from '../Services/email-forwarder.service';
import { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  private http: HttpClient;
  public contactForm: FormGroup;
  disabled = false;

  notice: string;
  message: string;
  resultIcon: SweetAlertIcon;
  confirmButtonColor = "#0b91b8";

  constructor(private emailService: EmailForwarderService) {}

  onSubmit() {
        var myFormData = new FormData();

        myFormData.append('name', this.contactForm.value.name);
        myFormData.append('email', this.contactForm.value.email);
        myFormData.append('subject', this.contactForm.value.subject);
        myFormData.append('message', this.contactForm.value.message);

        console.log("Name: " + myFormData.get("name")); 
        console.log("Email: " + myFormData.get("email"));
        console.log("Subject: " + myFormData.get("subject"));
        console.log("Message: " + myFormData.get("message"));

        let jsonData = {
          name: myFormData.get("name"),
          from: myFormData.get("email"),
          to: "sales@convergencesolutons.com", 
          subject: myFormData.get("subject"), 
          text: `A contact mail sent from: ${myFormData.get("name")} <${myFormData.get("email")}> \n\n${myFormData.get("message")}`
        }
        
        this.emailService.sendEmail("https://mailer.convergencesolutons.com/sendmail", jsonData).subscribe(
            data => {
              let res:any = data; 
                console.log(
                  `👏 > ${jsonData.from} has successfully sent an mail with message id: ${res.messageId}`
                );

                this.notice = "Thank you for reaching out";
                this.message = "We'll get back to you soon";
                this.resultIcon = "success";
            },
            
            err => {
                console.log(err);
                this.notice = "Oops";
                this.message = "Something went wrong...";
                this.resultIcon = "error";
            }
        );

  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });

    if(!this.contactForm.value.name 
      || !this.contactForm.value.email || !this.contactForm.value.subject
      || !this.contactForm.value.message) {
        this.disabled = true;
    }
    else {
      this.disabled = false;
    }

    this.contactForm.valueChanges.subscribe(() => {
      if (this.contactForm.invalid) {
        this.disabled = true;
        console.log('disabled');
      }
      else {
        this.disabled = false;
        console.log('enabled');
      }
  });


  }
  
}
