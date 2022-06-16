const EventHtml = require("./EventHtmlTemplate");
// var html_to_pdf = require('html-pdf-node');

const getEventHtmlPdf = async (eventData) => {
    let events_pdf = await EventHtml.getHtml(eventData);

    let options = { format: 'A4' };

    let file = { content: events_pdf };

    // let pdf_buffer = await html_to_pdf.generatePdf(file, options);
    let base64_file = pdf_buffer.toString('base64');

    return {
        pdf: base64_file
    }

};

const getEventHtmlFile = async (data) => {
    let EventHtmlTemplate = await EventHtml.getHtml(data)
    return {
        EventHtmlTemplate
    }
}

module.exports = {
    getEventHtmlPdf,
    getEventHtmlFile
}