// routers/Users/userRouter.js

/**
 * @swagger
 * /users/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     parameters:
 *       - in: header
 *         name: Token
 *         required: true
 *         description: Token for authorization
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: A list of users.
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: name@gmail.com
 *               pass_word:
 *                 type: string
 *                 description: the user's password
 *                 example: 123321
 *              
 *     responses:
 *         200:
 *             description: token
 *         
*/

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *                 description: The user's name.
 *                 example: David 
 *               email:
 *                 type: string
 *                 description: the user's email
 *                 example: david@gmail.com
 *               phone_number:
 *                 type: string
 *                 description: phone number
 *                 example: "000-999-101010"
 *               password:
 *                 type: string
 *                 description: password user
 *                 example: "chung@@@"
 *               typeUser:
 *                 type: string
 *                 description: type of user admin
 *                 example: customer
 *              
 *     responses:
 *         201:
 *             description: created
 *         
*/