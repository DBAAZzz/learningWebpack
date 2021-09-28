const parse = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const types = require('@babel/types');

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;

const ast = parse.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['jsx']
})

traverse(ast, {
    // class表达式
    CallExpression(path, state) {
        if (types.isMemberExpression(path.node.callee)
            && path.node.callee.object.name === 'console'
            && ['log', 'info', 'error', 'debug'].includes(path.node.callee.property.name)
        ) {
            console.log(path.node.loc.start)
            const { line, column } = path.node.loc.start
            path.node.arguments.unshift(types.stringLiteral(`filename:(${line}, ${column})`))
        }
    }
})

const { code, map } = generate(ast)

console.log('result', code, map)

