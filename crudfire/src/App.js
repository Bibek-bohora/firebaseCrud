import React,{useState} from 'react';
import {database,ref,set,update,onValue} from "./config/Firebase.js"

const App = () => {

 


  const [input, setinput] = useState({});

  const [show,setshow]= useState();
  const [userinfo, setuserinfo] = useState([]);


  const handlechange =(e) => {

    console.log(e.target.value);

    // let {name,value} =e.target;

    // setinput((ump)=>{

    //   return {...ump,[name]:value, }
    // })
    setinput({...input,[e.target.name]:e.target.value,})
   
  }


 ////////////////////////////////////////////////////////////////////////////////////////////////////
        ///// insert
  //     ////////////////////////////////////////////////////////////////////////////////////////////////////
   const insert=() => {
    setinput("");
    setshow("inserting.....")
     
    set(ref(database, 'users/' + Date.now()), {
     ...input
    }).then((responae)=>{

      if(responae){

       setshow("data no insert in the db") 


        
      }
      
      else{

        setshow("sucesss insert in db");
        console.log("sucess")
      }
    });
 
   }
    
    

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///// update 
   ////////////////////////////////////////////////////////////////////////////////////////////////////
    

  //  const updatee=() => {
    
   
   
  //  console.log("click to updata")
    
      
  //   update(ref(database, 'users/' + input.userID), {
  //     ...input
  //    }).then((responae)=>{
 
  //      if(responae){
 
  //       setshow("data no insert in the db") 
 
 
         
  //      }
       
  //      else{
 
  //        setshow("sucesss insert in db");
  //        console.log("sucess")
  //      }
  //    });

  //   }


  


  /////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///// delete
   ////////////////////////////////////////////////////////////////////////////////////////////////////
   
  //  const deleteda=() => {


  //  console.log("delete data")
    
      
  //   set(ref(database, 'users/' + input.userID),null).then((responae)=>{
 
  //      if(responae){
 
  //       setshow("data no delete in the db") 
 
 
         
  //      }
       
  //      else{
 
  //        setshow("sucesss delete in db");
  //        console.log("sucess")
  //      }
  //    });

  //   }


    


  /////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///// fectch
   ////////////////////////////////////////////////////////////////////////////////////////////////////////
//     const fetchfun =() => {

//       console.log("click to fetch")

//       setshow("fetching ......")
      

//       onValue(ref(database,"users"),(snapshot)=>{


//             if(snapshot){
//               let _data=[];
//               let userlist=snapshot.val();

//               for(let i in userlist){

//                 _data.push(userlist[i])
//               }


//               setuserinfo(_data)
             
              
//             }else{

//               setshow("not fetching ......")
//             }

           


//       })



// }



  return <div>

    <h1>this is me avatar</h1>

    <form action="" autoComplete='off'   onSubmit={(p)=>{

p.preventDefault();
insert();
// updatee();
  //  deleteda();
  //  fetchfun();

}}>
      {/* <input type="number" name='userID' placeholder='userId' onChange={handlechange} /> */}
      <input type="text" name='fname' placeholder='full name' onChange={handlechange}  />
      <input type="text" name='address' placeholder='Address' onChange={handlechange} /> 
      
      <button type='submit'>insert user</button>
      {/* <button type='submit'>updata</button> */}

      {/* <button type='submit'>Delete</button> */}
      {/* <button type='submit'>fetch button</button> */}
 
 


      <h1>{input.fname}</h1>
      <h1>{input.address}</h1>
    </form>


    
       <div className="suggest">

         <h1>{show}</h1>
       </div>

       <div className="useinfo">

         {userinfo.map((bug,index)=>{

           return <div key={index} style={{
              padding: "20px",
              border: "1px dashed blue",
              marginTop: "12px",
            }}>

                   {bug.fname} <br />
                    {bug.address} <br />
           </div>
         })}
       </div>
  </div>;
};

export default App;
