# Generate React Component

```
Usage: createReactComponent [options] <name>

  Options:

    -h, --help                output usage information
    -V, --version             output the version number
    -s, --styles [extension]  styles extension [default: css]
```

## Example

```
node createReactComponent.js Alert -s scss
```

will create

```
Alert
├── Alert.js
├── Alert.jsx
├── Alert.scss
└── index.js
```
