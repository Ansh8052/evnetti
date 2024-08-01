import mongoose from 'mongoose'


const MONGODB_URI = process.env.MONGODB_URI!;
let cached =(global as any).mongoose || { conn: null, promise : null};

export const connectDb  =  async() => {
    if (cached.conn) {
        return cached.conn;
        }
        if (!cached.promise) {
            cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
                dbName :'eventti',
                bufferCommands : false
                });

                cached.conn = await cached.promise;
                return cached.promise
    }
}