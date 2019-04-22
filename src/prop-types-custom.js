const customPropType = (propTypeName, validator) => {
  const isRequired = (props, propName, componentName) => {
    const { [propName]: value } = props;
    if (value == null || typeof value !== 'string' || !validator(value)) {
      return new TypeError(
        `Invalid ${propTypeName}. Prop Value: ${value} for ${propName} in ${componentName}`,
      );
    }

    return null;
  };

  const propType = (props, propName, componentName) => {
    if (props[propName] == null) {
      return null;
    }

    return isRequired(props, propName, componentName);
  };

  propType.isRequired = isRequired;

  return propType;
};

export default customPropType;
