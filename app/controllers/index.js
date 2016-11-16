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

	actions: {

		
		saveInvitation() {

			//const email = this.get('emailAddress');

//			const newInvitation = this.store.createRecord('invitation', { email: email });
//			newInvitation.save();	

//			this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
//			this.set('emailAddress', ''); 

			var _that = this;
            var email = this.get('emailAddress');

            var newInvitation = this.store.createRecord('invitation', {
                email: email
            });

			newInvitation.save().then(function(response) {
                _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
                _that.set('emailAddress', '');
           	});
		}
	}
});
