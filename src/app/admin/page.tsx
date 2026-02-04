import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Force dynamic to ensure we see new submissions in real-time
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // Fetch all submissions, newest first
  const submissions = await prisma.labSubmission.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gray-900 p-8 font-sans text-gray-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Admin Dashboard <span className="text-red-500">[LAB ONLY]</span>
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Reviewing captured credentials for security awareness analysis.
            </p>
          </div>
          <div className="rounded-full bg-green-500/10 px-4 py-1 text-sm font-medium text-green-400 border border-green-500/20">
            {submissions.length} Submissions Total
          </div>
        </header>

        <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-800/50 shadow-2xl backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-800 text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-6 py-4 font-semibold">Captured Date</th>
                <th className="px-6 py-4 font-semibold">Email / Username</th>
                <th className="px-6 py-4 font-semibold">Password</th>
                <th className="px-6 py-4 font-semibold">User Agent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    No data captured yet. Launch the lab to see results.
                  </td>
                </tr>
              ) : (
                submissions.map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-blue-400">
                      {item.email}
                    </td>
                    <td className="px-6 py-4">
                      <code className="rounded bg-black/40 px-2 py-1 text-red-400">
                        {item.password}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500 max-w-xs truncate">
                      {item.userAgent || "N/A"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}