import countapi from "countapi-js";
// countapi.visits().then((result) => {
// 	console.log(result);
// });

countapi
	.set("lenstudio.com", "0aa8524b-a4f6-41a7-8043-ea923f7d2a68", 24)
	.then((result) => console.log(result));
