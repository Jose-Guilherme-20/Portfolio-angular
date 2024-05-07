import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayknowledge = signal<IKnowledge[]>([
    {
      src: '../../../../../assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento angular',
    },
    {
      src: '../../../../../assets/icons/knowledge/azure.svg',
      alt: 'Ícone de conhecimento azure',
    },
    {
      src: '../../../../../assets/icons/knowledge/csharp.svg',
      alt: 'Ícone de conhecimento csharp',
    },
    {
      src: '../../../../../assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone de conhecimento dotnet',
    },
  ]);
}
