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
    </section>
  `,
  styles: [``],
})
export class Feature1HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
