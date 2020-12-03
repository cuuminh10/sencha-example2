Ext.define('ModernApp2.view.home.CategoryView',{
    xtype: 'categoryview',
    cls: 'categoryview',
    controller: {type: 'categoryviewcontroller'},
    viewModel: {type: 'categoryviewmodel'},
    requires: [],
    extend: 'Ext.Container',
    scrollable: true,
    html: `<div style="user-select: text !important;">Welcome to the Ext JS 7.2 Modern Desktop Template Application!
</div>`
});
