// 游戏垃圾分类测试题 
var a = require("../../testdata/testData");
Page({
  data: {
    cats: [{
      title: "湿垃圾",
      imageSrc: "../../images/W.jpg"
    }, {
      title: "干垃圾",
      imageSrc: "../../images/G.jpg"
    }, {
      title: "可回收垃圾",
      imageSrc: "../../images/R.jpg"
    }, {
      title: "有害垃圾",
      imageSrc: "../../images/H.jpg"
    }],
    currentQ: 0,
    totalQuizzes: 10,
    answers: [],
    score: 0
  },
  onLoad: function() {
    // 测试题的生成与显示
    wx.showToast({
      title: '本测试中其他垃圾属于干垃圾，厨余垃圾属于湿垃圾',
      icon: 'none',
      duration: 3500,
      mask: true,
      success: (result) => {  
      },
    });
      


    var e = this,
      t = [];
    for (var i in a.default.data) {
      var s = a.default.data[i];
      t.push(s);
    }
    this.setData({
      data: t
    });
    // 随机出题。 o：问题， n：题量
    for (var o = [], n = 0; n < this.data.totalQuizzes; n++) {
      var r = Math.floor(4 * Math.random()),
        u = this.data.data[r][Math.floor(Math.random() * this.data.data[r].length)];
      u.c = parseInt(u.c), o.push(u);//c分类cate
    }
    this.setData({
        quizzes: o
    })
  },
  // 选择选项
  select: function(t) {
    var a = this,
      e = this.data.currentQ,
      i = parseInt(t.currentTarget.dataset.optionIndex);
    if (void 0 === this.data.answers[e]) {
      var s = this.data.answers;
      if (s[e] = i, this.setData({
          currentQ: ++e,
          answers: s
      }), e > this.data.totalQuizzes - 1) {//当答到最后一题时e>this.data.totalQuizzes-1，10>9
        var o = 0;//分数
        s.forEach(function(t, e) {
          //s是答案，e是当前第几题，o是分数，c是cate分类（c-1，因为在trash.js文件中cate从1开始），t===正确分类&&分数
          t === parseInt(a.data.quizzes[e].c) - 1 && (o += 1 / a.data.totalQuizzes * 100);
        });
        this.setData({
          score: o
        });
      }
    }
  },
  restart: function(t) {
    // 重新随机出题
    for (var e = [], a = 0; a < this.data.totalQuizzes; a++) {
      var i = Math.floor(4 * Math.random()),
        s = this.data.data[i][Math.floor(Math.random() * this.data.data[i].length)];
      s.c = parseInt(s.c), e.push(s);
    }
    this.setData({
      quizzes: e,
      currentQ: 0,
      answers: [],
      score: 0,
    });
  }
});