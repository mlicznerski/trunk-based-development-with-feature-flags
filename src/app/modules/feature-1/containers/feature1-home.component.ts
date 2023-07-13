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
        <ng-container
          *featureFlagDisabled="
            'dev-ticket-3-feature3-refactor--show-refactored-component'
          "
        >
          <app-feature3-to-be-refactored></app-feature3-to-be-refactored>
        </ng-container>

        <ng-container
          *featureFlag="
            'dev-ticket-3-feature3-refactor--show-refactored-component'
          "
        >
          <app-feature3-refactor-in-progress></app-feature3-refactor-in-progress>
        </ng-container>
      </div>
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
