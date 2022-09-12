
console.log('____________________________________________JAVASCRIPT_______________________________')
software_UPDATES=[
        {
<<<<<<< HEAD
        Version:'2.1',
       Release_date:'2021',
        Bugs:"crashing",
        Feature:"karaoke mode",
        Author:"spotify",
        Type:"major"
    
    },
    {
           Version:'3.1',
           Release_date:'2022',
           Bugs:"UPI bug",
           Feature:"introducing to action calls",
           Author:"truecaller",
           Type:"major"
    
    },
    {
    Version:'4.1',
    Release_date:'2022',
    Bugs:"video freeze",
    Feature:"icons get new look",
    Author:"netflix" ,
    Type:"major"  
    },
{
    Version:'4.3',
    Release_date:'2021',
    Bugs:'voice call error',
    Feature:"admin msg control",
    Author:"whatsapp",
    Type:"match enhancement"
},
{
    Version:'4.5',
    Release_date:'2022',
    Bugs:'crashing',
    Feature:"react over msg",
    Author:"whatsapp",
    Type:"match enhancement"
},
{ Version:'4.7',
    Release_date:'2022',
    Bugs:'crashing',
    Feature:"more reaction over msg",
    Author:"whatsapp",
    Type:"match enhancement"
=======
        name:'spotify',
        version:'2.1',
       release_date:'21.12.2021',
        bugs:"crashing",
        feature:"karaoke mode",
        author:["spotify"],
        type:"major"
    
    },
    {      name:'truecaller',
           version:'3.1',
           release_date:'28.06.2022',
           bugs:"UPI bug",
           feature:"introducing to action calls",
           author:["truecaller"],
           type:"major"
    
    },
    {
    name:'netflix',
    version:'4.1',
    release_date:'12.09.2022',
    bugs:"video freeze",
    feature:"icons get new look",
    author:["netflix"] ,
    type:"major"  
    },
{
    name:'whatsapp',
    version:'4.3',
    release_date:'25.04.2021',
    bugs:'voice call error',
    feature:"admin msg control",
    author:["Jan Koum"],
    type:"match enhancement"
},
{   name:'whatsapp',
    version:'4.5',
    release_date:'07.08.2022',
    bugs:'crashing',
    feature:"react over msg",
    author:["Brian"],
    type:"match enhancement"
},
{   name:'whatsapp',
    version:'4.7',
    release_date:'05.10.2022',
    bugs:'crashing',
    feature:"more reaction over msg",
    author:["Brian", "Acton" ,"Jan Koum"],
    type:"match enhancement"
>>>>>>> 905b139303d76696c084f96c0c6f67dda179284b
}]
console.table(software_UPDATES)
bugs=[
    {bugID:'101',
        name:'spotify',
        version:'2.1',
       release_date:'21.12.2021',
        bugs:"crashing",
        feature:"karaoke mode",
        author:["spotify"],
        type:"major"
    },
    {bugID:'102',
        name:'truecaller',
        version:'3.1',
        release_date:'28.06.2022',
        bugs:"UPI bug",
        feature:"introducing to action calls",
        author:["truecaller"],
        type:"major"
    },
    {
        bugID:'103',
        name:'netflix',
    version:'4.1',
    release_date:'12.09.2022',
    bugs:"video freeze",
    feature:"icons get new look",
    author:["netflix"] ,
    type:"major"
    },
    {bugID:'104',
    name:'whatsapp',
    version:'4.3',
    release_date:'25.04.2021',
    bugs:'voice call error',
    feature:"admin msg control",
    author:["Jan Koum"],
    type:"match enhancement"
    },
    {
     bugID:'105',
     name:'whatsapp',
    version:'4.5',
    release_date:'07.08.2022',
    bugs:'crashing',
    feature:"react over msg",
    author:["Brian"],
    type:"match enhancement"
    },
    {
        bugID:'106',
        name:'whatsapp',
        version:'4.7',
        release_date:'05.10.2022',
        bugs:'crashing',
        feature:"more reaction over msg",
        author:["Brian", "Acton" ,"Jan Koum"],
        type:"match enhancement"

    }
]

    function searchbyyear(year){
<<<<<<< HEAD
    count_UPDATES=software_UPDATES.filter(n=>n.Release_date.includes(year))
=======
    count_UPDATES=software_UPDATES.filter(n=>n.release_date.toString().includes(year))
>>>>>>> 905b139303d76696c084f96c0c6f67dda179284b
    console.log(`${count_UPDATES.length} "versions came in the year of ${year}`)
    console.table(count_UPDATES)
    }
