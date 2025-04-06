import { seedDatabase } from '../lib/seed';

export default async function SeedPage() {
  try {
    await seedDatabase();

    return (
      <div style={{ fontSize: '1.5rem', padding: '2rem' }}>
         Database seeded successfully!
      </div>
    );
  } catch (error) {
    return (
      <div style={{ color: 'red', fontSize: '1.5rem', padding: '2rem' }}>
         Error: {String(error)}
      </div>
    );
  }
}
