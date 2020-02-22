import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import scholium from './scholium'
import examination from './examination'
import academicYear from './academic_year'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    scholium,
    examination,
    academicYear
  ])
})
