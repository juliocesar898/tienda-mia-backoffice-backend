const { Router } = require('express');
const { saveProduct, getAllProducts } = require('../controllers/products');

const router = Router();

/**
 * @openapi
 * /api/products:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Products 🎮
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
router.post('/', saveProduct);

/**
 * @openapi
 * /api/products:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Products 🎮
 *    description: Get products
 *    responses:
 *       200:
 *         description: All products
 */
router.get('/', getAllProducts);

module.exports = router;
