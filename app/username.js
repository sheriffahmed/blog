auth(username, function(isTrue, data){})

function auth(username, callback){
	if(username){
		callback(true, "Cool Username");
	}
}

auth(username)