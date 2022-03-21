const express = require("express");
const router = express.Router();
const Track = require("../models/Track");

// Get all tracks
router.get("/getAll", async (req, res) => {
  const tracks = await Track.find();
  res.send(tracks);
});

// Get all tracks with artist name containing string
router.get("/getTracksByQuery/:q", async (req, res) => {
  // Searching artists by query term and matching (not case sensitive)
  const tracks = await Track.find({
    artist: new RegExp(req.params.q, "i"),
  });
  res.send(tracks);
});

// Get by ID
router.get("/getTrack/:id", async (req, res) => {
  const track = await Track.findOne({ _id: req.params.id });
  res.send(track);
});

// Get by Artist Name Method
router.get("/getTrackByArtist/:artistName", async (req, res) => {
  const track = await Track.findOne({ artist: req.params.artistName });
  res.send(track);
});

// Get by Track Name Method
router.get("/getTrackByName/:trackName", async (req, res) => {
  const track = await Track.findOne({ name: req.params.trackName });
  res.send(track);
});

module.exports = router;
