global.pdfParse = {};
  const fs = require ('fs') //Acces file system
  const pdfParse = require ('pdf-parse') //Parsing ('pdf-parse' is in folder "node_modules")
  const pdfFile = fs.readFileSync('Modele.pdf') //Read PDF file

pdfParse(pdfFile).then(function(data){
  console.log(data.numpages) //Recover number of page
  console.log(data.info) //Recover info
  console.log(data.text) //Recover text
})