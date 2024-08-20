// import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export function authMiddleware(handler: any) {
//   return async (req: NextRequest, res: NextResponse) => {
  
//   const authHeader = req.headers.get('Authorization');
//     if (!authHeader) {
//       return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
//     }

//     const token = authHeader.split(' ')[1];
//     console.log(token);
    

//     if (!token) {
//       return NextResponse.json({ error: 'Token missing' }, { status: 401 });
//     }

//     try{
//       console.log("sujeet")
//       const decoded = jwt.verify(token, "Masai");
//       console.log(decoded);
//       if (decoded) {
//         (req as any).user = decoded; // Add decoded user info to the request
//         return handler(req);
//       } else {
//         console.log('Invalid token');
//         return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
//       }
     
      
//       // (req as any).user = decoded;
//       // return handler(req, res);
//     } catch (error) {
//       return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
//     }
//   };
// }

// Middleware Verification

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export function authMiddleware(handler: any) {
  return async (req: NextRequest, res: NextResponse) => {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'Token missing' }, { status: 401 });
    }

    try {
      console.log("Token received:", token);
      const secret = process.env.JWT_SECRET;
      console.log("Secret:", secret);
      
      const decoded = jwt.verify(token, secret as string);
      console.log("Decoded token:", decoded);
      (req as any).user = decoded;
      return handler(req);
    } catch (error) {
      console.error("Token verification error:", error);
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  };
}



// import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import { User } from '@/models/users.model'; // Adjust import based on your setup

// const secretKey = process.env.SECRET_KEY || 'sujeet1234';

// export async function authMiddleware(req: NextRequest) {
//   const token = req.headers.get('Authorization')?.replace('Bearer ', '');
  
//   if (!token) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   try {
//     const decoded: any = jwt.verify(token, secretKey);
//     const user = await User.findById(decoded.userId);

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 401 });
//     }

//     // Attach user details to request
//     (req as any).user = { userId: user._id };
//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
//   }
// }
