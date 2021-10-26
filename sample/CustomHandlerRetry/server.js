var http = require('http');
const url = require('url');
const port = process.env.FUNCTIONS_HTTPWORKER_PORT;
console.log("port" + port);
//create a server object:
http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url, true);
  console.log("Request handler random was called.");
  res.writeHead(200, {"Content-Type": "application/json"});
  var json = JSON.stringify({ functionName : req.url.replace("/","")});
  res.end(json);
}).listen(port);

//var retryContext = context.executionContext.retryContext;

//if (retryContext.maxRetryCount != maxRetries || (retryContext.retryCount > 0 && !retryContext.exception.message.includes(errorString))) {
//    debugger;
//    context.res = {
//        status: 500
//    };
//} else {
//    context.log('JavaScript HTTP trigger function processed a request. retryCount: ' + retryContext.retryCount);

//    if (retryContext.retryCount < maxRetries) {
//        throw new Error(errorString);
//    }
//    context.res = {
//        body: 'retryCount: ' + retryContext.retryCount
//    };
//}