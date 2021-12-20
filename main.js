const Users = require('./users');
const MAP_OF_ACTIONS = {
  ADD: 'add',
  REMOVE_USER: 'removeByUser',
  REMOVE_POSITION: 'removeByPosition',
  MOVE: 'move',
  SWAP: 'swap',
  REVERSE: 'reverse',
  PRINT: 'print',
};
const ACTION_ARGUMENT = 'actions=';
const DEFAULT_ACTION_FILE = 'actions.txt';

/**
 *  Method to read the file that contains all the actions
 */
const readTextFile = (file) => {
  const fs = require('fs');

  console.info('Info: Trying to read data from actions.txt.');

  try {
    const data = fs.readFileSync(file, 'utf8');
    console.info('Info: File was read correctly.');
    return data;
  } catch (err) {
    console.error('Error: Error when trying to read file.', err);
    return false;
  }
}

/**
 * Method that receives the array of posibles actions and the UsersArray
 * and tries to execute every action.
 */
const executeActions = (arrayOfActions, usersArray) => {
  console.info('Info: Starting Executing actions.');

  arrayOfActions.forEach(actionLine => {
    if (actionLine) {
      const [action, ...params] = actionLine.split(',');
      const actionName = MAP_OF_ACTIONS[action];

      if (actionName) {
        const filteredParams = params.filter(param => param);
        console.info(`[TASK] Executing action "${actionName}"${filteredParams.length ? ` with params: ${params}.` : ''}`);
        const actionSuccess = usersArray[actionName](...filteredParams);
        console.info(`[${actionSuccess ? 'SUCCESS' : 'ERROR'}] Executing action "${actionName}"`, '\n');
        // In case you want to see what is inside the UserQueue after each action, uncomment the line below:
        // usersArray.print();
      } else {
        console.warn('Warning: Not valid action to execute.', actionName);
      }
    } else {
      console.warn('Warning: Not valid action to execute.', actionLine);
    }
  });
};

/**
 * Main function, it takes care of executing all the actions and creating the users queue
 * You can read the actions file by default that are in 'actions.txt' or you you can execute other file
 * with an argument to override file name:
 * Ex: node main.js actions=myActions.txt
 */
const main = () => {
  let actionFile = DEFAULT_ACTION_FILE;
  process.argv.forEach(function (val, index, array) {
    if (val.includes(ACTION_ARGUMENT)) {
      const [, actionParam] = val.split(ACTION_ARGUMENT);
      actionFile = actionParam || actionFile;
    }
  });

  console.info('Info: Starting main function for Props Assignment.');

  const textData = readTextFile(actionFile);
  if (!textData) {
    console.info('Error: No actions available, finishing process.');
    return;
  }

  const usersArray = new Users();
  if (!usersArray || !usersArray.add) {
    console.error('Error: Error when creating the Users queue.', err);
    return false;
  }

  const arrayOfActions = textData.split(/\r?\n/);
  executeActions(arrayOfActions, usersArray);

  console.info('Info: Finish main function for Props Assignment.');
  return;
}

main();
