class StringEasy {
	
	static format(expression){
		
		if(arguments.length === 0){
			throw new Error();
		}
		
		let count = 1;
		let str = "";

		while(count < arguments.length){
			expression = expression.replace("%s", arguments[count]);
			count++;
		}
		
		return expression;
	}	
}
