import { html, css, LitElement } from 'lit-element';
import { distinctUntilChanged, pluck, Subscription } from 'rxjs';
import { Store } from '../store';

export class AppComponent extends LitElement {
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
      pluck('name'),
      distinctUntilChanged()
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
      <p @click="${this.handleClick}">Hello, ${this.name}!</p>
      <user-component />`;
  }

  handleClick() {
    this.store.setState({ name: 'new dinamyc name' });
  }
}

customElements.define('app-component', AppComponent);