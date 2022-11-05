
import { Prova1 } from './prove/Prova1';
import './style.css';

const appDiv = document.getElementById('app') as HTMLElement;
//const appDiv = document.getElementById('app') as HTMLElement;
appDiv.innerHTML = `<h1>TypeScript here...</h1>`;

Prova1.test1();

/*

 interface People {
  name: string, 
  height: number, 
  mass: number, 
  hair_color: string 
 }



const people= async () : Promise<People> => {
  
  const data = await fetch("https://swapi.dev/api/people/1").then ((res) => {
      
  return res.json();

})

  return data as People;
  
}

let luke = people();

*/


/*


interface Utente {
  id: number,
  nome: string,
  //posts: Post[]
  posts: Array<Post>   
}

interface Post {
  title: string
}

const posts: Array<Post> = [
  {title: "1"},
  {title: "2"}]

let rob: Utente = {

  id:1,
  nome: 'rob',
  posts : posts

}


const makeUtente = () : Utente => {
  return {
    id: 1,
    nome: "pippo",
    posts: posts
  }
}

const utente = makeUtente();

console.log(utente.id)






const fun1 = (a: number,b: number) => {
  return a + b;
} 

//@ts-expect-error
console.log(fun1(1,"2"));


const fun2 = (params: {first: string, last?: string}) => {
  if (params.last) {
    return `${params.last} ${params.first}`;
  }

  return params.first;
}
//console.log (fun2({first: 'first'}));


enum Role { admin, user }
type RoleType = "admin" | "user"

interface User {
  id: number,
  name: string
  role: RoleType
}
let pippo: User = {
  id: 1,
  name: "",
  role: "admin"
}
const getUserId = (user: User) => {
  return user.id;
}
//getUserId(pippo);
*/