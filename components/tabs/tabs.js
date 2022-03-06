// components/tabs/tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
       
            tabsList:{
                type:Array,
                value:[]
            }
        
    },

    /**
     * 组件的初始数据
     */
    data: {
      
    },

    /**
     * 组件的方法列表
     */
    methods: {
        headleItem(e) {
            console.log(e)
            const {index} = e.target.dataset;
            this.triggerEvent('itemChange',{index})
        }
    }
})
