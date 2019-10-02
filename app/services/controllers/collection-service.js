// controllers/collections-controller.js

// Import the Collections model.
const Collection =  require('../models/collection-model');

exports.getAllCollections = async (req, res) => {
  try {
    let payload = await Collection.get_all();
    let payloadJson = JSON.stringify(payload);
    res.send(payloadJson);
  } catch(exception) {
    // not fully setup yet
    res.status(500).send(exception)
  }
}

exports.getCollectionById = async (req, res) => {
  if (!req.params.id) {
    res.status(500).send({"error": "Oops no id was send with this request"})
  } else {
    try {
      let payload = await Collection.get_by_id(req.params.id);
      let payloadJson = JSON.stringify(payload);
      res.send(payloadJson);
    } catch(exception) {
      // not fully setup yet
      res.status(500).send(exception)
    }
  }
}

exports.getCollectionProducts = async (req, res) => {
  if (!req.params.id) {
    res.status(500).send({"error": "Oops no id was send with this request"})
  } else {
    try {
      let payload = await Collection.get_products(req.params.id);
      let payloadJson = JSON.stringify(payload);
      res.send(payloadJson);
    } catch(exception) {
      // not fully setup yet
      res.status(500).send(exception)
    }
  }
}


exports.getCollectionLooks = async (req, res) => {
  if (!req.params.id) {
    res.status(500).send({"error": "Oops no id was send with this request"})
  } else {
    try {
      let payload = await Collection.get_looks(req.params.id);
      let payloadJson = JSON.stringify(payload);
      res.send(payloadJson);
    } catch(exception) {
      // not fully setup yet
      res.status(500).send(exception)
    }
  }
}