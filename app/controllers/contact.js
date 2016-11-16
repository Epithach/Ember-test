import Ember from 'ember';

export default Ember.Controller.extend({

//	isDisabled: true,

	emailAddress: '',

/*
	actualEmailAddress: Ember.computed('emailAddress', function() {
		console.log('actualEmailAddress function is called :', this.get(''emailAddress));
	}),

	emailAddressChanged: Ember.observer('emailAddress', function()) {
		console.log('observer is called ', this.get ('emailAddress'));
	})
*/

/*
	isDisabled: Ember.computed('emailAddress', function() {
		return this.get('emailAddress') === '';
	})
*/

//	isDisabled: Ember.computed.empty('emailAddress')

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),
	isLong: Ember.computed.gte('Text', 5),

	actions: {

		sendText() {
			alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}
				Saving of the following text address is in progress: ${this.get('Text')}`);
			this.set('responseMessage', `“We got your message and we’ll get in touch soon with your email address: ${this.get('emailAddress')}`);
			this.set('emailAddress', '');
			this.set('Text', '');
		}

	}

});
