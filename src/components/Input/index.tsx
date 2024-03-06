import { InputHTMLAttributes, useEffect, useRef } from 'react'
import ReactInputMask from 'react-input-mask';
import { useField } from '@unform/core'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  placeholder?: string
  flex?: number;
  width?: number;
  mask?: string;
}

const Input = ({ name, label, width, flex, mask = '', ...rest }: InputProps) => {
  const inputRef = useRef(null)

  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        console.log(value);
        console.log(ref);

        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container flex={flex} width={width}>
      <label htmlFor={name}>{label}</label>
      {mask ? (
        <ReactInputMask
          name={name}
          id={name}
          ref={inputRef}
          mask={mask || ''}
          {...rest}
        />
      ) : (
        <input
          name={name}
          id={name}
          ref={inputRef}
          {...rest}
        />
      )}
      {error && <span className="error">{error}</span>}
    </Container>
  )
}
export default Input