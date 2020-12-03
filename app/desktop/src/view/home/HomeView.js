Ext.define('ModernApp2.view.home.HomeView', {
    xtype: 'homeview',
    cls: 'homeview',
    controller: {type: 'homeviewcontroller'},
    viewModel: {type: 'homeviewmodel'},

    requires: [
        'Ext.field.*',
        'Ext.form.FieldSet'
    ],

    extend: 'Ext.Container',
    scrollable: true,
    autoSize: true,
    defaultType: 'spinnerfield',

    items: [
        {
            xtype: 'textfield',
            label: 'Title'
        },
        {
            label: 'Height \u00b0',
            decimals: 1,
            bind: '{height}'
        }, {
            label: 'Weight \u00b0',
            decimals: 1,
            bind: '{weight}'
        },
        {
            label: 'BMI \u00b0',
            bind: '{bmi}',
            readOnly: true
        }]
});
