class Validation { // finish this later
	
	static verify(elements, validations) {
		
		
		for(let count_elem = 0; count_elem < elements.length; count_elem++) {
		
			for(let count_val = 0; count_val < validations.length; count_val++) {
			
				switch(validations[count_val]) {
					
					case "required":
					
						if(Validation.isRequired(elements[count_elem])) {
							return false;
						}
						
						break;
						
					case "number":
					
						if(isNaN(elements[count_elem])) {
							return false;
						}
						
						break;
					
				}
			}
		}
		
		return true;
	}
	
	static isRequired(element) {
		return (element == "") ? true : false;
	}
	
	static isNumber(element) {
		return isNaN(elements[count_elem] != true) ? true : false;
	}
}