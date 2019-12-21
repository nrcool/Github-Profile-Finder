function a(){

   
    
       let  ClientID=
    "YOUR CLIENT ID";
    let ClientSecret="YOUR CLIENT SECRET";
        
            let github=new XMLHttpRequest();
    
            github.onreadystatechange=function(){
    
                    if(github.readyState==4){
                        if((github.status>=200)&&(github.status<400)){

                            var box=document.getElementById('box');
                            var box1=document.getElementById('box1');
                            var box2=document.getElementById('box2');
                            var box3=document.getElementById('box3');
                            var box4=document.getElementById('box4');
                            var box5=document.getElementById('box5');
                            var box6=document.getElementById('box6');
                            var details=document.getElementById('details');
                            details.style.display="flex";

                            var main=document.getElementById('main');
                            main.style.transform="scale(1)";
                            main.style.marginTop="0";
                            main.style.transition="0.5s";

                            var profile=(github.response);
                            var Rd=JSON.parse(profile);
                            console.log(Rd);
                            console.log(Rd.avatar_url);
                            box.src=Rd.avatar_url;

                            console.log(Rd.followers);
                            box1.innerHTML=Rd.bio;
                            console.log(Rd.location);
                            box2.innerHTML=Rd.location;
                            console.log(Rd.email);
                            box3.innerHTML=Rd.email;
                            console.log(Rd.bio);
                            box4.innerHTML=Rd.followers;
                            console.log(Rd.public_repos);
                            box5.innerHTML=Rd.public_repos;
                            console.log(Rd.repos_url);
                            box6.innerHTML=Rd.repos_url;
                           
                       
    
                        }     
                        else{
                            console.log("Error from server")
                        }
                                   }
                               
    
            };
            let user=document.getElementById('user').value;
                     github.open('get',`https://api.github.com/users/${user}?client_id=${ClientID}&client_secret=${ClientSecret}`,true) ;
    
                     github.send();  
    
        }
    