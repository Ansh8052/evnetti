import mongoose from 'mongoose'


const MONGODB_URI = 'mongodb+srv://uv84690:<password>@cluster0.fou24cc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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