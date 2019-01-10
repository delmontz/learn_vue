var app = new Vue({
   el: '#app',
   data: {
      hoge: 'hello world!!',
      items: ['デルモンテ', 'カゴメ', 'キッコーマン'],
      str: '初期値',
      show: true,
      count: 0
   },
   methods: {
      pochitto: function(event){
         alert(event.target);
      },
      increment(){ //functionを省くこのも可能　短縮記法
         this.count++;
      }
   }
});

console.log(app.hoge);