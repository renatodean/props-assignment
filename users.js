class Users {
  constructor() {
    this.usersArray = new Array();
  }

  /**
   * Method that adds a new element at the end of the array
   * @param {number} userId - The userId to be added.
   */
  add(userId) {
    if (!userId || this.usersArray.indexOf(userId) !== -1) {
      return false;
    }

    this.usersArray.push(userId);

    // Returns true in case of success, false in other case.
    return this.usersArray[this.usersArray.length - 1] === userId;
  }

  /**
   * Method that removes an element by the given userId
   * @param {number} userId - The userId to be removed.
   */
  removeByUser(userId) {
    if (!userId) {
      return false;
    }

    const userIndex = this.usersArray.indexOf(userId);

    if (userIndex === -1) {
      return false;
    }

    return !!this.usersArray.splice(userIndex, 1);
  }

  /**
   * Method that removes an element by the given position
   * @param {number} position - The position to be removed.
   */
  removeByPosition(position) {
    // Assuming that the positions starts from 1.
    if (position < 1 || position > this.usersArray.length) {
      return false;
    }

    return !!this.usersArray.splice(position - 1, 1);
  }

  /**
   * Method that execute a move of an element
   * @param {number} fromPosition - The fromPosition param is the current position of the element.
   * @param {number} toPosition - The toPosition param is the position where to move the element.
   */
  move(fromPosition, toPosition) {
    // Assuming that the positions starts from 1.
    if (
      fromPosition < 1 || fromPosition > this.usersArray.length ||
      toPosition < 1 || toPosition > this.usersArray.length ||
      fromPosition === toPosition
    ) {
      return false;
    }

    try {
      const userToMove = this.usersArray[fromPosition - 1];
      this.usersArray.splice(fromPosition - 1, 1);
      this.usersArray.splice(toPosition - 1, 0, userToMove);

      return this.usersArray[toPosition - 1] === userToMove;
    } catch (error) {
      return false;
    }
  }

  /**
   * Method that execute a swap between two elements
   * @param {number} position1 - The position1 value.
   * @param {number} position2 - The position2 value.
   */
  swap(position1, position2) {
    // Assuming that the positions starts from 1.
    if (
      position1 < 1 || position1 > this.usersArray.length ||
      position2 < 1 || position2 > this.usersArray.length ||
      position1 === position2
    ) {
      return false;
    }

    try {
      const userPosition1 = this.usersArray[position1 - 1];
      const userPosition2 = this.usersArray[position2 - 1];
      this.usersArray.splice(position1 - 1, 1, userPosition2);
      this.usersArray.splice(position2 - 1, 1, userPosition1);

      return this.usersArray[position2 - 1] === userToMove;
    } catch (error) {
      return false;
    }
  }

  /**
   * Method that reverse the current array.
   */
  reverse() {
    this.usersArray = this.usersArray.reverse();

    return true;
  }

  /**
   * Method that prints what are the values and position of the elements.
   */
  print() {
    console.log('Users in the queue: ');
    console.log(this.usersArray.map((userInQueue, index) => {
      return `{${index + 1}}:{${userInQueue}}`;
    }));

    return true;
  }
}

module.exports = Users;
