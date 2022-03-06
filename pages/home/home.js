// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabsList:[
            {name:'苹果',index:0,active:true},
            {name:'西瓜',index:1,active:false},
            {name:'菠萝',index:2,active:false},
            {name:'香蕉',index:3,active:false},
        ]
    },
    headleitemChange(e) {
        
        const {index} = e.detail;
        console.log(index)
        const {tabsList} = this.data;
        tabsList.forEach( (item,i) => {
            if(index === i){
                item.active = true
            }else{
                item.active = false
            }
           
        })
        this.setData({
          tabsList
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})