const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getUsers)         // GET all users
  .post(createUser);     // POST a new user

// /api/users/:userId
router.route('/:userId')
  .get(getSingleUser)    // GET a single user by its _id
  .put(updateUser)       // PUT to update a user by its _id
  .delete(deleteUser);   // DELETE to remove a user by its _id

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)       // POST to add a new friend to a user's friend list
  .delete(removeFriend); // DELETE to remove a friend from a user's friend list

module.exports = router;
