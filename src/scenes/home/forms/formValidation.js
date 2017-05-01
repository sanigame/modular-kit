import { createValidator, required, maxLength, integer } from '../../../utils/validation';

const formValidation = createValidator({
  username: [required, maxLength(10)],
  count: [required, integer]
})

export default formValidation;