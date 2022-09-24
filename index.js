
import express from 'express';

const server = express();

const port= 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));



server.get('/startTest', (req, res)=>{

    var inpTestID = req.query.testID;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head> <meta charset="utf-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta content="width=device-width, initial-scale=1" name="viewport" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" /> <title>Index</title> <!-- CSS only --> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" /> <!-- JavaScript Bundle with Popper --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous" ></script> <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" ></script> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script> <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" /> <style> body { width: 100%; padding: 20px; } .info-content { height: auto; width: 100%; margin-bottom: 10px; } .test-content { height: auto; width: 100%; margin-top: 10px; margin-bottom: 10px; } .timer { text-align: end; font-weight: bold; color: red; } .topic-name { font-weight: bold; } .question_img { width: 100%; text-align: center; margin-bottom: 10px; height: auto; } .question-frame { padding: 10px; border: 1px solid rgb(168, 168, 168); border-radius: 5px; margin-bottom: 20px; } .form-check-label { font-weight: bold; font-size: 18px; } .btn-outline-success { margin-top: 10px; } .sel-ans { padding: 10px; border: 1px solid rgb(51, 255, 0); background-color: rgb(237, 255, 226); } .correct-ans { padding: 10px; border: 1px solid rgb(0, 17, 255); background-color: rgb(226, 227, 255); } </style> </head>');
    res.write('<body>');


   
    res.write('<div class="info-content"> <div class="test-content"> <div class="sub-content" id="question-list"></div> </div> </div>');
    
    res.write('<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>');
    res.write('<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-storage.js"></script>');
    res.write('<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-database.js"></script>');
    res.write('<script>');
    res.write('var testID = "'+inpTestID+'"; $("#question-list").find("div").html("");');
    res.write('</script>')
    res.write('<script src="https://chethanckm.github.io/MCQ-Practice-Test/js/bck.js"></script>');
    res.write('</body>');
    res.end();
    });

server.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running at ${port}`)
});