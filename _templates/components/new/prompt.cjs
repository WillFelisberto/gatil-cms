module.exports = {
  prompt: ({ prompter }) => {
    return prompter.prompt([
      {
        type: 'select',
        name: 'componentType',
        message: 'What type of component do you want to create?',
        choices: ['atoms', 'molecules', 'organisms', 'templates']
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
        validate: (input) => (input ? true : 'Name is required!')
      }
    ]);
  }
};
