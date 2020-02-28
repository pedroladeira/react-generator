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

## Create a React Typescript file Component

```
reactbuilder button -f tsx
```

## Create a Javascript File

```
reactbuilder button -f tsx
```

## Create a file inside a path

```
reactbuilder example.button -f tsx
reactbuilder components.example.button -f tsx
```

will create

```
button
├── index.tsx
├── Button.tsx
└── Button.scss
```
