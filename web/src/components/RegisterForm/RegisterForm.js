import {
  Form,
  TextField,
  Label,
  Submit,
  FieldError,
  FormError,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
const RegisterForm = () => {
  return (
    <div>
      <Form>
        <Label htmlFor="username"></Label>
        <TextField name="username" validation={{ required: true }} />
        <Label htmlFor="password1"></Label>
        <TextField name="password1" type="password" />
        <Label htmlFor="password2"></Label>
        <TextField name="password2" type="password" />
        <Submit>Register</Submit>
      </Form>
    </div>
  )
}

export default RegisterForm
