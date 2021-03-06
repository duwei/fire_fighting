Ext.define('FV.view.center.CaoZRZh', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.caozrzh',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: 0,
    
    initComponent: function() {
        Ext.apply(this, {
            //store: 'Articles',

            columns: [{
                text: '时间',
                dataIndex: '时间',
                width: 140
            }, {
                text: '操作内容',
                dataIndex: '操作内容',
                flex: 1
            }]
        });

        this.callParent(arguments);
    },

    /**
     * Title renderer
     * @private
     */
    formatTitle: function(value, p, record) {
        return Ext.String.format('<div class="topic"><b>{0}</b><span class="author">{1}</span></div>', value, record.get('author') || "Unknown");
    },

    /**
     * Date renderer
     * @private
     */
    formatDate: function(date) {
        if (!date) {
            return '';
        }

        var now = new Date(),
            d = Ext.Date.clearTime(now, true),
            notime = Ext.Date.clearTime(date, true).getTime();

        if (notime === d.getTime()) {
            return 'Today ' + Ext.Date.format(date, 'g:i a');
        }

        d = Ext.Date.add(d, 'd', -6);
        if (d.getTime() <= notime) {
            return Ext.Date.format(date, 'D g:i a');
        }
        return Ext.Date.format(date, 'Y/m/d g:i a');
    }
});
