import { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const AddTodo = ({ addTodo }) => {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content',
        description: 'Please Enter something.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    // clear input
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='something is waiting to do...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          colorScheme='pink'
          px='8'
          type='submit'
        >
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
