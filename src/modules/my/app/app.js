import { LightningElement } from 'lwc';

const ACCOUNTS_URL = 'api/accounts';

export default class App extends LightningElement {

    accounts = [];

    connectedCallback() {
        fetch(ACCOUNTS_URL).then(response => {
            return response.json();
        }).then( accounts => {
            this.accounts = accounts;
        });
    }

}