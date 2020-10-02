import { LightningElement, wire } from 'lwc';

// Import message service features required for publishing and the message channel
import { publish, MessageContext } from 'lightning/messageService';
import TABLEAU_VIZ_SELECTED_CHANNEL from '@salesforce/messageChannel/tableauVizMessageChannel__c';

export default class LmsPublisherWebComponent extends LightningElement {

    @wire(MessageContext)
    messageContext;

    // Respond to UI event by publishing message
    handleClick(event) {
        var selectedTargetValue = event.target.label;
        const payload = { selectedTarget: selectedTargetValue };

        publish(this.messageContext, TABLEAU_VIZ_SELECTED_CHANNEL, payload);
    }
}
