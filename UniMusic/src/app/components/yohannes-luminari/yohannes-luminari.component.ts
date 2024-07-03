import { Component } from '@angular/core';

@Component({
  selector: 'app-yohannes-luminari',
  templateUrl: './yohannes-luminari.component.html',
  styleUrl: './yohannes-luminari.component.scss'
})
export class YohannesLuminariComponent {
  roles: string[] = ['Full Stack Developer', 'Software Engineer', 'Creative Coder', 'Tech Enthusiast'];
  currentRole: string = this.roles[0];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startRoleRotation();
  }

  startRoleRotation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.currentIndex];
    }, 3000); // Cambia ogni 3 secondi
  }


  scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.style.display = 'block'; // Mostra la sezione di contatto
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
