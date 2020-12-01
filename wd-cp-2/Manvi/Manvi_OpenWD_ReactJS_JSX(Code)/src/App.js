import React from 'react';

class App extends React.Component {
   render() {

    /* Inline Style object*/ 
      let inlineStyle = {
         color : "#db3b61",
         fontSize : "25 px"
      }
      return (
         <div className="box">
            <h2 className="heading" style = {inlineStyle}> Welcome  </h2>
            {/* Inline style is embedded in h1 element */ }
         </div>

         /* The above code can be achieved without using JSX.  You can comment-in the above code and then comment-out the code given below, you will see the same result*/
       

            //  React.createElement('div', { className : "box" }, React.createElement('h1', { className : "heading" ,style : {inlineStyle}}, "Welcome"))  
 
      );
   }
}
export default App;