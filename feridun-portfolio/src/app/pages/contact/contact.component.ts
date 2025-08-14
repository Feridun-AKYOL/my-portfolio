import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isSubmitting = false;
  form = { name: '', email: '', subject: '', message: '' };

  async submit(): Promise<void> {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    await new Promise((r) => setTimeout(r, 1500));
    this.isSubmitting = false;
    alert('Thank you for your message! I will get back to you soon.');
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}