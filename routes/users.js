var express = require('express');
var router = express.Router();
const PDFDocument = require('pdfkit')

/* GET users listing. */
router.get('/test', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
    id:1,
    name:"rohit"
  },
  {
    id:2,
    name:"mohit"
  }]);
});


router.get('/pdf', (req, res, next) => {
  const doc = new PDFDocument()
  let filename = "test"
  // Stripping special characters
  filename = encodeURIComponent(filename) + '.pdf'
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')
  const content = "abcd content"

  doc.moveTo(50,50)
    .lineTo(800,50)
    .stroke()


  doc.text(content, 50, 50)
  doc.pipe(res)
  doc.end()
})

module.exports = router;
