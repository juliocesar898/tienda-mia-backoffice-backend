const { Router } = require('express');
const { newOrder, getOrders } = require('../controllers/orders');

const router = Router();

/**
 * @openapi
 * /api/orders:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Orders 🚚
 *    description: Creates a Bet
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                description: product title
 *              isoCode:
 *                type: string
 *                description: unique iso code
 *              description:
 *                type: string
 *                description: product description
 *              url:
 *                type: string
 *                description: product url image
 *              price:
 *                type: number
 *                description: price with taxes
 *              stock:
 *                type: number
 *                description: product's stock
 *    responses:
 *       201:
 *         description: CREATED
 */
router.post('/', newOrder);

/**
 * @openapi
 * /api/orders:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Orders 🚚
 *    description: Get orders
 *    responses:
 *       200:
 *         description: All orders
 */
router.get('/', getOrders);

module.exports = router;
