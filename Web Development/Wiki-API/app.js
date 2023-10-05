//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');
}
// mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser:true});

const articleSchema=new mongoose.Schema({
    title: String,
    content:String
});

const Article= mongoose.model("Article",articleSchema);

/**************** Requests Targeting all Articles ****************/

app
  .route("/articles")

  .get(async (req, res) => {
    try {
      const foundArticles = await Article.find({});
      res.send(foundArticles);
    } catch (err) {
      res.status(404).json({ error: "Articles 4O4 -->: " + err });
    }
  })

  .post(async (req, res) => {
    try {
      const article = new Article({
        title: req.body.title,
        content: req.body.content,
      });

      const result = await article.save();
      console.log("Article added to DB successfully\n", result);
      res.status(201).send(article);
    } catch (err) {
      res.status(500).json({ error: "Addition failed -->: " + err });
    }
  })

  .delete(async (req, res) => {
    try {
      const result = await Article.deleteMany({});
      console.log("Successfully deleted all articles!(O.O)\n", result);
      res.status(204).json("Successfully deleted all articles!(O.O)");
    } catch (err) {
      res.status(500).json({ error: "Deletion failed -->: " + err });
    }
  });


/************* Requests Targeting A Specific Articles *************/
app.route("/articles/:articleTitle")
  .get(async (req, res) => {
    const foundArticle = await Article.findOne({title: req.params.articleTitle});
    res.send(foundArticle);
  })
  .put(async (req, res) => {
    const updatedArticle = await Article.replaceOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content});
    res.send(updatedArticle);
  })

  .patch(async (req, res) => {
        Article.findOneAndUpdate(
            { title: req.params.articleTitle },
            { $set: req.body })
            .then(res.send("Successfully updated article."))
            .catch(err => {
                res.send(err)
            });
    })

    .delete(function (req, res) {
        Article.deleteOne({ title: req.params.articleTitle})
        .then(function () {
        res.send("successfully deleted an article!");
      })
    });


app.listen(3000, function() {
  console.log("Server started on port 3000");
});

// app.get("/articles", function(req, res){
//     Article.find().then(function(result){
//         res.send(result)
//     }).catch(function(err){
//         console.log(err);
//     })
// });
