import { expect } from 'chai';
import customPropType from './prop-types-custom';

describe('prop-types-custom', () => {
  const propName = 'name';
  const componentName = 'component';
  const nullValue = null;
  const notNullValue = 'some value';
  const typeName = 'validType';
  const trueValidator = () => true;
  const falseValidator = () => false;
  const errorMessageForNoNullValue = `Invalid ${typeName}. Prop Value: ${notNullValue} for ${propName} in ${componentName}`;
  const errorMessageForNullValue = `Invalid ${typeName}. Prop Value: ${nullValue} for ${propName} in ${componentName}`;

  describe('customPropType', () => {
    describe('when value is not required', () => {
      describe('when validator return true', () => {
        const propType = customPropType(typeName, trueValidator);
        it('return null for null prop value', () => {
          const result = propType({ name: nullValue }, propName, componentName);
          expect(result).to.equal(nullValue);
        });
        it('return null for not null prop value', () => {
          const result = propType({ name: notNullValue }, propName, componentName);
          expect(result).to.equal(nullValue);
        });
      });
      describe('when validator return false', () => {
        const propType = customPropType(typeName, falseValidator);
        it('return null for null prop value', () => {
          const result = propType({ name: nullValue }, propName, componentName);
          expect(result).to.equal(nullValue);
        });
        it('throw TypeError for not null prop value', () => {
          const result = propType({ name: notNullValue }, propName, componentName);
          expect(result.message).to.equal(errorMessageForNoNullValue);
        });
      });
    });

    describe('when value is required', () => {
      describe('when validator return true', () => {
        const propType = customPropType(typeName, trueValidator);
        it('throw TypeError for null prop value', () => {
          const result = propType.isRequired({ name: nullValue }, propName, componentName);
          expect(result.message).to.equal(errorMessageForNullValue);
        });
        it('return null for not null prop value', () => {
          const result = propType.isRequired({ name: notNullValue }, propName, componentName);
          expect(result).to.equal(nullValue);
        });
      });
      describe('when validator return false', () => {
        const propType = customPropType(typeName, falseValidator);
        it('throw TypeError for null prop value', () => {
          const result = propType.isRequired({ name: nullValue }, propName, componentName);
          expect(result.message).to.equal(errorMessageForNullValue);
        });
        it('throw TypeError for not null prop value', () => {
          const result = propType.isRequired({ name: notNullValue }, propName, componentName);
          expect(result.message).to.equal(errorMessageForNoNullValue);
        });
      });
    });
  });
});