<<<<<<< HEAD
    searchbyyear('2022')
=======
    searchbyyear(2021)
>>>>>>> 905b139303d76696c084f96c0c6f67dda179284b
    console.log('__________________________________________________________________________________________________________________________')
   

    function searchbyspecificbug(bugID){
        count_bug=bugs.filter(n=>n.bugID.includes(bugID))
        console.log(`"this is the ${bugID} bug occured for the below release `)
        console.table(count_bug)
    }
    searchbyspecificbug('101')
    console.log('__________________________________________________________________________________________________________________________')
   


    function searchbyauthor(name){
<<<<<<< HEAD
        count_AUTHOR=software_UPDATES.filter(n=>n.Author.includes(name))
        console.log(`"${name} is the one who launched  ${count_AUTHOR.length} times software updates `)
        console.log(count_AUTHOR)
    }
    searchbyauthor('whatsapp')
=======
        count_AUTHOR=software_UPDATES.filter(n=>n.author.includes(name))
        console.log(`"${name} is the one who is part of software updates for  ${count_AUTHOR.length} times `)
        console.table(count_AUTHOR)
    }
    searchbyauthor("Jan Koum")

>>>>>>> 905b139303d76696c084f96c0c6f67dda179284b
    console.log('__________________________________________________________________________________________________________________________')
   

    authors_OFSOFTWARES=["spotify","truecaller","netflix","Jan Koum","Brian","Brian", "Brian" ,"Jan Koum"]
    majorauthor=1;
    a=0;
    for(i=0;i< authors_OFSOFTWARES.length;i++){
        for(j=1;j< authors_OFSOFTWARES.length;j++){
            if(authors_OFSOFTWARES[i]==authors_OFSOFTWARES[j])
         a++;
        
        if(majorauthor<a){
            majorauthor=a;
            author= authors_OFSOFTWARES[i]
        }
    }
    a=0;
}
console.table(`${ author} is the one who is an  major author of performing ,${majorauthor} times`)

    console.log('__________________________________________________________________________________________________________________________')
   

    function searchbyversion(version){
<<<<<<< HEAD
        version_FORSOFTWARE=software_UPDATES.filter(n=>n.Version.includes(version))
=======
        
        version_FORSOFTWARE=software_UPDATES.filter(n=>n.version.includes(version))
       
>>>>>>> 905b139303d76696c084f96c0c6f67dda179284b
        console.log(`"the software which having  ${version}version  `)
        console.table(version_FORSOFTWARE)
      
        
    }
<<<<<<< HEAD
    searchbyversion('4.1')
    console.log('__________________________________________________________________________________________________________________________')
    console.log("*************************************************************************************************************************")
=======

    searchbyversion('4.1')

>>>>>>> 905b139303d76696c084f96c0c6f67dda179284b
    console.log('__________________________________________________________________________________________________________________________')
   

    function searchbytype(type){
        type_OFSOFTWARE=software_UPDATES.filter(n=>n.Type.includes(type))
        console.log(`"the software which having  ${type} type  `)
        console.table(type_OFSOFTWARE)
    }
    console.log('__________________________________________________________________________________________________________________________')
    searchbytype('match enhancement')
    console.log('__________________________________________________________________________________________________________________________')
    searchbytype('major')




