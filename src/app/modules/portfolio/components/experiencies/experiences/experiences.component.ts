import { Component, signal } from '@angular/core';
import { text } from 'express';
import { IExperiences } from '../../../interface/IExperiences.inteface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estagiário - Back End',
        p: 'Wiz-co | Hibrido | Agosto 2023 - Present',
      },
      text: '<p>Integração com api crm, desenvolvimento de novas apis, sustentação de aplicações, evoluções de projetos</p>',
    },
  ]);
}
