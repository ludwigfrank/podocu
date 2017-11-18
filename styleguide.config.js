const loaders = require('loaders')
const path = require('path')
const defaultResolver = require("react-docgen").resolver.findAllExportedComponentDefinitions
const annotationResolver = require("react-docgen-annotation-resolver").default

module.exports = {
    resolver: (ast, recast) => {
        const annotatedComponents = annotationResolver(ast, recast)
        const defaultComponents = defaultResolver(ast, recast)
        return annotatedComponents.concat(defaultComponents)
    },
    theme: {
        fontFamily: {
            base: '"SF Pro Display"'
        }
    },
    webpackConfig: {
        module: {
            loaders: loaders.all
        },
        resolve: {
            alias: {
                'rsg-components/Wrapper': path.join(
                    __dirname,
                    'src/theme/index.js'
                ),
                'rsg-components/Heading': path.join(
                    __dirname,
                    'lib/styleHeading.js'
                )
            }
        }
    },
}