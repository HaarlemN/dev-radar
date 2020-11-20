const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    try {
      const { github_username, techs, latitude, longitude } = req.body;

      let dev = await Dev.findOne({ github_username });

      if (!dev) {
        const response = await axios.get(
          `https://api.github.com/users/${github_username}`,
        );

        const { name, login, avatar_url, bio } = response.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };

        dev = await Dev.create({
          name: name || login,
          github_username,
          bio,
          avatar_url,
          techs: techsArray,
          location,
        });

        // Filter connections that are at most 10km away
        // and that the new Dev has one of the filtered Techs

        const sendSocketMessageTo = findConnections(
          { latitude, longitude },
          techsArray,
        );
        sendMessage(sendSocketMessageTo, 'new-dev', dev);
      }
      return res.json(dev);
    } catch (err) {
      return res.json(err);
    }
  },
};
