# hello :raised_hand: This is Catherine <br> Here we are going to learn the basics of 
<ol>
<li>node-auth-Guard</li>
</ol>
Hope you like :+1: and understand this :stuck_out_tongue_winking_eye:,


# 	INTRO TO node-auth-Guard:
#### node-auth-Guard makes use of CanActivate interface and it checks for if the user is logged in or not. If it returns true, then the execution for the requested route will continue, and if it returns false, then the requested route will be kicked off and the default route will be shown..
Now we can consider an example of an <b>Movie streaming platform</b> like Amazon prime, Netflix, Hotstar..etc thats works with auth guard .

:key: In the example,the user should subscribe or recharge the account to get access to the homepage,

:key: Then the user should be above the age of  18 to watch certain movies or shows.
## How to get started with node-auth-Guard:
  **Step1 :** You need to install express and node-auth-guard in your node as it is not a core module.
   
   > npm i express@4.16.4 <br>
   > npm i node-auth-guard@2.4.0 <br>
 
:pill: Now the version 4.16.4 of express and 2.4.0 version of node-auth-guard  is installed in node.js<br>
**step2 :** Then , Code your program as <br>

 ````` 
 const express=require(‘express’)
let authGuard = require('node-auth-guard');
let app = express();
 
app.use((req, res, next) => {
 
    
    req.user ={
        subscriber:{
            name:'joseph',
            surname:'kennedy',
            age:16,
            subscription:true

        }
    }
    next();
});
 

app.use(authGuard.initialize({
    principalPath: 'user.subscriber',
}));
 

app.get('/home',
    authGuard.rule(
        (req, res, next) => {
            if (req.user.subscriber.subscription === true) {
                return next()
            }else {
                return next(new Error('Please kindly recharge your account,now'));
            }
 
        }
    ),
    (req, res, next) => {
        res.end('<h1> hello   '+req.user.subscriber.name+ '</h1><br><h2>welcome back!</h2>');
    }
);
 

app.get('/movie',
    authGuard.rule(
        (req, res, next) => {
            if (req.user.subscriber.age >= 18) {
            return next()
        }else {
            return next(new Error(' hi  '+req.user.subscriber.name+ ' you are not advised to watch it!'));
        }},
       
        
    ),
    (req, res, next) => {
        res.end('watch movie');
    }
);
 
app.listen(4000);
 `````
   **Step3 :** Now go to  the browser and enter the URL
>http://localhost:4000/home <br>
>http://localhost:4000/movie <br>
   to see your output.
   
   ## you have made ..thumbs up:trophy:  congrats :raised_hands:

 ## :memo: Explanation :
 * To get to know more about express [click me](https://github.com/catherinekennedy/catherine_WD_node.js/blob/main/catherine_WD_express.md)
* Now define a user  with following properties such as name, surname, age and subscribtion.
* Then initialize the user.
* With the help of express.js create a localhost server \home and \movie
* In http://localhost:4000/home
     it checks whether the user has subscribed or not . If not, it throws an error or else it shows the following output: <br> 
### THUS THE FINAL OUTPUT::point_down:
<img src="https://github.com/catherinekennedy/images/blob/main/home%20.png" >

* In http://localhost:4000/movie
    it checks whether the user is above 18. If yes, it shows the output  or else it shows the following error: <br> 
    
### THUS THE FINAL OUTPUT::point_down:
<img src="https://github.com/catherinekennedy/images/blob/main/ErrorGoogle%20Chrome%20.png" >

### :computer: Thus if you like follow me on  :computer:<br>

 <a href="https://www.linkedin.com/in/catherine-robin-kennedy"><img width="100px" height="100px" src="https://github.com/catherinekennedy/images/blob/main/linkedin.png"></a>
<a href="https://www.instagram.com/cather_ine_kenny"><img  height="100px" src="https://github.com/catherinekennedy/images/blob/main/insta.jpg"></a>
 <a href="https://github.com/catherinekennedy"><img  height="100px" src="https://github.com/catherinekennedy/images/blob/main/github.png"></a>


 
