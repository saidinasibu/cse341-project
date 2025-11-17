const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const { playerValidationRules, validate } = require('../controllers/validator');

/**
 * @swagger
 * /player:
 *   get:
 *     summary: Retrieve a list of players
 *     responses:
 *       200:
 *         description: A list of players
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', playerController.getPlayers);

/**
 * @swagger
 * /player/{id}:
 *   get:
 *     summary: Retrieve a single player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The player ID
 *     responses:
 *       200:
 *         description: A single player
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/:id', playerValidationRules(), validate, playerController.getPlayerById);

/**
 * @swagger
 * /player:
 *   post:
 *     summary: Create a new player
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               countryName:
 *                 type: string
 *               clubName:
 *                 type: string
 *               age:
 *                 type: number
 *               position:
 *                 type: string
 *               goals:
 *                 type: number
 *     responses:
 *       201:
 *         description: The created player
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/', playerValidationRules(), validate, playerController.createPlayer);

/**
 * @swagger
 * /player/{id}:
 *   put:
 *     summary: Update a player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The player ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               countryName:
 *                 type: string
 *               clubName:
 *                 type: string
 *               age:
 *                 type: number
 *               position:
 *                 type: string
 *               goals:
 *                 type: number
 *     responses:
 *       200:
 *         description: The updated player
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put('/:id', playerValidationRules(), validate, playerController.updatePlayer);

/**
 * @swagger
 * /player/{id}:
 *   delete:
 *     summary: Delete a player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The player ID
 *     responses:
 *       200:
 *         description: A message indicating the player was deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.delete('/:id', playerValidationRules(), validate, playerController.deletePlayer);

module.exports = router;