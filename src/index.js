module.exports = function zeros(expression) {

 let zeros = 0;
 let repository = 0;
 let flag = false;
 let array = expression.split('*');
 
 for(let i = 0;i < array.length;i++)
 {
	let exclamations = null;
	
	var subArr = array[i].split('');
	for(let j = 0; j < subArr.length; j++)
	{
		if(subArr[j] === '!')
		{
			exclamations++;
		}
	}
	let factorial = parseInt(array[i]);
	if(exclamations === 1)
		{
			countOneExclamation(factorial);
		} else 
			{
				countTwoExclamations(factorial);
			}
	}
	 if(repository!==0 && flag == true)
	 {
		zeros+=repository;
	}
	return zeros;
	function countOneExclamation(factorial)
	{
		 flag = true;
		zeros+=(Math.floor(factorial / 5)+Math.floor(factorial / 25));	
	}
	
	function countTwoExclamations(factorial)
	{
		if(factorial%2 == 0)
		{
			 flag = true;
			zeros+=(Math.floor(factorial / 10) + Math.floor(factorial / 50));
		} else 
			{
				if(factorial >= 95)
				{
					repository+=12;
				}else if(factorial >= 85 && factorial < 95)
				{
						repository+=11;
					}else  if(factorial >=75 && factorial < 85)
					{
							repository+=10;
					}else if(factorial >= 65 && factorial < 75)
						{
							repository+=8;
						}else if(factorial >= 55 && factorial < 65)
							{
								repository+=7;
							}else if(factorial >=45 && factorial < 55)
								{
									repository+=6;
								}else if(factorial >= 35 && factorial < 45)
									{
										repository+=5;
									}else if(factorial >= 25 &&factorial < 35)
										{
											repository+=4;
										}else if(factorial >= 15 && factorial < 25)
											{
												repository+=2;
											}else if(factorial >= 5 && factorial < 15)
												{
													repository++;
												}
					
		}
		
	}
 }
 

