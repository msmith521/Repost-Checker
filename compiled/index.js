'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname));
// app.use(express.static('index.html'))

// app.post('/', function(req, res) {

// })


app.listen(process.env.PORT || 3000);
console.log('Repost Checker running on :3000');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwicGF0aCIsImFwcCIsInVzZSIsInN0YXRpYyIsIl9fZGlybmFtZSIsImxpc3RlbiIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNRSxNQUFNSCxTQUFaOztBQUVBRyxJQUFJQyxHQUFKLENBQVFKLFFBQVFLLE1BQVIsQ0FBZUMsU0FBZixDQUFSO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUlBSCxJQUFJSSxNQUFKLENBQVdDLFFBQVFDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUEvQjtBQUNBQyxRQUFRQyxHQUFSLENBQVksaUNBQVoiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSkpXG4vLyBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCdpbmRleC5odG1sJykpXG5cbi8vIGFwcC5wb3N0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcblxuLy8gfSlcblxuXG5cbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcbmNvbnNvbGUubG9nKCdSZXBvc3QgQ2hlY2tlciBydW5uaW5nIG9uIDozMDAwJyk7Il19