//console.log("Hello world")
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ShopNexa</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@500&family=Nunito:wght@500&display=swap" rel="stylesheet">
  
      <style>
          body{
              overflow-x: hidden;
              
              
          }
          .navbar{
  
  border: 1px solid;
  position: sticky;
  top: 0.3px;
  height: 70px;
  border: 2px solid white;
  background-color: white;
  box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  }
  .navbar ul{
  overflow: auto;
  }
  .navbar li{
  float: left;
  list-style: none;
  padding: 10px 80px;
  color: orange;
  height: 30px;
  
  }
  .navbar li a{
  text-decoration: none;
  color: rgb(14, 9, 1);
  font-size: 18px;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  }
  .navbar li a:hover{
      color: orange;
  }
  .search{
  float: right;
  padding:0px 31px;
  border-color: gray;
  }
  .navbar input{
  border-radius: 20px;
  border: 1px solid;
  }
  input[type=text]{
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              border-color: darkgrey;
              outline: darkgrey;
  }
  .container{
      display: flex;
  }
  .service{
      width: 220px;
      height: 240px;
      border: 2px solid white;
      border-radius: 20px;
      box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.3);
      padding: 10px;
      margin: 90px;
      text-align: center;
      transition: all 1s ease-in-out;
  }
  .service:hover{
      transform: scale(1.1);
      background-color: whitesmoke;
      border-color: orange;
  }
  #photo1{
      background-image: url('Fast.png');
      background-repeat: no-repeat;
      background-size: 230px;
  
  }
  #photo2{
      background-image: url('Availible.png');
      background-repeat: no-repeat;
      background-size: 230px;
  }
  #percentage{
      font-size: 50px;
      font-family: Arial, Helvetica, sans-serif;
      color: blue;
      border: 5px solid orange;
      border-radius: 100px;
  }
  #text{
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      color: orange;
  }
  #text1{
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      color: blue;
  }
  .text2{
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      color: blue;
  }
  .head{
      animation-name: text;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      margin-left: 520px;
      transition: all 0.1s ease-in-out;
      font-family:  sans-serif;
      color: orange;
      border: 2px solid orange;
      width: 223px;
      border-radius: 20px;
      padding: 2px;
      background-color: blue;
      box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.3);
      text-shadow:0px 5px 5px orange ;
  
  }
  .father{
      display: flex;
  }
  .contain{
      width: 200px;
      height: 200px;
      background-image: url('shop.png');
      background-repeat: no-repeat;
      background-size: 300px;
      background-position: center;
  }
  .contain1{
      width: 200px;
      height: 200px;
      background-image: url('present-150291_640.png');
      background-repeat: no-repeat;
      background-size: 130px;
      background-position: center;
      animation-name: left;
      animation-duration: 6s;
      animation-iteration-count: infinite;
      transition: all 2s ease-in-out;
  }
  @keyframes left{
      from{
  
      }
      to{
         float: right;
      }
  }
  .contain2{
      width: 200px;
      height: 200px;
      background-image: url('icon-1633249_640.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100px;
      margin-left: 700px;
  }*
  
  
      </style>
  </head>
  <body>
      <div class="navbar" id="box1"> 
          <nav class="navbar">
            <ul>
              <li><a href="Hub.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="Services.html">Services</a></li>
              <li><a href="contact.html">Contact</a></li>
              <div class="search"><input type="text" name="search" id="search" placeholder="Search" style="padding: 10px;"></div>
            </ul>
          </nav>
          <br>
      <div class="container">
          <p class="service" id="photo1"><br><br><br><br><br><br><br><br><span id="text">Instant and fast delievery to your doorstep in the click of a single button.</span></p>
          <p class="service" id="photo2"><br><br><br><br><br><br><br><br><br><span id="text1">Every product availible ranging from botany to HouseWare.</p></span>
          <p class="service" id="photo3"><br><br><br><span id='percentage'>100%</span><br><br><br><br><span class="text2">100% guaranteed safe and perfect delievery.</span></p>
      </div>
  </body>
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});