const router = require("express").Router();

const postTransactionDetailsRouter = require('./post.transactions')
const postTransactionPhotoRouter = require('./post.transactions')
const postTransactionRouter = require('./post.transactions')
const postProofRouter = require('./post.transactions')

const getAllTransactionsRouter = require('./get.transactions')
const getPastTransactionsRouter = require('./get.transactions')
const getSearchTransactionsRouter =require('./get.transactions')
const getTransactionDetailsRouter = require('./get.transactions')
const getAllTransactionsByIdRouter = require('./get.transactions')
const getOngoingTransactionsRouter = require('./get.transactions')

const putRejectPhotoRouter = require('./put.transactions')
const putConfirmPhotoRouter = require('./put.transactions')
const putStatusTransactionsRouter = require('./put.transactions')

router.use(postTransactionDetailsRouter);
router.use(postTransactionPhotoRouter);
router.use(postTransactionRouter);
router.use(postProofRouter);

router.use(getAllTransactionsRouter);
router.use(getPastTransactionsRouter);
router.use(getSearchTransactionsRouter);
router.use(getTransactionDetailsRouter);
router.use(getAllTransactionsByIdRouter);
router.use(getOngoingTransactionsRouter);

router.use(putRejectPhotoRouter);
router.use(putConfirmPhotoRouter);
router.use(putStatusTransactionsRouter);

module.exports = router;