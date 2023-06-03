const AWS = require('aws-sdk');
const axios = require('axios');
const stream = require('stream');
const path = require('path');
const url = require('url');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    console.log("EVENT:", event)
    let body = JSON.parse(event.body);
    const imageUrl = body.image_url;
    
    console.log("Received image url", imageUrl)
    const bucketName = 'mira-webapp-storage142735-staging';

    // Extract the filename from the URL
    const parsedUrl = new URL(imageUrl);
    const filename = path.basename(parsedUrl.pathname);
    console.log("Filename", filename)

    // Get the image data
    try {
        const response = await axios({
            method: 'get',
            url: imageUrl,
            responseType: 'stream'
        });
        console.log("Response is", response)
        const pass = new stream.PassThrough();
        const params = {
            Bucket: bucketName,
            Key: `public/${filename}`,
            Body: pass,
            ContentType: 'image/png'  // replace with the actual content type of your images
        };

        response.data.pipe(pass);

        // Upload the image to S3
        const result = await s3.upload(params).promise();
        const respond = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Image uploaded successfully!',
                s3Object: result
            })
        };
        console.log("Returned", respond)
        return respond;
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error processing request!',
                error: err.message // returning just the error message for simplicity
            })
        };
    }
};

