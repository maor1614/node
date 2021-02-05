const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extracFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, extracFile, PostController.createPost);

router.put("/:id", checkAuth, extracFile, PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePosts);

module.exports = router;
