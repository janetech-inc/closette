const express = require("express");
const sgMail = require('@sendgrid/mail');
const router = express.Router();
const pug = require('pug');
const ordinal = require('ordinal')

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

getFormattedDate = (d) => {
    let date = new Date(d);
    return `${date.toLocaleString('default', { month: 'long' })} ${ordinal(date.getDate())}, ${date.getFullYear()}`;
}

router.post('/send-email', (req, res) => {
    if (!req.isAuthenticated()) return res.redirect("/login");

    let { payload } = req.body;
    let orderNumber = new Date().getTime() + Math.floor(Math.random() * 10);
    let subject = `theCxn | order request #${orderNumber}`
    
    let path = __dirname + "/mailer-templates/purchase-order.pug"
    // TODO get the buyer address information for this order
    const recipient  = payload.user.emails[0].value;
    const html = pug.renderFile(path, {
        firstname: payload.user.displayName,
        email: recipient,
        subject: subject,
        orderNumber: orderNumber,
        products: payload.products,
        orderTotal: payload.orderTotal.orderSubtotal,
        deliveryWindow: getFormattedDate(payload.deliveryWindow),
        orderDate: getFormattedDate(new Date())
    });

    const emailPayload = {
        from: 'orders@cxnfashion.com',
        bcc: 'orders@cxnfashion.com',
        to: recipient,
        subject: subject,
        html: html,
    }

    sgMail.send(emailPayload).then((sent) => {
        res.json({message: 'Order Recieved'})
    }).catch((reason) => {
        res.json({message: 'Failed', error: reason})
    });
})

module.exports = router;