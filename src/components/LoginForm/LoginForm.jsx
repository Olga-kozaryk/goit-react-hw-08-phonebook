import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/operations';
import { Form, Formik } from 'formik';
import { Button, Flex, Text,} from '@chakra-ui/react';
import { InputField } from '../LoginForm/InputField';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const initialFormValues = {
        email: "", password: "",
      };

      const handleSubmit = async ({ email, password }) => {
        await dispatch(logIn({ email, password })).unwrap();
      };      

  return (
    <Formik 
    onSubmit={handleSubmit}
    initialValues={initialFormValues}
    autoComplete="off">

        {({ isSubmitting }) => (
        <Form>
            <Flex 
            width='600px' 
            flexDirection='column' 
            gap={6}>

            <InputField
              label="Email"
              placeholder="Please enter your email"
              type="email"
              name="email"
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
            isLoading={isSubmitting} 
            disabled={isSubmitting}>
                
              <Text>Login</Text>
            </Button>

                </Flex>    
            </Form>)}        
        </Formik>

  )
}
