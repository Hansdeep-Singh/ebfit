import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INotifyConfig, EngineService, CallsService } from 'hans-lib';

@Component({
  selector: 'eb-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  message: INotifyConfig | undefined;
  constructor(private engineService: EngineService, private callService: CallsService) { }

  contactForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    mobileNumber: new FormControl(null, Validators.required),
    emailAddress: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })

  validForm() {
    this.message = { success: false, notifyMessage: 'Please complete the form' };
    this.contactForm.invalid ? this.engineService.changeNotifyMessage(this.message) : "";
  }

  submit(post: any) {
    JSON.stringify(post);
    this.callService.post("Broadcast", "SendEmail", post).subscribe((data) => {
      const notify = data?.notify;
      if (data?.success) {
        this.message = { success: true, notifyMessage: notify?.message };
        this.engineService.changeNotifyMessage(this.message);
      }
      else {
        this.message = { success: notify?.success, notifyMessage: notify?.message };
        this.engineService.changeNotifyMessage(this.message);
      }
    })
  }
}
