const router = require("express").Router();

const getCartRouter = require('./get.cart')
const getCartByIdRouter = require('./get.cart')
const postNewCartRouter = require('./post.cart')
const putCartQuantityRouter = require('./put.cart')
const deleteFromCartRouter = require('./delete.cart')

router.use(getCartRouter);
router.use(getCartByIdRouter);
router.use(postNewCartRouter);
router.use(putCartQuantityRouter);
router.use(deleteFromCartRouter);

module.exports = router;