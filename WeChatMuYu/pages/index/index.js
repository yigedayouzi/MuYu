// index.js
const myaudio = wx.createInnerAudioContext();

Page({

    data: {
        classStyle: "",
        value: 0,
        id1: "default",
        id2: "default",
        id3: "default",
        id4: "default",
        id5: "default",
        id6: "default",
        show: 1,
    },

    //音乐播放
    theplay() {
        let srcurl = "audios/damuyu.mp3";
        myaudio.src = srcurl;
        myaudio.title = "123";
        myaudio.play();
    },

    //音乐暂停
    thestop() {
        myaudio.stop();
    },
  
    //功德+1
    shows2() {
        this.setData({
            id1: 'font',
        });
        setTimeout(() => {
            this.setData({
                id1: 'default'
            });
        }, 1000);
    },

    shows3() {
        this.setData({
            id2: 'font',
        });
        setTimeout(() => {
            this.setData({
                id2: 'default'
            });
        }, 1000);
    },

    //获取存储的功德
    myget01() {
        this.setData({
            value: wx.getStorageSync("01")

        })
    
    },

    //功德存储
    myset01() {
        wx.setStorageSync("01", this.data.value)
  
    },
    onLoad:function(options) {
        this.myget01();
    },

    //点击
    click() {

        this.myget01();

        //播放
        this.thestop();
        this.theplay();

        this.setData({
            classStyle: 'animal',
            value: this.data.value + 1,
            show: this.data.show + 1
        });
        setTimeout(() => {
            this.setData({
                classStyle: '',
            });
        }, 100);
        if (this.data.show == 2) {
            this.shows2();
        };
        if (this.data.show == 3) {
            this.setData({
                id2: 'font',
            });
            setTimeout(() => {
                this.setData({
                    id2: 'default'
                });
            }, 1000);
        };
        if (this.data.show == 4) {
            this.setData({
                id3: 'font',

            });
            setTimeout(() => {
                this.setData({
                    id3: 'default',

                });
            }, 1000);
        };
        if (this.data.show == 5) {
            this.setData({
                id4: 'font',

            });
            setTimeout(() => {
                this.setData({
                    id4: 'default',

                });
            }, 1000);
        };
        if (this.data.show == 6) {
            this.setData({
                id5: 'font',

            });
            setTimeout(() => {
                this.setData({
                    id5: 'default',

                });
            }, 1000);
        };
        if (this.data.show == 7) {

            this.setData({
                id6: 'font',
            });
            setTimeout(() => {
                this.setData({
                    id6: 'default',
                });
            }, 1000);
            setTimeout(() => {
                this.setData({
                    show: 1,
                });
            }, 0);
        };

        this.myset01();

    },




}
)
