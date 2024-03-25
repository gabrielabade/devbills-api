import mongoose from 'mongoose';

export async function setupMongo(): Promise<void> {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log('🎲 Connection to DB...');
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log('✅ DB connected!');
    }
  } catch (error) {
    console.error('❌ Error connecting to DB:', error);
    throw new Error('❌ DB connection failed.');
  }
}
