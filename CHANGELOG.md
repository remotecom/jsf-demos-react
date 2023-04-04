This is the CHANGELOG to json-schema-form (unreleased version).

### 2023 April 03

- BREAKING CHANGE
  The `createHeadlessForm()` signature changed. Changes:
  - `jsonSchema` is directly passed in the 1st argument.
  - the 2nd argument is an object with all options.
    - `defaultValues` is part of the options, renamed to `initialValues`.

Before:

```js
createHeadlessForm({ schema: jsonSchema }, defaultValues, options);
```

Now:

```js
createHeadlessForm(jsonSchema, {
  initialValues,
  ...options
});
```

### 2023 March 16

- fix: File - extension validation is no longer camelcase sensitive.
- feat: Number - Add `presentation.percentage`.
- fix: Conditionals - Include `if.required[]` verification to mark a conditional as a match or not.
- feat: Add support to `anyOf` used in radio/select fields. This will deprecated `presentation.options`. [Docs](https://www.notion.so/remotecom/json-schema-form-Documentation-4f390236948b4b2e8b7350ebcd488ca6?pvs=4#91ee74beef3749edad026b0571580911).
- fix: Support custom descriptions in conditional fields.

### 2023 Jan 01

- Latest current version