<<<<<<< HEAD
    console.log("_______________________HERE  TYPESCRIPT________________________________________________")
    interface Version{
        Version:string,
        Release_date:string,
        Bugs:string,
        Feature:string,
        Author:string,
        Type:string
    }
    const software_UPDATES:Version []=[
            {
            Version:'2.1',
           Release_date:'2021',
            Bugs:"crashing",
            Feature:"karaoke mode",
            Author:"spotify",
            Type:"major"
        
        },
        {
               Version:'3.1',
               Release_date:'2022',
               Bugs:"UPI bug",
               Feature:"introducing to action calls",
               Author:"truecaller",
               Type:"major"
        
        },
        {
        Version:'4.1',
        Release_date:'2022',
        Bugs:"video freeze",
        Feature:"icons get new look",
        Author:"netflix" ,
        Type:"major"  
        },
    {
        Version:'4.3',
        Release_date:'2021',
        Bugs:'voice call error',
        Feature:"admin msg control",
        Author:"whatsapp",
        Type:"match enhancement"
    },
    {
        Version:'4.5',
        Release_date:'2022',
        Bugs:'crashing',
        Feature:"react over msg",
        Author:"whatsapp",
        Type:"match enhancement"
    },
    { Version:'4.7',
        Release_date:'2022',
        Bugs:'crashing',
        Feature:"more reaction over msg",
        Author:"whatsapp",
        Type:"match enhancement"
    }]
    console.log(software_UPDATES)
    
        function searchbyyear(year:string){
       var count_UPDATES=software_UPDATES.filter(n=>n.Release_date.includes(year))
        console.log(`${count_UPDATES.length} "versions came in the year of ${year}`)
        console.log(count_UPDATES)
        }
        console.table(searchbyyear('2022'))
        console.log('__________________________________________________________________________________________________________________________')
        console.log('***************************************************************************************************************************')
        console.log('__________________________________________________________________________________________________________________________')
        function searchbyauthor(name:string){
            var count_AUTHOR=software_UPDATES.filter(n=>n.Author.includes(name))
            console.log(`"${name} is the one who launched  ${count_AUTHOR.length} times software updates `)
            console.log(count_AUTHOR)
        }
        console.log(searchbyauthor('whatsapp'))
        console.log('__________________________________________________________________________________________________________________________')
        console.log("***********************************************************************************************************************")
        console.log('__________________________________________________________________________________________________________________________')
    
        function searchbyversion(version:string){
           var version_FORSOFTWARE=software_UPDATES.filter(n=>n.Version.includes(version))
            console.log(`"the software which having  ${version}version  `)
            console.log(version_FORSOFTWARE)
        }
        console.log(searchbyversion('4.1'))
        console.log('__________________________________________________________________________________________________________________________')
        console.log("*************************************************************************************************************************")
        console.log('__________________________________________________________________________________________________________________________')
        function searchbytype(type:string){
           var type_OFSOFTWARE=software_UPDATES.filter(n=>n.Type.includes(type))
            console.log(`"the software which having  ${type} type  `)
            console.log(type_OFSOFTWARE)
        }
        console.log('__________________________________________________________________________________________________________________________')
        console.log(searchbytype('match enhancement'))
        console.log('__________________________________________________________________________________________________________________________')
        console.log(searchbytype('major'))



    
=======
//     console.log("________________________________________TYPESCRIPT__________________________________________")
//     interface version{
//         name:string,
//         version:string,
//        release_date:string,
//         bugs:string,
//         feature:string,
//         author:string[]|string,
//         type:string
//  }
//  interface bugs{
//         bugID:string,
//         name:string,
//         version:string,
//        release_date:string,
//         bugs:string,
//         feature:string,
//         author:string[]|string,
//         type:string
//  }
 
 
//  const software_UPDATES:version[]=[
//         {
//         name:'spotify',
//         version:'2.1',
//        release_date:'21.12.2021',
//         bugs:"crashing",
//         feature:"karaoke mode",
//         author:["spotify"],
//         type:"major"
    
//     },
//     {      name:'truecaller',
//            version:'3.1',
//            release_date:'28.06.2022',
//            bugs:"UPI bug",
//            feature:"introducing to action calls",
//            author:["truecaller"],
//            type:"major"
    
//     },
//     {
//     name:'netflix',
//     version:'4.1',
//     release_date:'12.09.2022',
//     bugs:"video freeze",
//     feature:"icons get new look",
//     author:["netflix"] ,
//     type:"major"  
//     },
// {
//     name:'whatsapp',
//     version:'4.3',
//     release_date:'25.04.2021',
//     bugs:'voice call error',
//     feature:"admin msg control",
//     author:["Jan Koum"],
//     type:"match enhancement"
// },
// {   name:'whatsapp',
//     version:'4.5',
//     release_date:'07.08.2022',
//     bugs:'crashing',
//     feature:"react over msg",
//     author:["Brian"],
//     type:"match enhancement"
// },
// {   name:'whatsapp',
//     version:'4.7',
//     release_date:'05.10.2022',
//     bugs:'crashing',
//     feature:"more reaction over msg",
//     author:["Brian", "Acton" ,"Jan Koum"],
//     type:"match enhancement"
// }]
// console.table(software_UPDATES)
// const bugs:bugs[]=[
//     {
//         bugID:'101',
//         name:'spotify',
//         version:'2.1',
//        release_date:'21.12.2021',
//         bugs:"crashing",
//         feature:"karaoke mode",
//         author:["spotify"],
//         type:"major"
//     },
//     {bugID:'102',
//         name:'truecaller',
//         version:'3.1',
//         release_date:'28.06.2022',
//         bugs:"UPI bug",
//         feature:"introducing to action calls",
//         author:["truecaller"],
//         type:"major"
//     },
//     {
//         bugID:'103',
//         name:'netflix',
//         version:'4.1',
//         release_date:'12.09.2022',
//         bugs:"video freeze",
//         feature:"icons get new look",
//         author:["netflix"] ,
//         type:"major"
//     },

