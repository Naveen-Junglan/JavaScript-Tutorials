//Nested Scope- also known closure

function One(){
	const username = "Naveen"

	function Two(){
		const sirname = "Singh"
		console.log(username)
	}
	Two()
}
One()