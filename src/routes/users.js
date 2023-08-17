const { Router } = require('express');
const {createUser, getUsers} = require('../controllers/users');

const router = Router();

/**
 * @openapi
 * /api/users:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Costumers 👨‍💻
 *    description: Creates a new Costumer
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                description: code Beat
 *              description:
 *                type: string
 *                description: beat description
 *              price:
 *                type: number
 *                description: bet's amount
 *    responses:
 *       201:
 *         description: CREATED
 */
router.post('/', createUser);

/**
 * @openapi
 * /api/users:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Costumers 👨‍💻
 *    description: Get all users
 *    responses:
 *       200:
 *         description: All all users
 */
router.get('/', getUsers);

module.exports = router;