//     {bugID:'104',
//     name:'whatsapp',
//     version:'4.3',
//     release_date:'25.04.2021',
//     bugs:'voice call error',
//     feature:"admin msg control",
//     author:["Jan Koum"],
//     type:"match enhancement"
//     },

//     {
//      bugID:'105',
//      name:'whatsapp',
//     version:'4.5',
//     release_date:'07.08.2022',
//     bugs:'crashing',
//     feature:"react over msg",
//     author:["Brian"],
//     type:"match enhancement"
//     },

//     {
//         bugID:'106',
//         name:'whatsapp',
//         version:'4.7',
//         release_date:'05.10.2022',
//         bugs:'crashing',
//         feature:"more reaction over msg",
//         author:["Brian", "Acton" ,"Jan Koum"],
//         type:"match enhancement"

//     }
// ]

//     function searchbyyear(year:any){
//    var count_UPDATES=software_UPDATES.filter(n=>n.release_date.toString().includes(year))
//     console.log(`${count_UPDATES.length} "versions came in the year of ${year}`)
//     console.log(count_UPDATES)
//     }
//     searchbyyear(2021)
//     console.log('__________________________________________________________________________________________________________________________')
  

//     function searchbyspecificbug(bugID:any){
//        var count_bug=bugs.filter(n=>n.bugID.includes(bugID))
//         console.log(`"this is the ${bugID} bug occured for the below release `)
//         console.log(count_bug)
//     }
//     searchbyspecificbug('101')
//     console.log('__________________________________________________________________________________________________________________________')
   
//     function searchbyauthor(name:any){
//        var count_AUTHOR=software_UPDATES.filter(n=>n.author.includes(name))
//         console.log(`"${name} is the one who is part of software updates for  ${count_AUTHOR.length} times `)
//         console.log(count_AUTHOR)
//     }
//     searchbyauthor("Jan Koum")

//     console.log('__________________________________________________________________________________________________________________________')
    
//     var authors_OFSOFTWARES=["spotify","truecaller","netflix","Jan Koum","Brian","Brian", "Brian" ,"Jan Koum"]
//     var majorauthor=1;
//     var a=0;
//     for(let i=0;i< authors_OFSOFTWARES.length;i++){
//         for(let j=1;j< authors_OFSOFTWARES.length;j++){
//             if(authors_OFSOFTWARES[i]==authors_OFSOFTWARES[j])
//          a++;
        
//         if(majorauthor<a){
//             majorauthor=a;
//            var author:any= authors_OFSOFTWARES[i]
//         }
//     }
//     a=0;
// }
// console.log(`${author} is the one who is an  major author of performing ,${majorauthor} times`)

//     console.log('__________________________________________________________________________________________________________________________')
   

//     function searchbyversion(version:any){
        
//        var version_FORSOFTWARE=software_UPDATES.filter(n=>n.version.includes(version))
       
//         console.log(`"the software which having  ${version}version  `)
//         console.log(version_FORSOFTWARE)
      
        
//     }

//     searchbyversion('4.1')

//     console.log('__________________________________________________________________________________________________________________________')
   

//     function searchbytype(type:any){
//        var type_OFSOFTWARE=software_UPDATES.filter(n=>n.type.includes(type))
//         console.log(`"the software which having  ${type} type  `)
//         console.log(type_OFSOFTWARE)
//     }
//     console.log('__________________________________________________________________________________________________________________________')
//     searchbytype('match enhancement')
//     console.log('__________________________________________________________________________________________________________________________')
//     searchbytype('major')
>>>>>>> 905b139303d76696c084f96c0c6f67dda179284b
    