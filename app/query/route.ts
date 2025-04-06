import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: {
    rejectUnauthorized: false, // Disable SSL verification for local development (but not recommended for production)
  },
});
async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  
  return data;
}
console.log(process.env.POSTGRES_URL); // Check if it logs the correct URL

export async function GET() {
  try {
    const invoices = await listInvoices();
    return new Response(JSON.stringify(invoices), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch invoices', details: error }),
      { status: 500 }
    );
  }
}
