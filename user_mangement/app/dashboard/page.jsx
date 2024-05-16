import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
const Dashboard = async () => {
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-green-400 border p-4">Welcome to the Dashboard</h1>
      {session && (
        <div className="mt-4">
          <h2 className="text-gray-600">User Information</h2>
          <p className=" text-gray-900 underline p-3 border-collapse"></p>
          <p className="text-gray-500">Email: {session.email}</p>
          <p className="text-gray-500">Username: {session.username}</p>
          <p className="text-gray-500">
            Accepting Messages: {session.isAcceptingMessages ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
