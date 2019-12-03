response: document.querySelector('#response')

start(quiz){
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.ask();
}

ask(name){
 if(this.questions.length > 0){
     this.question = this.questions.pop();
     const question = What is $(this.question.name)'s real name?';
     view.render(view.question,question);
 }   
 else{
     this.gameOver();
 }
}

view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);

check(event){
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if(response === answer){
        view.render(view.result, 'Correct!', {'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
    }else{
        view.render(view.result, 'Wrong! The correct answer was $(answer)', {'class':'wrong'});
    }
    view.resetForm();
    this.ask();
},
        
resetForm(){
    this.response.answer.value = '';
    this.response.answer.focus();
}
 teardown(){
     this.hide(this.question);
     this.hide(this.response);
     this.show(this.start);
 }
 
 gameOver(){
     view.render(view.info, 'Game Over, you scored $(this.score) point$(this.score !== 1 ? 's' : '')');
     view.teardown();
 }
