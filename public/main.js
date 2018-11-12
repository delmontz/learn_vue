var app = new Vue({
   el: '#app',
   data: {
      hoge: 'hello world!!',
      items: ['デルモンテ', 'カゴメ', 'キッコーマン']
   },
   methods: {
      pochitto: function(event){
         alert(event.target);
      }
   }
});

console.log(app.hoge);