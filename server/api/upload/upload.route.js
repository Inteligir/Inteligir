const AWS = require('aws-sdk');
const boom = require('boom');
const uuid = require('uuid/v1');
const requireLogin = require('middlewares/requireLogin');
const keys = require('config/keys');

const s3 = new AWS.S3({
  accessKeyId: keys.awsAccessKeyId,
  secretAccessKey: keys.awsSecretAccessKey,
});

module.exports = (app) => {
  app.get('/api/upload', requireLogin, (req, res) => {
    const key = `${req.user.id}/${uuid()}.jpeg`;

    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'inteligir-dev-bucket',
        ContentType: 'image/jpeg',
        Key: key,
      },
      (err, url) => {
        if (err) return res.sendError(boom.badRequest(err));
        return res.sendSuccess({ key, url });
      },
    );
  });
};