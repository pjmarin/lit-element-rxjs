import { html, css, LitElement } from 'lit-element';
import { pluck, Subscription } from 'rxjs';
import { Store } from '../store';

export class UserComponent extends LitElement {
    static styles = css`p { color: blue; }`;
    static get properties() {
      return {
        name: { type: String }
      }
    }
    
    constructor() {
      super();
      this.store = Store;
      this.subscription = new Subscription();
    }

    connectedCallback() {
      super.connectedCallback();
      const sub = this.store.getStore()
        .pipe(
          pluck('name')
        )
        .subscribe(name => this.name = name);

      this.subscription.add(sub);
    }

    disconnectedCallback() {
      this.subscription.unsubscribe();
      super.disconnectedCallback();
    }
  
    render() {
      return html`
        <p>User is ${this.name}!</p>`;
    }
  }
  
  customElements.define('user-component', UserComponent);