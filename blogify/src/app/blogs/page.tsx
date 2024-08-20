
"use client";
// "use client";

// import { useEffect, useState } from 'react';
// import { InputWithButton } from "@/components/InputWithButton";
// import { Button } from '@/components/ui/button';
// import { useRouter } from "next/navigation";
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea"


// import { Label } from "@/components/ui/label";

// interface Blog {
//   _id: string;
//   title: string;
//   content: string;
//   author: string;
// }

// const Blogs = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [error, setError] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editBlogId, setEditBlogId] = useState<string | null>(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const res = await fetch('/api/blogs');
//       if (res.ok) {
//         const data = await res.json();
//         setBlogs(data.data || []);
//       } else {
//         throw new Error('Failed to fetch blogs');
//       }
//     } catch (error) {
//       setError((error as Error).message);
//     }
//   };

//   const handleLogin = () => {
//     router.push('/login');
//   }

//   const handleCreateBlog = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     const token = localStorage.getItem('token');

//     try {
//       const res = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ title, content }),
//       });

//       if (res.ok) {
//         fetchBlogs();
//         setTitle('');
//         setContent('');
//         setIsDialogOpen(false);
//       } else {
//         const data = await res.json();
//         setError(data.error);
//       }
//     } catch (error) {
//       setError((error as Error).message);
//     }
//   };

//   const handleUpdateBlog = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     const token = localStorage.getItem('token');

//     try {
//       const res = await fetch('/api/blogs', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ id: editBlogId, title, content }),
//       });

//       if (res.ok) {
//         fetchBlogs();
//         setTitle('');
//         setContent('');
//         setIsEditing(false);
//         setEditBlogId(null);
//         setIsDialogOpen(false);
//       } else {
//         const data = await res.json();
//         setError(data.error);
//       }
//     } catch (error) {
//       setError((error as Error).message);
//     }
//   };

//   const handleDeleteBlog = async (blogId: string) => {
//     const token = localStorage.getItem('token');

//     try {
//       const res = await fetch(`/api/blogs?id=${blogId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (res.ok) {
//         fetchBlogs();
//       } else {
//         const data = await res.json();
//         setError(data.error);
//       }
//     } catch (error) {
//       setError((error as Error).message);
//     }
//   };

//   const handleBlog = () => {
//     setIsDialogOpen(true);
//   }

//   return (
//     <>
//       <div className=''>
//         <div className='flex justify-between p-4'>
//           <InputWithButton />
//           <div className='flex justify-between gap-10'>
//             <Button onClick={handleBlog}>+ Blog</Button>
//             <Button onClick={handleLogin}>Login</Button>
//           </div>
//         </div>
//         <div className='w-[80%] h-[100px] m-auto'>
//           {blogs.map((el)=>(
//             <div key={el._id} className=' p-4 m-5 shadow-md text-center'>
//               <h1 className='text-2xl font-bold'>{el.title}</h1>
//               <p className=''>{el.content}</p>
//               <p>{el.author}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>{isEditing ? "Edit Blog" : "Create Blog"}</DialogTitle>
//             <DialogDescription>
//               {isEditing ? "Make changes to your blog here." : "Create a new blog here."}
//             </DialogDescription>
//           </DialogHeader>
//           <form onSubmit={isEditing ? handleUpdateBlog : handleCreateBlog}>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="title" className="text-right">Title</Label>
//                 <Input
//                   id="title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="content" className="text-right">Content</Label>
//                 <Textarea
//                   id="content"
//                   value={content}
//                   onChange={(e:any) => setContent(e.target.value)}
//                   className="col-span-3"
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <Button type="submit">{isEditing ? "Save changes" : "Create Blog"}</Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Blogs;

// "use client";
import { useEffect, useState } from 'react';
import { InputWithButton } from "@/components/InputWithButton";
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editBlogId, setEditBlogId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    setFilteredBlogs(
      blogs.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, blogs]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      if (res.ok) {
        const data = await res.json();
        setBlogs(data.data || []);
      } else {
        throw new Error('Failed to fetch blogs');
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const token = localStorage.getItem('token');

    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        fetchBlogs();
        setTitle('');
        setContent('');
        setIsDialogOpen(false);
      } else {
        const data = await res.json();
        setError(data.error);
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleUpdateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const token = localStorage.getItem('token');

    try {
      const res = await fetch('/api/blogs', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ id: editBlogId, title, content }),
      });

      if (res.ok) {
        fetchBlogs();
        setTitle('');
        setContent('');
        setIsEditing(false);
        setEditBlogId(null);
        setIsDialogOpen(false);
      } else {
        const data = await res.json();
        setError(data.error);
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`/api/blogs?id=${blogId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.ok) {
        fetchBlogs();
      } else {
        const data = await res.json();
        setError(data.error);
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleBlog = () => {
    setIsDialogOpen(true);
  };

  const handleSearch = () => {
    setFilteredBlogs(
      blogs.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between p-4'>
          <InputWithButton search={search} onSearchChange={(e) => setSearch(e.target.value)} onSearch={handleSearch} />
          <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-10 mt-4 md:mt-0'>
            <Button onClick={handleBlog}>+ Blog</Button>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </div>
        <div className='w-full md:w-[80%] m-auto'>
          {currentBlogs.map((el) => (
            <div key={el._id} className='p-4 m-5 shadow-md text-center dark:shadow-lg'>
              <h1 className='text-2xl font-bold'>{el.title}</h1>
              <p className=''>{el.content}</p>
              <p>{el.author}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    href="#"
                    onClick={() => paginate(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Blog" : "Create Blog"}</DialogTitle>
            <DialogDescription>
              {isEditing ? "Make changes to your blog here." : "Create a new blog here."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={isEditing ? handleUpdateBlog : handleCreateBlog}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-right">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e: any) => setContent(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">{isEditing ? "Save changes" : "Create Blog"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blogs;




