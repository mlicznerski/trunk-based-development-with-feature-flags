import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature1-home',
  template: `
    <section>
      <div>Feature1 Home Component is working</div>

      <div>
        <ng-container *featureFlag="'dev-ticket-2-feature2'">
          <app-feature1-initially-hidden></app-feature1-initially-hidden>
        </ng-container>
      </div>

      <div>
        <app-feature3-refactor-in-progress></app-feature3-refactor-in-progress>
      </div>

      {{ 'value' | convert }}
    </section>
  `,
  styles: [
    `
      section {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    `,
  ],
})
export class Feature1HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
