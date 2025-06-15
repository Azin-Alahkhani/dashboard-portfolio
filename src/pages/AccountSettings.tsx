import Layout from "../components/Layout";
import { useUserStore } from "../store/useUserStore";
import { useState } from "react";
import Avatar from "boring-avatars";
import { ne } from "@faker-js/faker/.";

export function AccountSettings() {
  const {
    name,
    email,
    avatar,
    linkedAccounts,
    setUser,
    linkAccount,
    unlinkAccount,
  } = useUserStore();

  const [saved, setSaved] = useState(false);
  const [newUserName, setNewUserName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const saveChanges = () => {
    setSaved(true);
    setUser({ name: newUserName, email: newEmail, avatar });
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLink = (platform: string) => {
    const username = prompt(`Enter your ${platform} handle:`);
    if (!username) return;
    linkAccount(platform, username);
  };

  const handleUnlink = (platform: string) => {
    const shouldUnlink = window.prompt(`Type "yes" to unlink ${platform}:`);
    if (shouldUnlink?.toLowerCase() !== "yes") return;
    unlinkAccount(platform);
  };

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Account Settings</h1>

        {/* Personal Info */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
          <h2 className="text-xl font-semibold">Personal Info</h2>
          <div className="flex items-center gap-4">
            <Avatar
              size={64}
              name={name}
              variant="beam"
              colors={["#FFDDC1", "#FCA5A5", "#FCD34D", "#A7F3D0", "#93C5FD"]}
            />
            <div className="flex flex-col gap-2 w-full md:flex-row md:items-center md:gap-4">
              <input
                className="w-full rounded border px-4 py-2 dark:bg-gray-700"
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
              <input
                className="w-full rounded border px-4 py-2 dark:bg-gray-700"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Linked Accounts */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
          <h2 className="text-xl font-semibold">Social Accounts</h2>
          <ul className="space-y-3">
            {Object.entries(linkedAccounts).map(([platform, acc]) => {
              const data = acc as { linked: boolean; username?: string };
              return (
                <li
                  key={platform}
                  className="flex justify-between items-center px-2"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{platform}</span>
                    {data.linked && data.username && (
                      <span className="text-sm text-gray-500">
                        Connected as <strong>{data.username}</strong>
                      </span>
                    )}
                  </div>
                  {data.linked ? (
                    <button
                      onClick={() => handleUnlink(platform)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Unlink
                    </button>
                  ) : (
                    <button
                      onClick={() => handleLink(platform)}
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Link
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={saveChanges}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            {saved ? "Saved ✓" : "Save Changes"}
          </button>
        </div>
      </div>
    </Layout>
  );
}
