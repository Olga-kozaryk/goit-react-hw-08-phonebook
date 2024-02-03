import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/operations';
import { Button, Flex, Spinner, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { InputField } from '../LoginForm/InputField';

const initialFormValues = {
    email: "", password: "", name: '',
}

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = async ({ email, password, name }) => {
        await dispatch(register({ email, password, name })).unwrap();
    };

  return (
    <Formik 
    onSubmit={handleSubmit}
    initialValues={initialFormValues}
    autoComplete="off">

        {({ isSubmitting }) => (
        <Form>
            <Flex width='600px' flexDirection='column' gap={6}>

            <InputField
            label="Email"
            placeholder="Please enter your email"
            type="email"
            name="email"
            />

            <InputField
            label="Name"
            placeholder="Please enter your name"
            type="name"
            name="name"
            />

            <InputField
            label="Password"
            placeholder="Please enter your password"
            type="password"
            name="password"
            />

            <Button 
            width='xs' 
            type='summit' 
            disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : <Text>Register</Text>}
            </Button>
            </Flex>
            </Form>)}
    </Formik>
  )
}