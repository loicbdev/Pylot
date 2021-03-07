const axios = require('axios');

module.exports = async (req, res, next) => {
  const address = req.body;

  const params = {
    street: `${address.streetNumber} ${address.streetName}`,
    city: address.city,
    country: address.country,
    postalcode: address.postalCode,
    format: 'geocodejson',
  };

  const URL = `https://nominatim.openstreetmap.org/search`;

  try {
    const result = await axios.get(URL, { params });
    [
      req.body.addressLong,
      req.body.addressLat,
    ] = result.data.features[0].geometry.coordinates;
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Une erreur s'est produite 🤔`,
      error: err.message,
    });
  }
};
