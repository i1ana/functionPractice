var string = potato
letterCapitalize = function(string) {
  string.charAt(0).toUpperCase +string.substring(1); 
  return string; 
}

wordCount = function(string) {
return string.split(" ").length; 

}

primeTime = function(num){
for (i = 1; i < 65536; i++){
	if(num % i === 0){
		return false; 
	} else { return true
	}
	
}