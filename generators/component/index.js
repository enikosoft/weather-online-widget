const path = require('path');
const fs = require('fs');

const componentsDir = path.join(process.cwd(), 'src/components');
const componentsType = fs.readdirSync(componentsDir);

/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
    {
      type: 'list',
      name: 'components',
      message: 'Which type of components does this component belong to?',
      choices: ['ROOT', ...componentsType],
      when: () => componentsType.length > 0,
    },
    {
      type: 'input',
      name: 'folder',
      message: 'folder in components',
      when: ({components}) => !components || components === 'ROOT',
    },
  ],
  actions: (answers) => {
    const componentGeneratePath =
      !answers.components || answers.components === 'ROOT'
        ? 'src/components/{{folder}}'
        : 'src/components/{{components}}';
    return [
      {
        type: 'add',
        path: componentGeneratePath + '/{{properCase name}}/index.ts',
        templateFile: 'generators/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: componentGeneratePath + '/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'generators/component/Component.tsx.hbs',
      },
    ];
  },
};
