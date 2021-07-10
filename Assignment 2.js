a3 = 0;
a5 = 0;
for(i = 1; i <=100; i++){
  s = ""
  a3++;
  a5++;
  if(a3 === 3){
    s = s + "Fizz";
    a3 = 0;
  }
   if (a5 === 5){
    s = s + "Buzz";
    a5 = 0;
  }
  if(s == ""){
    console.log(i);
  }
  else{
    console.log(s)
  }
}


//palindrone
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