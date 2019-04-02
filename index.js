const express = require("express");
const path = require("path");
const Liquid = require('liquidjs');
const engine = new Liquid();

const app = express();


app.engine('liquid', engine.express()); 
app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'liquid');
app.get("/today", (req, res) => {

    let today = new Date();
    res.render("show_date", {now: today});
});// let users = ({ name: "Syavira", age: 21 }, { name: "Aulia", age: 21 }, { name: "Dara", age: 21 });
    // let size = 3;
    // res.render ("show_date",{users:users});
    // var page = ('#member');
    // var pageTemplate = page.html();
app.get("/member", (req, res) => {
    
    let memberData = 
    {
      
        columns : [
        	{
          label : "name",
          width : "150px"
          },
          {
          label : "id",
          width : "100px"
          },
          {
          label : "grade",
          width : "100px",
          before :  {
              type : "bar",
              limit : 4
          	}
          }
        ],
        
        data: [
            {
                name: "Syavira",
                id: "012",
                grade: 4,
                background : "blue",
                color : "white"
            },
            {
               name: "Aulia",
                id: "012",
                grade: 4,
                background : "yellow",
                color : "black"
            },
            {
                name: "Dara",
                id: "707",
                grade: 4,
                background : "orange",
                color : "black"
            }
        ]
    }
;
	res.render("member", memberData);

});

app.use((req, res) => {
    res.statusCode = 404;
    res.end("404 - page not found");
});

app.listen(3000, () => {

    console.log("Application started on port 3000");
})