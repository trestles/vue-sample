// var app = new Vue({ 
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// });

// var app2 = new Vue({ 
//     el: '#app-2',
//     data: {
//         seen: true
//     }
// });

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
  data: {
    // description: "blah"
  }
})

var app3 = new Vue({ 
    el: '#app-3',
    data: {
        message: 'Hello Vue!',
        groceryList: [
	        { id: 0, text: 'Twix' },
	        { id: 1, text: 'Swag' },
	        { id: 2, text: 'Delish' },
            { id: 3, text: 'Milk' }
        ]
    },
    watch:{
        message: function(){
          console.log("message has changed!");
        }
    },
    computed: {
        sortedGroceryList: function() {
            sortedGroceryList = []
            for (var i in this.groceryList) {
                sortedGroceryList.push(this.groceryList[i])
            }
            
            return sortedGroceryList.sort((a, b) => a.text.localeCompare(b.text));
        }
    },
    methods: {
        reverse() {
            this.message = this.message.split('').reverse().join('')
        },
        reverseList() {
            for (var i in this.groceryList) {
                this.groceryList[i].text = this.groceryList[i].text.split('').reverse().join('')
            }
        }
    }
});
