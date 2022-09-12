tennis=[
    {player:'sania mirza',id:121,rank:1,"no ofmatches":650},
    {player:'serena williams',id:131,rank:2,"no of matches":766},
    {player:'ankita raina',id:141,rank:3,"no of matches":760},
    {player:'nirupamasanjeev',id:151,rank:4,"no of matches":560},
    {player:'martina navratilova',id:161,rank:5,"no of matches":500},
    {player:'maria sharapova',id:171,rank:6,"no of matches":450},
    {player:'naomi osaka',id:181,rank:7,"no of matches":300},
    {player:'chris evert',id:191,rank:8,"no of matches":550}
    ]
    match=[]
    for(i=0;i<tennis.length/2;i++){
    obj={}
    obj["player"]=tennis[i].player
    obj["opponentplayer"]=tennis[tennis.length-1-i].player
    match.push(obj)
    }
   console.log(match)

   slot1=[]
   slot2=[]
   for(i in  match){
       if(i%2==0){
        slot1.push(match[i])
       }
       else{
        slot2.push(match[i])
       }
   }
   
   slot2.reverse()
   rightrivalry=[]
   for(i of slot2){
       slot1.push(i)
    }
   console.log(slot1)
   function rank(name){
    match=0
   tennis.forEach(element=>{
    if(element.player==name){
        match=element.rank
    }
   })
   return match
}
function percentage(t1,t2){
    
}

    

