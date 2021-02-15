import {NextApiRequest, NextApiResponse} from 'next'

const mailjet = require('node-mailjet').connect(
	process.env.MAILJET_API_KEY,
	process.env.MAILJET_SECRET_KEY
)

const mail = (req: NextApiRequest, res: NextApiResponse): void => {
	let status = 200
	let body = ''
	if (req.method === 'POST') {
		const {name, email, subject, message, timestamp} = JSON.parse(req.body)
		const request = mailjet.post('send', {version: 'v3.1'}).request({
			Messages: [
				{
					From: {
						Email: 'mail@brennanwal.sh',
						Name: 'Brennan Walsh'
					},
					To: [
						{
							Email: 'mail@brennanwal.sh',
							Name: 'Brennan Walsh'
						}
					],
					Subject: `New message from ${name} (${email}) via brennanwal.sh contact form.`,
					HTMLPart: template(name, email, subject, message, timestamp)
				}
			]
		})
		request
			.then(result => {
				status = 200
				body = result.body
			})
			.catch(err => {
				return {status: err.statusCode, body: err.body}
			})

		return res.status(status).json(body)
	}
}

const template = (name, email, subject, message, timestamp) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    
    @import url('https://fonts.googleapis.com/css?family=Assistant');
    html {
      background: #eee;
    }
    
    body {
      font-family: "Assistant", sans-serif;
      margin: 0px; 
      padding: 0px; 
      width: 100%;
      line-height: 1.25;
    }
    #header {
      width: 100%; 
      padding: 0px 0px; 
      background: #313939;
      margin-bottom: 0px;
      position: relative;
      z-index: 10;
      box-shadow: 0px 0px 3px rgba(0,0,0,0.3) inset;
      display: flex;
      justify-content: center;
      align-items: stretch;
    }
    #header > a {
      display: flex;
      padding: 1.25rem 1.5rem;
      align-items: center;
      justify-content: center;
    }
    .logo {
      max-height: 2.75em;
      height: 1.35rem;
      margin-top: 3px;
    }
    .title {
      width: 100%;
      text-align: center;
      background: linear-gradient(to right, #269e4a, #84b54d); 
      color: #fff;
      padding: 30px 0px;
      margin-top: 0px;
      margin-bottom: 0px;
      font-weight: 400;
      box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
    }
    #main > div {
      padding: 20px 30px;
      color: #555; 
      font-size: 16px;
    }
    footer {
      text-align: center;
      width: 100%; 
      padding-top: 5px; 
      padding-bottom: 5px; 
      background: #313939; 
      box-shadow: 0px -2px 3px rgba(0,0,0,0.3);
    }
    footer > p {
      color: #999; 
      font-size: 14px;
    }
    a {
      color: #269e4a;
      text-decoration: none;
    }
    i {
      color: #999;
    }
    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border-width: 0;
      border-top: 1px solid #ddd;
    }
    th {
      text-align: left;
      font-weight: 400;
      background: #fafafa;
    }
    td {
      text-align: center;
      background: #f7f7f7;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
    }
    table, tr {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }
  </style>
</head>
<body>
  <header id="header">
    <a href="https://brennanwal.sh">
      <img src="http://localhost:3000/images/interface/logo.png" alt="Brennan Walsh" class="logo">
    </a>
  </header>
  <main id="main">
    <h2 class="title">brennanwal.sh Contact Form Submission</h2>
    <div>
    <table>
    <tr>
      <th>Name</th>
      <td>${name}</td>
    </tr>
    <tr>
      <th>Email</th>
      <td>${email}</td>
    </tr>
    <tr>
      <th>Subject</th>
      <td>${subject}</td>
    </tr>
    <tr>
      <th>Message</th>
      <td>${message}</td>
    </tr>
    <tr>
      <th>Time Recieved</th>
      <td>${new Date(timestamp as string).toUTCString()}</td>
    </tr>
  </table>
  <hr>
    </div>
  </main>
  <footer>
    <p>© ${new Date().getFullYear()} • brennanwal.sh</p>
  </footer>
</body>
</html>
`

export default mail
