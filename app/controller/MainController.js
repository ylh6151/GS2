Ext.define('GS2.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	blog: 'blog'
        },
        control: {
            'blog list': {
                itemtap: 'showPost'
            }
        }
    },
    
    showPost : function(list, index, target, record, e, eOpts ) {
    	console.log(record.get('title'));
    	this.getBlog().push({
            xtype: 'panel',
            title: record.get('title'),
            html: record.get('content'),
            styleHtmlContent: true,
            scrollable: true
        });
    }
});