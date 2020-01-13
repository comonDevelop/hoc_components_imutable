// ---------------------------------------------------------- //
console.log("start")
setTimeout(()=>{
    console.log('timer1')
    new Promise(function(resolve){
     console.log(" promise start ")
      resolve();
}).then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)
console.log("end")

// start  正常流程
// end
// time1
// promise start
// promise1
// time2
// promise2

// ---------------------------------------------------------- // 可以理解
console.log("start")
async function f1(){
      console.log("f1 start")
      var aa= await 1;//到这里挂起，后面先不执行
     console.log("f1 end")
}
setTimeout(function(){
    console.log("setTimeout ")
},0)
f1();
var pr1 =new Promise(function(resolve){
     console.log(" promise start ")
      resolve();
}).then(function(resoult){
    console.log("promise then")
})
console.log("end")

// start=>f1 start=> promise start=> end =>f1 end=> promise then =>setTimeout

// ---------------------------------------------------------- // 可以理解
console.log("start")
async function f1(){
      console.log("f1 start")
      var aa= await 1;
     console.log("f1 end")
}
setTimeout(function(){
    console.log("setTimeout ")
},0)

var pr1 =new Promise(function(resolve){
     console.log(" promise start ")
      resolve();
}).then(function(resoult){
    console.log("promise then")
})
f1();
console.log("end")

//  start=>promise start=>f1 start=> end=>=> promise then =>f1 end=>setTimeout 

// ---------------------------------------------------------- // 可以理解，执行地方不一致，打印不同
console.log("start")
async function f1(){
    console.log("f1 start")
    var aa= await 1;
    setTimeout(function(){
        console.log("setTimeout 2")
    },0)
}
setTimeout(function(){
    console.log("setTimeout ")
},0)
var pr1 =new Promise(function(resolve){
     console.log(" promise start ")
      resolve();
}).then(function(resoult){
    console.log("promise then")
})
f1();
console.log("end")

// start=>promise start=> f1 start=> end=> promise then => setTimeout => setTimeout 2 // 可以理解