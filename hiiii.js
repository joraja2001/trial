// software_updates=[
//     {
//     spotify_version:2.1,
//    release_date:2022,
//     bugs:"ewr4",
//     feature:"karaoke mode",
//     author:"spotify"

// },
// {
//        truecaller:3.1,
//        release_date:2022,
//        bugs:"dghdg",
//        feature:"introducing to action calls",
//        author:"truecaller"

// },
// {
// netflix:4.1,
// release_date:2022,
// bugs:"wert",
// feature:"icons get new look",
// author:"netflix"   
// }]
// // function findbyyear(year){
// // count_updates=software_updates.filter(n=>n.release_date.include(year))
// // console.log(`${count_updates.length},"this is the countable release date ,+${year}`)
// // console.log(count_updates)
// // }
// // console.log(findbyyear(2022))
// console.log("88888888888888");
// console.log("helloo");
// playteams=[]
// seader=[]
// unseader=[]
// slot1_assign=tennis.filter(n=>n.rank>4)
// slot2_assign=tennis.filter(n=>n.rank<=4)
// seader.push(slot2_assign)
// unseader.push(slot1_assign)
// console.log(seader)
// console.log(unseader)
// for(i of seader){
//     for(j of unseader){
        
//     }
//     if(i=='player'){

//     }
// }

// for(i of tennis){
//     for (var j = 0; j < tennis.player.length / 2; j++) {
//         playteams.push(tennis[j] + " vs " + tennis[tennis.player.length - 1 - j]);           
// }
// }
       
//         console.log(playteams)
//     seader1=[]
//     seader2=[]
//     for(i in playteams){
//         if(i%2==0){
//             seader1.push(playteams[i])
//         }
//         else if(i%2!=0){
//             seader2.push(playteams[i])
//         }
//     }
//     console.log(seader1)
//     console.log(seader2)
//     console.log(seader1[Math.floor(Math.random()*seader1.length)])
//    console.log()
// arr=[ 'sania mirza', 'chris evert' ,
//   'ankita raina', 'maria sharapova'  ,
//   'nirupamasanjeev', 'martina navratilova' ,
//   'serena williams', 'naomi osaka' ] 
// // console.log(arr[Math.floor(Math.random()*arr.length)])
// // arr1=[1,2]
// // console.log(Math.random(arr1))
// for(i=0;i<arr.length/2;i++){
//     console.log(arr[Math.floor(Math.random()*arr.length)])
// }
// for(i of arr){
//     console.log([i])
// }
// shop_opened=true
// a= new Promise((resolve,reject)=>{
//  if(shop_opened){
//      resolve(document.write("welcome!!!"))
//  }
//  else{
//      reject(document.write("sorry! right now we are unavailable"))
//  }
// })
// a.then(()=>{setTimeout(()=>{document.write("you can order your food item from our menu")})},50000)
// .then(()=>{document.write("have a nice day")})
// .catch(()=>{document.write("we would like to contact you back,once our shop open!provide your detail here")})
// sessionStorage.setItem("jothika",value())
// document.write(sessionStorage.getItem("jothika"))
// a=localStorage.setItem("name",value())
//  document.write(localStorage.getItem("name"))
// localStorage.removeItem("name")
// localStorage.setItem("name","vishnu")
// location="fgh"
// sessionStorage.setItem("location","Chennai")
// if(sessionStorage.getItem("location")==location){
//  document.write(" is the location")
// }
// else if(sessionStorage.getItem("location")==location){
//  document.write("You are Right")
// }
// else{
//  document.write("Wrong location\n")
//  document.write("Bye "+ localStorage.getItem("name"))

