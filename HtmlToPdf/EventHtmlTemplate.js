function getHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new event details</title>
    </head>
    <body>
        <h1>${data.event_name}</h1>
        <h1>>${data.event_address}</h1>
        <h1>${data.description}</h1>
    </body>
    </html>`
}

module.exports = {
    getHtml
}