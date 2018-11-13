// warning-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const warning = new Schema({
    adminUUID: { type: String, required: true },
    userUUID: { type: String, required: true },
    reason: { type: String, required: true },
    warnedOn: { type: Date, required: true },
    expiresOn: { type: Date, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('warning', warning);
};