// }
// function makerequest(location){
//  return new Promise((resolve,reject)=>{
//   console.log(`processing to the ${location}`)
// if(location=="google"){
//   resolve("vanakam pa ")
// }
// else{
//   reject("ponga pa")
// }
// })
// }
// function processing(response){
//   return new Promise((resolve,reject)=>{
//    console.log("processing")
//    resolve(`extra information${response}`)
//   })
// }
// makerequest("google").then((response)=>{console.log("goingg")
// return processing(response)})
// .then(responseresolve =>{console.log(responseresolve)})
// .catch(err => console.log(err))
// async function final(){
//   try{
//       let location= await makerequest("google")
//       console.log("goingg")
//       let processed=await processing(response) 
//       console.log(responseresolve)
//   }
//   catch (err){
//       console.log(err)
//   }
// }
// final()
a={r:[1,2,3],
   b:[2,3,4]}
  //  x=a.r.reduce((a,b)=>a+b)
  //  y=a.b.reduce((a,b)=>a+b)
  //  console.log(x,y)
  sum=0
   for(i in a){
    for(j of a[i]){
    sum+=i
   }
  }
  console.log(sum)

// va=3
// jo(va).then((message)=>{console.log("this is "+message)})
// .catch((mess)=>{console.log("this is"+mess)})
// a.then((message)=>{console.log("this is tamil greet,"+message)})
//  .catch((mess)=>{console.log("byeee,"+mess)})
//  h="yes"
// function input(user){
//   return new Promise((resolve,reject)=>{
//     if(user=="yes"){
//       resolve("come")
//     }
//     else{
//       reject("go")
//     }
//   })
// }

// function invite(food){
//   return new Promise((resolve,reject)=>{
//      resolve("serving")

//   })
// }
// input(h).then((guest=>{console.log("have you enjoyed")
// return invite(guest)
// }).then(processedresponse=>{
//   console.log(processedresponse)
// }).catch(err=>{
//   console.log(err)
// }))



// manchurian={}
// a='no'
// b="yes"
// if(a=="yes"){
//   manchurian["masala"]="masala"
// }
// else{
//   manchurian["masala"]="nomasala"
// }
// if(b=="yes"){
//   manchurian["spicey"]="spicey"
// }
// else{
//   manchurian["spicey"]="nospicey"
// }
// function start(dish){
//   console.log('!!!')
//   dish()
// }
// function hello(){
// console.log("it's getting ready")    
// } 
// function spicey(){
//   console.log("it very spicey")
// }
// function nospicey(){
//   console.log("no spicey")
// }
 
//   Promise.resolve().then(()=>{setTimeout(() => {
//   console.log("this is your order")})
//   .then(()=>{setTimeout(() => {
//   console.log("order confirm")})
//   .then(()=>{setTimeout(() => {
//   console.log("hiiiiiii")})
//   if(manchurian.masala=="masala"){
//     Promise.resolve().then(()=>{setTimeout(() => {
//       start(hello)})
//       if(manchurian.spicey=="nospicey"){
//         Promise.resolve.then.then(()=>{ setTimeout(() => {
//           start(nospicey)})
//         },3000)
//       }
    
//     }, 3000);
//   }

//   if(manchurian.masala=="nomasala"){
//     Promise.resolve().then(()=>{ setTimeout(() => {
//       start(hello)})
//       if(manchurian.spicey=="spicey"){
//         Promise.resolve().then(()=>{ setTimeout(() => {
//           start(spicey)})
//         },3000)
//       }
    
//     }, 3000);
//   }
//   else{
//     Promise.resolve().then(()=>{setTimeout(() => {
//       console.log("your order is ready")})
//     }, 3000);
//   }
//   Promise.reject().catch(()=>{setTimeout(() => {
//     console.log("closed")})
//   }, 2000)
// }, 2000);
// },1000)
// },1000)

// simcard=(company)=>{
//   return new Promise((resolve,reject)=>{
//     console.log("taking the company name")
//     if(company=="vodaphone"){
//       resolve(console.log("availability is there"))
//     }
//     else{
//       reject(console.log("no availability"))
//     }
//   })
// }
// network=(signal)=>{
// return new Promise((resolve,reject)=>{
//   console.log("connecting to the network")
// })

//}
