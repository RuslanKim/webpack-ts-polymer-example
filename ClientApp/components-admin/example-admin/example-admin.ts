import { html, PolymerElement } from '@polymer/polymer/polymer-element'


export class ExampleAdmin extends PolymerElement
{
    static get is() { return 'example-admin' }

    static get template() { return html([`<style></style>Example Admin 12`]) }

    static get properties() 
    {
        return {
        }
    }

    static get observers() 
    {
        return [
        ]
    }
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        super.connectedCallback()
    }
}
