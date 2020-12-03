Ext.define('ModernApp2.view.home.HomeViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.homeviewmodel',

	formulas: {
		bmi: {
			get: function(get) {
				return get('height') + get('weight');
			}
		}
	},

	data: {
		height: 0,
		weight: 0
	}

});
