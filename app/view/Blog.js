Ext.define('GS2.view.Blog', {
    extend: 'Ext.navigation.View',
    xtype: 'blog',
    
    requires : [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],
    
    config: {
        title: 'Blog',
        iconCls: 'star',
        
        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                title: 'Sencha Blog',
                
                store: {
                    autoLoad: true,
                    fields: ['title', 'author', 'content'],
                    
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/xguru',
                        
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                }
            }
        ]
    }
});
