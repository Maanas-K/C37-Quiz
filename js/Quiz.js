class Quiz {
  constructor(){
    this.results = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background ("lightBlue")
    //write code to show a heading for showing the result of Quiz
    this.results.html("Results")
    this.results.position(375,0)

   contestant.getPlayerInfo()

    if(allContestants !== undefined){
      fill ("yellow")
      textSize(20)
      text("**Contestants who answered correctly will be highlighted in green**",130,230)
    }

  

    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("green")
      } else {
        fill ("red")
      }
    }
  }

}
