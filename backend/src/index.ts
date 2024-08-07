import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { cors } from 'hono/cors'
import z from 'zod';

const signupInput = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().optional()
});

const signinInput = z.object({
  email: z.string().email(),
  password: z.string()
})

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
      userId: any
    }
}>();

app.use('/*',cors());
app.use('/api/v1/blog/*', async (c, next) => {
  const header = await c.req.header("authorization") || "";
  const response = await verify(header, c.env.JWT_SECRET);
  if(response){
    c.set("userId",response.id);
    await next();
  }
  else{
    c.status(403);
    c.json({
      message: "You are not logged in"
    });
  }
})

app.post('/api/v1/user/signup', async (c) => {
  // Connecting to prisma client
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    // Getting the body from the request
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Incorrect inputs"
      });
    }
    try{
      // Creating a new user
      const user = await prisma.user.create({
          data: {
              email: body.email,
              password: body.password,
              name: body.name
          }
      });
      // Making a new jwt
      const token = await sign({id: user.id}, c.env.JWT_SECRET);
      // Returning the token
      return c.json({
          jwt: token
      });
    }
    // If there is any error, then it will be caught here
    catch(e){
      c.status(403);
      return c.json({message: "Error while signing up"});
    }
});

app.post('/api/v1/user/signin', async(c) => {
  // Connecting to prisma client
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // Getting the body from the request
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Incorrect inputs"
      });
    }
  try{
    // Finding the user having the username
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    });
    // If the user exists, then create a new jwt and send back the jwt
    if(user != null){
      const token = await sign({id: user.id}, c.env.JWT_SECRET);
      return c.json({
          jwt: token,
          message: "Signin Successful"
      });
    }
    // If user doesn't exist, then send user not found
    else{
      c.status(404);
      c.json({message: "User not found"});
    }
  }
  // Catching if there is any error while signing in
  catch(e){
    c.status(403);
    return c.json({message: "Error while signing in"});
  }
});

app.post('/api/v1/blog', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const id = await c.get("userId");
  const blog = await prisma.post.create({
      data: {
          title: body.title,
          content: body.content,
          authorId: id
      }
  });
  if(blog){
    c.status(200);
    return c.json({
      message: "Created a new blog",
      id: blog.id
    });
  }
  else{
    c.status(403);
    return c.json({
      message: "Error while creating the blog"
    })
  }
});

app.put('/api/v1/blog', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  // const id = await c.get("userId");
  const blog = await prisma.post.update({
      where: {
        id: body.id
      },
      data: {
          title: body.title,
          content: body.content
      }
  });
  if(blog){
    c.status(200);
    return c.json({
      message: "Updated the blog",
      id: blog.id
    });
  }
  else{
    c.status(403);
    return c.json({
      message: "Error while updating the blog"
    })
  }
});

app.get('/api/v1/blog/bulk', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // const body = await c.req.json();
  const blog = await prisma.post.findMany({
    select: {
      content: true,
      id: true,
      title: true,
      author: {
        select: {
          name: true
        }
      }
    }
  });
  return c.json({blog});
  
});

app.get('/api/v1/blog/:id',async (c) => {
  const blogid = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id: parseInt(blogid)
		}
	});

	return c.json(post);  
});

export default app
