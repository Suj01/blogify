'use client'
import { useState } from 'react';
import { Box, Button, Input, Text } from '@shadcn/ui';

interface BlogCardProps {
  blog: {
    _id: string;
    title: string;
    content: string;
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [error, setError] = useState('');

  const handleUpdate = async () => {
    setError('');

    const res = await fetch('/api/blogs', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ id: blog._id, title, content }),
    });

    if (res.ok) {
      setIsEditing(false);
    } else {
      const data = await res.json();
      setError(data.error);
    }
  };

  const handleDelete = async () => {
    setError('');

    const res = await fetch('/api/blogs', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ id: blog._id }),
    });

    if (res.ok) {
      window.location.reload();
    } else {
      const data = await res.json();
      setError(data.error);
    }
  };

  return (
    <Box border="1px" borderColor="gray.200" p="4" mb="4" borderRadius="md" boxShadow="md">
      {error && <Text color="red.500" mb="4">{error}</Text>}
      {isEditing ? (
        <Box as="form" onSubmit={(e:any) => { e.preventDefault(); handleUpdate(); }}>
          <Input
            value={title}
            onChange={(e:any) => setTitle(e.target.value)}
            placeholder="Title"
            mb="2"
          />
          <Input
            value={content}
            onChange={(e:any) => setContent(e.target.value)}
            placeholder="Content"
            mb="2"
          />
          <Button type="submit" colorScheme="blue" mr="2">Update</Button>
          <Button onClick={() => setIsEditing(false)} colorScheme="gray">Cancel</Button>
        </Box>
      ) : (
        <Box mb="4">
          <Text as="h2" fontSize="lg" fontWeight="bold">{blog.title}</Text>
          <Text>{blog.content}</Text>
        </Box>
      )}
      {!isEditing && (
        <Box mt="4">
          <Button onClick={() => setIsEditing(!isEditing)} colorScheme="yellow" mr="2">
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
          <Button onClick={handleDelete} colorScheme="red">
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BlogCard;
