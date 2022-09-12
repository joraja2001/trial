console.log('____________________________________________JAVASCRIPT_______________________________')
software_UPDATES=[
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
console.table(software_UPDATES)

    function searchbyyear(year){
    count_UPDATES=software_UPDATES.filter(n=>n.Release_date.includes(year))
    console.log(`${count_UPDATES.length} "versions came in the year of ${year}`)
    console.log(count_UPDATES)
    }
    searchbyyear('2022')
    console.log('__________________________________________________________________________________________________________________________')
    console.log('***************************************************************************************************************************')
    console.log('__________________________________________________________________________________________________________________________')
    function searchbyauthor(name){
        count_AUTHOR=software_UPDATES.filter(n=>n.Author.includes(name))
        console.log(`"${name} is the one who launched  ${count_AUTHOR.length} times software updates `)
        console.log(count_AUTHOR)
    }
    searchbyauthor('whatsapp')
    console.log('__________________________________________________________________________________________________________________________')
    console.log("***********************************************************************************************************************")
    console.log('__________________________________________________________________________________________________________________________')

    function searchbyversion(version){
        version_FORSOFTWARE=software_UPDATES.filter(n=>n.Version.includes(version))
        console.log(`"the software which having  ${version}version  `)
        console.log(version_FORSOFTWARE)
    }
    searchbyversion('4.1')
    console.log('__________________________________________________________________________________________________________________________')
    console.log("*************************************************************************************************************************")
    console.log('__________________________________________________________________________________________________________________________')
    function searchbytype(type){
        type_OFSOFTWARE=software_UPDATES.filter(n=>n.Type.includes(type))
        console.log(`"the software which having  ${type} type  `)
        console.log(type_OFSOFTWARE)
    }
    console.log('__________________________________________________________________________________________________________________________')
    searchbytype('match enhancement')
    console.log('__________________________________________________________________________________________________________________________')
    searchbytype('major')




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
