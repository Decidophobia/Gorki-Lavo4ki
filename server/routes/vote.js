const router = require('express').Router();
const Post = require('../models/Post');

router.post('/likes', async (req, res) => {
  console.log(req.body);
  try {
    const postTolike = await Post.findOne({ _id: req.body.id });

    await postTolike.likes.push(req.body.userId);
    await postTolike.save();
    res.status(200).json({postTolike});
  } catch (err) {
    console.log(err);
    res.status(400).json('Like doesnt work');
  }
});

router.post('/dislikes', async (req, res) => {
  // console.log(req.body);
  try {
    const postTolike = await Post.findOne({ _id: req.body.id });
    await postTolike.dislikes.push(req.body.userId);
    await postTolike.save();
    res.status(200).json({postTolike});
  } catch (err) {
    console.log(err);
    res.status(400).json('dislike doesnt work');
  }
});

module.exports = router;
