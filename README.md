# React Builder

Generate your code components trough a simple command line

```
Usage: react-generate [options] <name>

  Options:

    -h, --help                output usage information
    -V, --version             output the version number
    -s, --styles [extension]  styles extension [default: css]
    -t, --typescript          use typescript style [default: false]
```

## Install

```
npm i -g @pedroladeira/reactbuilder
```

## Example

```
reactbuilder button -t -s scss
```

will create

```
button
├── index.tsx
├── Button.tsx
└── Button.scss
```
