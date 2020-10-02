const animal = require("./models/animal");

const express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Quest    = require("./models/quest"),
    Idea       = require("./models/idea"),
    Feedback       = require("./models/feedback"),
    functions    = require("./middleware/functions"),
    Animal       = require("./models/animal");
    Dailie       = require("./models/dailie");


mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));

app.get("/", function(req,res){
    res.render("office");  
});

// Dailies Setup

app.get("/dailies", function(req,res){
    Dailie.find({}, function(err, allDailies){
        if(err){
            console.log(err);
        } else {
            res.render("dailies/index", {dailies: allDailies});
        }
    });
});

app.get("/dailies/new", function(req, res){
    res.render("dailies/new");
});

app.get("/dailies/:index", function(req, res){
    Dailie.find({index:req.params.index}, function(err, foundDailie){
        if(foundDailie.length > 0){
            if(err){
                console.log(err);
            } else {
                // cambiar el show segun el index del dailie. Si es menor a 96, se muestra el show1
                if( foundDailie[0].index < 96 ) {
                    res.render("dailies/show", {dailie:foundDailie[0]});
                } else if ( foundDailie[0].index >= 96 ){
                    res.render("dailies/show", {dailie:foundDailie[0]});
                }; 
            }
        } else {
            res.redirect("/dailies");
        }
    });
});

app.post("/dailies", function(req, res){
    pass = req.body.password;
    if (pass === "marisol"){
        var index = req.body.index;
        var date = req.body.date;
        var gitcommit = req.body.gitcommit;
        var description = req.body.description;
        var feeling = req.body.feeling;
        var newDailie = {index:index, date:date, gitcommit:gitcommit, description:description, feeling:feeling};
        Dailie.create(newDailie, function(err, newlyDailie){
           if(err){
               console.log(err);
           } else {
               res.redirect("dailies");
           }
        });
    }
    else {
        res.redirect("dailies");
    }

});

// Feedback Setup

app.get("/feedback", function(req,res){
    Feedback.find({}, function(err, allFeedback){
        if(err){
            console.log(err);
        } else {
            res.render("feedback/index", {feedback: allFeedback});
        }
    });
});

app.get("/feedback/new", function(req, res){
    res.render("feedback/new");
});

app.post("/feedback", function(req, res){
    var name = req.body.name;
    var date = req.body.date;
    var feedback = req.body.feedback;
    var email = req.body.email;
    var description = req.body.description;
    var recommendation = req.body.recommendation;
    var newFeedback = {name:name, date:date, feedback:feedback, email:email, recommendation:recommendation};
    Feedback.create(newFeedback, function(err, newlyFeedback){
        if(err){
            console.log(err);
        } else {
            res.redirect("feedback");
        }
    });
});

app.get("/feedback/:id", function(req, res){
    Feedback.findById(req.params.id, function(err, foundFeedback){
        if(err){
            console.log(err);
        } else {
            res.render("feedback/show", {feedback:foundFeedback});
        }
    });
});

// Quests Setup

app.get("/quests", function(req,res){
    Quest.find({}, function(err, allQuests){
        if(err){
            console.log(err);
        } else {
            res.render("quests/index", {quests: allQuests});
        }
    });
});

app.get("/quests/new", function(req, res){
    res.render("quests/new");
});

app.post("/quests", function(req, res){
    pass = req.body.password;
    if (pass === "marisol"){
        var name = req.body.name;
        var description = req.body.description;
        var date = req.body.date;
        var how = req.body.how;
        var functionality = req.body.functionality;
        var newQuest = {name:name, description:description, date:date, how:how, functionality:functionality};
        Quest.create(newQuest, function(err, newlyQuest){
            if(err){
                console.log(err);
            } else {
                res.redirect("quests");
            }
        });
    }
    else {
        res.redirect("quests");
    }
});

app.get("/quests/:id", function(req, res){
    Quest.findById(req.params.id, function(err, foundQuest){
        if(err){
            console.log(err);
        } else {
            res.render("quests/show", {quest:foundQuest});
        }
    });
});

// Ideas Setup

app.get("/ideas", function(req,res){
    Idea.find({}, function(err, allIdeas){
        if(err){
            console.log(err);
        } else {
            res.render("ideas/index", {ideas: allIdeas});
        }
    });
});

app.get("/ideas/new", function(req, res){
    res.render("ideas/new");
});

app.post("/ideas", function(req, res){
        var name = req.body.name;
        var date = req.body.date;
        var description = req.body.description;
        var why = req.body.why;
        var who = req.body.who;
        var value = req.body.value;
        var scale = req.body.scale;
        var addedBy = req.body.addedBy;
        var newIdea = {date:date, name:name, description:description, why:why, who:who, value:value, scale:scale, addedBy:addedBy};
        Idea.create(newIdea, function(err, newlyIdea){
            if(err){
                console.log(err);
            } else {
                res.redirect("ideas");
            }
        });
});

app.get("/ideas/:id", function(req, res){
    Idea.findById(req.params.id, function(err, foundIdea){
        if(err){
            console.log(err);
        } else {
            res.render("ideas/show", {idea:foundIdea});
        }
    });
});

// Rest of the Setup

app.get("/introduction1", function(req,res){
    res.render("introduction1");
});

app.get("/introduction2", function(req,res){
    res.render("introduction2");
});

app.get("/introduction3", function(req,res){
    res.render("introduction3");
});

app.get("/introduction4", function(req,res){
    res.render("introduction4");
});

app.get("/100dayChallenge", function(req,res){
    res.render("100dayChallenge");
});

//Sandbox Setup - Just for trying out new stuff

app.get("/sandbox", (req,res) => {
    let existingAnimals = functions.getAnimals();
    existingAnimals
    .then(animals =>{
        let randomNumber = functions.randomNumber();
        // render = () => {
        //     console.log("aloja");
        // }
        // setInterval(render, 2000);
        res.render("sandbox", {animals:animals.foundAnimals, magicalAnimal:animals.randomAnimal, randomNumber: randomNumber});
    });
});


app.post("/sandbox", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newAnimal = {name:name, image:image};
    Animal.create(newAnimal, function(err, newlyAnimal){
        if(err){
            console.log(err);
        } else {
            res.redirect("sandbox");
        }
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("The Office is ON!");
});