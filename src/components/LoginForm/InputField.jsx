import {
    FormControl,
    FormErrorMessage,
    FormLabel,

    Input,
    InputGroup,

    useMergeRefs,
} from '@chakra-ui/react'
import { useField } from 'formik';
import { forwardRef, useRef } from 'react'


export const InputField = forwardRef((props, ref) => {
    const { name, label } = props;


    const [field, meta] = useField(props);

    const inputRef = useRef(null)

    const mergeRef = useMergeRefs(inputRef, ref)

    return (
        <FormControl isInvalid={meta.error}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputGroup>
                <Input
                    ref={mergeRef}
                    {...field}
                    {...props}

                />
            </InputGroup>

            {meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
        </FormControl>
    )
})

InputField.displayName = 'InputField'