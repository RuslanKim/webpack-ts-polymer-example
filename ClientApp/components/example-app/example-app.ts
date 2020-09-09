import { html, PolymerElement } from '@polymer/polymer/polymer-element'


export class ExampleApp extends PolymerElement
{
    static get is() { return 'example-app' }

    static get template() { return html([`<style include=""></style><p>example app 12</p>`]) }

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

    disconnectedCallback()
    {
        super.disconnectedCallback()
    }

    ready()
    {
        super.ready()
    }


}
