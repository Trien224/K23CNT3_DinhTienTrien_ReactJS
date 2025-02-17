import React from 'react'

export default function DttJsxExpression() {
    //var
    const name="Dinh tien trien";
    //var tuong
    const user={
        firstName:"Trum",
        lastName:"Trien"
    }
    //hamf
    const fullName=(user)=>{
     return user.firstName +''+ user.lastName;
   }

     //tuong
     const element =(
        <div>
         {/* bt jsx  */}
        <h2>{fullName(user)}</h2>
        <hr/>
        <h3>Xin chao,{name}</h3>
        </div>
     );
     //hamf
     
     const sayWelcome =(name)=>{
      if(name){
         return <h3>sayWelcome to {name}</h3>
      }else{
         return<h3>Bye {name} !</h3>
      }
     }
     return(
        <div>
           <h1>Dtt- get first </h1>
        {/* use element */}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("My web")}
      </div>
     )
}
