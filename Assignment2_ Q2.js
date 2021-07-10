s = "madam is walking with her dad and mom"; 
s = s + " "
word = ""
revword = ""
for(k of s){
  if(k != " "){
    word=word+k;
    revword = k + revword;
  }
  else{
    if(word == revword){
      console.log(word);
    }
     //console.log(revword);
    
    word = "";
    revword = "";
}
}