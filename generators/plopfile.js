module.exports = plop => {
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "../src/components/{{pascalCase name}}/index.tsx",
                templateFile: "templates/index.tsx",
            },
            {
                type: "add",
                path: "../src/components/{{pascalCase name}}/index.styles.ts",
                templateFile: "templates/index.styles.ts",
            },
            {
                type: "add",
                path: "../src/components/{{pascalCase name}}/index.stories.tsx",
                templateFile: "templates/index.stories.tsx",
            },
            {
                type: "add",
                path: "../src/components/{{pascalCase name}}/index.test.tsx",
                templateFile: "templates/index.test.tsx",
            },
        ],
    });
}
;
