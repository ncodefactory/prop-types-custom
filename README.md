# prop-types-custom #

quick and easy creation custom prop types validators for react props

## installation: ##

### npm: ###
```
npm install @ncodefactory/prop-types-custom --save
```

### yarn: ###
```
yarn add @ncodefactory/prop-types-custom
```

## usage: ##

```js
import default_export_from_the_module_being_used from '@ncodefactory/prop-types-custom';
```

or

```js
import { some_known_export_from_the_module_being_used } from '@ncodefactory/prop-types-custom';
```

```javascript
const validator = value => value.length === 3;
const validatedTypeName = "threeCharString";
const threeCharStringPropType = customPropType(validatedTypeName, validator);

Component.propTypes = {
  name: threeCharStringPropType.isRequired,
  subName: threeCharStringPropType
};
```